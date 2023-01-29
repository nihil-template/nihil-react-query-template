import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import tw, { css } from 'twin.macro';
import { AppLayout } from '@/layouts/AppLayout';
import { getTodos } from '@/data/queries';
import { ITodo } from '@/types/todos.types';
import { setMetaData } from '@/data/setMetaData';

export function HomePage() {
  const {
    isLoading, isError, error, data,
  } = useQuery<ITodo[], Error>([ 'getTotos', ], getTodos);

  const noStyle = css`
    ${tw` mr-2 text-[1.2rem] p-2 bg-blue-500 inline-block rounded-1 text-black-50 `}
  `;

  const meta = setMetaData({
    title: 'Home',
    url: '/',
  });

  return (
    <>
      <AppLayout meta={meta}>
        {isLoading && <div>로딩중</div>}
        {isError && <div>{error.message}</div>}

        <div>
          <h1>홈</h1>

          <h2>테스트 리스트</h2>
          <div>
            {data?.map((item) => (
              <div key={item.id}>
                <span css={noStyle}>{item.id}</span>
                <Link to={`/todos/${item.id}`}>[ {item.title} ]</Link>
              </div>
            ))}
          </div>
        </div>
      </AppLayout>
    </>
  );
}
