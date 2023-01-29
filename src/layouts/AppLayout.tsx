import React from 'react';
import {
  Footer, Header, Main, Nav
} from '@/components/Layout';
import { IMetaData } from '@/types/site.types';
import { Meta } from '@/components/Layout/Meta';

interface ILayout {
  children: React.ReactNode;
  meta?: IMetaData;
}

export function AppLayout({ children, meta, }: ILayout) {
  return (
    <>
      {meta && <Meta meta={meta} />}
      <Header />
      <Nav />

      <Main>
        {children}
      </Main>

      <Footer />
    </>
  );
}
