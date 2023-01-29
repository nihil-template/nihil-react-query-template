import { IAppData } from '@/types/site.types';

export const appData: IAppData = {
  siteName: '리액트 쿼리 테스트',
  siteUrl: process.env.NODE_ENV !== 'production'
    ? 'https://localhost:3000'
    : '',
  siteImage: '',
  siteDescription: '그냥 테스트',
  siteKeywords: '리액트,리액트쿼리,React,ReactQuery',
  siteType: 'website',
};
