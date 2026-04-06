import React from 'react';
import Authors from '@theme-original/BlogPostItem/Header/Authors';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';

export default function AuthorsWrapper(props) {
  const {isBlogPostPage} = useBlogPost();
  // Hide from header on blog post pages (shown at bottom instead)
  // Hide from blog list page
  if (isBlogPostPage) {
    return null;
  }
  return null;
}
