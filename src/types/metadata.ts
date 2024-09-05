import { Metadata } from 'next';

type OGImageDescripton = Omit<
  Extract<NonNullable<Metadata['openGraph']>['images'], { url: string | URL }>,
  'width' | 'height'
> & {
  width: number;
  height: number;
};

type OpenGraphArticle = Omit<
  Extract<NonNullable<Metadata['openGraph']>, { type: 'article' }>,
  'images' | 'publishedTime'
> & {
  images: OGImageDescripton[];
  publishedTime: string;
};

export type ArticleMetadata = Omit<Metadata, 'title' | 'openGraph'> & {
  title: string;
  openGraph: OpenGraphArticle;
};
