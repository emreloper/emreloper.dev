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
      <div className="flex">
        <a
          id="1373766"
          className="mx-auto"
          href="https://digitalocean.pxf.io/c/2199350/1373766/15890?u=https%3A%2F%2Ftry.digitalocean.com%2Fdeveloperbrand%2F"
          target="_top"
        >
          <Image
            src="//a.impactradius-go.com/display-ad/15890-1373766"
            alt=""
            width={300}
            height={250}
          />
        </a>
        <Image
          className="invisible absolute"
          src="https://imp.pxf.io/i/2199350/1373766/15890"
          alt=""
          height={0}
          width={0}
          unoptimized
        />
      </div>
    </>
  );
}
