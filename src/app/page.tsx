import { ArticleMetadata } from '@/types/metadata';
import Image from 'next/image';
import Link from 'next/link';
import fs from 'node:fs';
import path from 'node:path';

interface Article {
  slug: string;
  metadata: ArticleMetadata;
}

const FILE_REGEX = /.+\..{2,3}$/;

export default async function Page() {
  const articles = await Promise.all(
    fs
      .readdirSync(path.join(process.cwd(), 'src', 'app', 'blog'))
      .reduce<Promise<Article>[]>((acc, content) => {
        if (FILE_REGEX.test(content) === false) {
          acc.push(
            import(`@/app/blog/${content}/page.mdx`).then((article) => ({
              slug: content,
              metadata: article.metadata,
            })),
          );
        }

        return acc;
      }, []),
  );

  return (
    <main>
      <article>
        <h2>Articles</h2>
        {articles.map((article) => {
          const { metadata, slug } = article;
          const { title, description, openGraph } = metadata;
          const { publishedTime } = openGraph;
          const image = openGraph.images[0];

          return (
            <article key={article.slug} className="flex gap-x-4 md:gap-x-8">
              <div className="grow">
                <h3>
                  <Link href={`/blog/${slug}`}>{title as string}</Link>
                </h3>
                <p>{description}</p>
                <p>
                  {publishedTime && (
                    <time dateTime={publishedTime}>
                      {new Date(publishedTime).toLocaleDateString('en-US', {
                        dateStyle: 'long',
                      })}
                    </time>
                  )}
                </p>
              </div>
              <div className="w-20 flex-none md:w-40">
                <Image
                  src={image.url as string}
                  alt={image.alt ?? ''}
                  width={160}
                  height={160}
                  sizes="160px"
                />
              </div>
            </article>
          );
        })}
      </article>
    </main>
  );
}
