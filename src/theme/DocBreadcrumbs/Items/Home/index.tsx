import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function HomeBreadcrumbItem() {
  const docsHref = useBaseUrl('/docs');
  return (
    <li className="breadcrumbs__item">
      <Link aria-label="Docs" className="breadcrumbs__link" href={docsHref}>
        Docs
      </Link>
    </li>
  );
}
