const fs = require('fs/promises');
const path = require('path');
const { DEFAULT_PARSE_FRONT_MATTER } = require('@docusaurus/utils');

const RECENT_LIMIT = 4;

const dateFormatter = new Intl.DateTimeFormat('ru', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

/**
 * The blog plugin keeps its content to itself, so custom pages have no way to
 * read posts. This re-reads the front matter of `blog/<slug>/index.md` and
 * exposes it as global data: the newest posts for the homepage feed and a post
 * count per tag for the topic cards.
 */
module.exports = function blogDataPlugin(context) {
  const blogDir = path.join(context.siteDir, 'blog');

  return {
    name: 'blog-data',

    getPathsToWatch() {
      return [path.join(blogDir, '*', 'index.md')];
    },

    async loadContent() {
      const entries = await fs.readdir(blogDir, { withFileTypes: true });
      const posts = [];

      for (const entry of entries) {
        // Docusaurus does not publish directories prefixed with _ or .
        if (!entry.isDirectory() || /^[_.]/.test(entry.name)) {
          continue;
        }

        const filePath = path.join(blogDir, entry.name, 'index.md');
        let fileContent;
        try {
          fileContent = await fs.readFile(filePath, 'utf8');
        } catch {
          continue; // not a post directory
        }

        const { frontMatter } = await DEFAULT_PARSE_FRONT_MATTER({
          filePath,
          fileContent,
        });
        if (frontMatter.draft || frontMatter.unlisted) {
          continue;
        }

        const date =
          frontMatter.date instanceof Date
            ? frontMatter.date
            : new Date(frontMatter.date);
        const tags = (Array.isArray(frontMatter.tags) ? frontMatter.tags : [])
          .map((tag) => (typeof tag === 'string' ? tag : tag?.label))
          .filter(Boolean);

        posts.push({
          title: frontMatter.title ?? entry.name,
          description: frontMatter.description ?? '',
          permalink: `/blog/${frontMatter.slug ?? entry.name}`,
          date: date.toISOString(),
          // Formatted here so the markup is identical on server and client
          dateLabel: dateFormatter.format(date),
          tags,
        });
      }

      posts.sort((a, b) => b.date.localeCompare(a.date));

      const tagCounts = {};
      for (const post of posts) {
        for (const tag of post.tags) {
          tagCounts[tag] = (tagCounts[tag] ?? 0) + 1;
        }
      }

      return {
        recentPosts: posts.slice(0, RECENT_LIMIT),
        tagCounts,
        totalPosts: posts.length,
      };
    },

    async contentLoaded({ content, actions }) {
      actions.setGlobalData(content);
    },
  };
};
