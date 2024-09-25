import { ReactNode } from 'react';

export default function Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <main>
      <article
        className="prose prose-slate dark:prose-invert mx-auto"
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
        {children}
      </article>
    </main>
  );
}
