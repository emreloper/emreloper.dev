import { Articles } from '@/components/Articles';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  description:
    "I'm Emre, a developer from the future. I build AI apps in public, and write about the journey.",
};

export default async function Page() {
  return (
    <main>
      <article className="mx-auto max-w-prose">
        <h2 className="text-2xl text-slate-900 dark:text-white">Projects</h2>
        <div className="mt-8">
          <ul className="flex flex-col gap-y-4">
            <li>
              <a
                className="inline-flex items-center"
                href="https://parlamigo.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowTopRightOnSquareIcon className="size-5" />
                <div className="ml-3">
                  <strong>Parlamigo</strong>
                  <span> - AI Language Tutor 💬</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </article>
      <Suspense fallback={<div>Loading articles....</div>}>
        <Articles />
      </Suspense>
    </main>
  );
}
