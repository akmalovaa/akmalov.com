import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
// import { useBlogPost } from "@docusaurus/theme-common/internal";
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import Giscus from "@giscus/react";

export default function BlogPostItemWrapper(props) {
  const { isBlogPostPage } = useBlogPost();
  if (!isBlogPostPage) {
    return <BlogPostItem {...props} />;
  }
  return (
    <>
      <BlogPostItem {...props} />
      {(
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
      )}
    </>
  );
}