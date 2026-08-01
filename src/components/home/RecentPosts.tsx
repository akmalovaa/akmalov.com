import React from 'react';
import Link from '@docusaurus/Link';
import { usePluginData } from '@docusaurus/useGlobalData';

type Post = {
  title: string;
  description: string;
  permalink: string;
  date: string;
  dateLabel: string;
  tags: string[];
};

type BlogData = {
  recentPosts: Post[];
  totalPosts: number;
};

export default function RecentPosts() {
  const { recentPosts } = usePluginData('blog-data') as BlogData;

  if (!recentPosts?.length) {
    return null;
  }

  return (
    <section className="relative py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3">Последние записи</h2>
          <p className="text-gray-400 text-lg m-0">Свежее из блога</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recentPosts.map((post) => (
            <Link
              key={post.permalink}
              to={post.permalink}
              className="group flex flex-col p-6 rounded-xl
                bg-white/[0.02] border border-white/10
                hover:border-cyan-500/40 hover:bg-white/[0.04]
                transition-all duration-300
                no-underline hover:no-underline"
            >
              <time dateTime={post.date} className="text-sm text-gray-400 mb-2">
                {post.dateLabel}
              </time>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 grow">
                {post.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-md bg-white/[0.06] text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-7 py-3
              border border-white/35 hover:border-cyan-500/50
              text-gray-200 hover:text-cyan-400
              rounded-xl text-sm font-medium transition-all duration-300
              no-underline hover:no-underline hover:bg-cyan-500/[0.05]"
          >
            Все записи блога <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
