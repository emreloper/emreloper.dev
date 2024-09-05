import { ReactNode } from 'react';

export default function Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <main itemScope itemType="https://schema.org/BlogPosting">
      {children}
    </main>
  );
}
