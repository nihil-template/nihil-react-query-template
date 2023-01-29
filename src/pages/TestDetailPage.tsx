import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { AppLayout } from '@/layouts/AppLayout';
import { ITodo } from '@/types/todos.types';
import { getTodo } from '@/data/queries';
import { setMetaData } from '@/data/setMetaData';
import { appData } from '@/data/appData';

export function TestDetailPage() {
  const { id, } = useParams();
  const {
    isLoading, isError, error, data,
  } = useQuery<ITodo, Error>([ 'getTodo', id, ], () => getTodo(id));
  // 게시글의 상세 페이지 같은 것들은 쿼리 키를 배열로 두어 식별 장치를 여러개로 만들어놔야한다.

  const meta = setMetaData({
    url: `/todos/${id}`,
  });

  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>로딩중...</title>
        </Helmet>

        <div>로딩중...</div>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <Helmet>
          <title>에러 - {error.name}</title>
        </Helmet>

        <div>{error.message}</div>
      </>
    );
  }

  return (
    <>
      <AppLayout meta={meta}>
        <Helmet>
          <title>{data.title} - {appData.siteName}</title>
        </Helmet>

        <div>
          <h1>테스트 상세 페이지</h1>

          <div>
            <h2>{data.title}</h2>
            <div>{data.content}</div>
          </div>
        </div>
        <div>
          <Link to='/'>[ 홈 ]</Link>
        </div>
      </AppLayout>
    </>
  );
}
