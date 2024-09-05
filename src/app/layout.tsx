import 'highlight.js/styles/tokyo-night-dark.css';

import '@/app/app.css';

import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import Link from 'next/link';
import { GoogleTagManager } from '@next/third-parties/google';

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
      <body className="font-noto-sans dark:bg-slate-800">
        <div className="prose prose-slate dark:prose-invert mx-auto max-w-3xl p-6">
          <header>
            <h1 className="flex items-baseline justify-between">
              <Link href="/">Emre Yilmaz</Link>
              <a
                href="https://x.com/emreloperr"
                target="_blank"
                rel="noreferrer"
                title="Follow me on X"
              >
                <svg
                  className="h-6 w-6 fill-[--tw-prose-body]"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>X</title>
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
            </h1>
          </header>
          <hr />
          {children}
        </div>
      </body>
    </html>
  );
}
