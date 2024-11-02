import 'highlight.js/styles/tokyo-night-dark.css';

import '@/app/app.css';

import { SparklesIcon } from '@heroicons/react/24/solid';
import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  fallback: ['sans-serif'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('/', process.env.NEXT_PUBLIC_PUBLIC_URL),
  title: {
    template: '%s | Emre Yilmaz',
    default: 'Blog | Emre Yilmaz',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
      <body className="font-noto-sans text-slate-700 dark:bg-slate-800 dark:text-slate-300">
        <div className="px-6">
          <header className="mx-auto mb-6 max-w-prose py-6">
            <h1 className="text-xl text-slate-900 dark:text-white">
              <Link className="inline-flex gap-x-3" href="/">
                <SparklesIcon className="size-6 text-amber-500" />
                <span>Emre Yilmaz</span>
              </Link>
            </h1>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
