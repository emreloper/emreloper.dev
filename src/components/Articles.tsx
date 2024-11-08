import { ArticleMetadata } from '@/types/metadata';
import Image from 'next/image';
import Link from 'next/link';
import fs from 'node:fs';
import path from 'node:path';
import Markdown from 'react-markdown';

interface Article {
  slug: string;
  metadata: ArticleMetadata;
}

export async function Articles() {
  const articles = await Promise.all(
    fs
      .readdirSync(path.join(process.cwd(), 'src', 'app', 'blog'), {
        withFileTypes: true,
        recursive: true,
      })
      .reduce<Promise<Article>[]>((acc, content) => {
        if (content.name === 'page.mdx') {
          const slug = content.parentPath.split('/').at(-1)!;

          acc.push(
            import(`@/app/blog/${slug}/page.mdx`).then((article) => ({
              slug,
              metadata: article.metadata,
            })),
          );
        }

        return acc;
      }, []),
  );

  articles.sort(
    (a, b) =>
      new Date(b.metadata.openGraph.publishedTime).getTime() -
      new Date(a.metadata.openGraph.publishedTime).getTime(),
  );

  return (
    <article className="mx-auto mt-16 max-w-prose">
      <h2 className="text-2xl text-slate-900 dark:text-white">Articles</h2>
      <div className="mt-8 flex flex-col gap-y-16">
        {articles.map((article) => {
          const { metadata, slug } = article;
          const { title, description, openGraph } = metadata;
          const { publishedTime } = openGraph;
          const image = openGraph.images[0];

          return (
            <article
              key={article.slug}
              className="flex items-start gap-x-4 md:gap-x-8"
            >
              <div className="prose prose-slate dark:prose-invert grow">
                <h3 className="text-slate-900 dark:text-white">
                  <Link href={`/blog/${slug}`}>{title}</Link>
                </h3>
                <Markdown>{description}</Markdown>
                <p>
                  <time dateTime={publishedTime}>
                    {new Date(publishedTime).toLocaleDateString('en-US', {
                      dateStyle: 'long',
                    })}
                  </time>
                </p>
              </div>
              <div className="relative hidden aspect-[1/1] w-40 flex-none md:block">
                <Image
                  className="object-cover"
                  src={image.url.toString()}
                  alt={image.alt ?? ''}
                  sizes="160px"
                  fill
                />
              </div>
            </article>
          );
        })}
      </div>
    </article>
  );
}
