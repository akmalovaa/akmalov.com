import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import BlogAuthor from '@theme/Blog/Components/Author';
import Giscus from "@giscus/react";

export default function BlogPostItemWrapper(props) {
  const { isBlogPostPage, metadata, assets } = useBlogPost();
  if (!isBlogPostPage) {
    return <BlogPostItem {...props} />;
  }

  const authors = metadata.authors || [];

  return (
    <>
      <BlogPostItem {...props} />
      {authors.length > 0 && (
        <div className="margin-top--lg margin-bottom--lg">
          {authors.map((author, idx) => (
            <BlogAuthor
              key={idx}
              author={{
                ...author,
                imageURL: assets.authorsImageUrls[idx] ?? author.imageURL,
              }}
            />
          ))}
        </div>
      )}
      <div className="docusaurus-blog-comments">
        <Giscus
          repo="akmalovaa/akmalov.com"
          repoId="R_kgDOI0gPCg"
          category="General"
          categoryId="DIC_kwDOI0gPCs4CXR_A"
          mapping="pathname"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="bottom"
          theme="dark"
          lang={'ru'}
          loading="lazy"
        />
      </div>
    </>
  );
}
