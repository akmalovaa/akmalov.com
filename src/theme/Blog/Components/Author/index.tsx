import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import AuthorSocials from '@theme/Blog/Components/Author/Socials';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';

function MaybeLink(props: {href?: string; className?: string; children: React.ReactNode}) {
  if (props.href) {
    return <Link {...props} />;
  }
  return <>{props.children}</>;
}

export default function BlogAuthor({as, author, className, count}) {
  const {name, title, url, imageURL, email, page} = author;
  const link = page?.permalink || url || (email && `mailto:${email}`) || undefined;

  let isBlogPostPage = false;
  try {
    const blogPost = useBlogPost();
    isBlogPostPage = blogPost.isBlogPostPage;
  } catch {
    // Not in a blog post context (e.g. authors page)
  }

  // Enhanced card style for blog post pages
  if (isBlogPostPage) {
    return (
      <div
        className={clsx('flex items-center gap-4 rounded-xl px-5 py-4', className)}
        style={{
          background: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}>
        {imageURL && (
          <MaybeLink href={link} className="shrink-0">
            <img
              src={imageURL}
              alt={name}
              style={{
                width: 60,
                height: 60,
                minWidth: 60,
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
          </MaybeLink>
        )}
        <div className="flex flex-col gap-0.5">
          {name && (
            <MaybeLink href={link}>
              <span className="text-base font-semibold text-white">{name}</span>
            </MaybeLink>
          )}
          {title && (
            <span className="text-sm" style={{color: 'rgba(255,255,255,0.5)'}}>
              {title}
            </span>
          )}
          <AuthorSocials author={author} />
        </div>
      </div>
    );
  }

  // Default compact style for lists / other contexts
  return (
    <div className={clsx('avatar margin-bottom--sm', className)}>
      {imageURL && (
        <MaybeLink href={link} className="avatar__photo-link">
          <img className="avatar__photo" src={imageURL} alt={name} />
        </MaybeLink>
      )}
      {(name || title) && (
        <div className="avatar__intro">
          <div className="avatar__name">
            {name && (
              <MaybeLink href={link}>
                <span>{name}</span>
              </MaybeLink>
            )}
          </div>
          {title && <small>{title}</small>}
          <AuthorSocials author={author} />
        </div>
      )}
    </div>
  );
}
