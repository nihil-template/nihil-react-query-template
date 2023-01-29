import React from 'react';
import { Helmet } from 'react-helmet';
import { IMetaData } from '@/types/site.types';
import { appData } from '@/data/appData';

interface IMetaProps {
  meta: IMetaData;
}

export function Meta({ meta, }: IMetaProps) {
  const title = `${meta.title} - ${appData.siteName}`;
  const url = `${appData.siteUrl}${meta.url}`;
  const image = meta.image ? meta.image : appData.siteImage;
  const keywords = meta.keywords ? meta.keywords : appData.siteKeywords;
  const description = meta.description ? meta.description : appData.siteDescription;
  const type = meta.type ? meta.type : appData.siteType;

  return (
    <>
      <Helmet>
        <meta property='og:site_name' content={appData.siteName} />
        <meta property='og:title' content={title} />
        <meta property='og:type' content={type} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={image} />
        <meta property='og:url' content={url} />
        <meta property='og:locale' content='ko_KR' />

        {type === 'article' && (
          <>
            <meta property='article:section' content={meta.section} />
            <meta property='article:tag' content={meta.tags} />
            <meta property='article:author' content='NIHILncunia' />
            <meta property='article:published_time' content={meta.createdAt} />
            <meta property='article:modified_time' content={meta.updatedAt} />
          </>
        )}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@NIHILncunia' />
        <meta name='twitter:creator' content='@NIHILncunia' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={image} />

        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta name='generator' content='MS Visual Studio Code' />
        <meta name='author' content='NIHILncunia' />
        <link rel='canonical' href={url} />

        <title>{title}</title>
      </Helmet>
    </>
  );
}
