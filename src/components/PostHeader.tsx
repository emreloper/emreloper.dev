import { ArticleMetadata } from '@/types/metadata';
import Image from 'next/image';

export function PostHeader({ title, description, openGraph }: ArticleMetadata) {
  const image = openGraph.images[0];

  return (
    <>
      <header>
        <h1 itemProp="headline">{title}</h1>
        <p>{description}</p>
        <p>
          <time
            itemProp="datePublished"
            content={openGraph.publishedTime}
            dateTime={openGraph.publishedTime}
          >
            {new Date(openGraph.publishedTime).toLocaleDateString('en-US', {
              dateStyle: 'long',
            })}
          </time>
        </p>
        <p>
          by{' '}
          <span
            itemProp="author"
            itemScope
            itemType="https://schema.org/Person"
          >
            <a itemProp="url" href="/">
              <span itemProp="name">Emre Yilmaz</span>
            </a>
          </span>
        </p>
      </header>
      <Image
        itemProp="image"
        src={image.url.toString()}
        alt={image.alt ?? ''}
        width={image.width}
        height={image.height}
        sizes="680px"
        priority
      />
    </>
  );
}
