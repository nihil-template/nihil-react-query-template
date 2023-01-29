export interface IAppData {
  siteName: string;
  siteUrl: string;
  siteImage: string;
  siteKeywords: string;
  siteDescription: string;
  siteType: string;
}

export interface IMetaData {
  title?: string;
  url: string;
  description?: string;
  tags?: string;
  keywords?: string;
  image?: string;
  type?: string;
  section?: string;
  createdAt?: string;
  updatedAt?: string;
}
