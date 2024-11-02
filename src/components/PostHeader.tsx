import { ArticleMetadata } from '@/types/metadata';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Markdown from 'react-markdown';

export function PostHeader({ title, description, openGraph }: ArticleMetadata) {
  const image = openGraph.images[0];

  return (
    <>
      <header>
        <h1 itemProp="headline">{title}</h1>
        <Markdown>{description}</Markdown>
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
        <address
          className="flex items-center gap-x-2 text-sm/4 not-italic"
          itemProp="author"
          itemScope
          itemType="https://schema.org/Person"
        >
          <div>
            <UserCircleIcon className="size-9" />
          </div>
          <div className="inline-flex flex-col">
            <span itemProp="name">Emre Yilmaz</span>
            <a className="mt-1" itemProp="url" href="https://x.com/emreloperr">
              @emreloperr
            </a>
          </div>
        </address>
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
