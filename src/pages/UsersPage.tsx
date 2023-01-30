import React from 'react';
import { useQuery } from 'react-query';
import { AppLayout } from '@/layouts/AppLayout';
import { getUsers } from '@/data/queries';
import { IUser } from '@/types/todos.types';

export function UsersPage() {
  const {
    isLoading, isError, error, data,
  } = useQuery<IUser[], Error>([ 'getUsers', ], getUsers);

  if (isLoading) {
    return (
      <div>로딩중...</div>
    );
  }

  if (isError) {
    return (
      <div>{error.message}</div>
    );
  }

  return (
    <>
      <AppLayout>
        <div>
          <h1>유저 목록</h1>

          <div>
            {data.map((user) => (
              <div key={user.id}>
                <h2>{user.userId}</h2>
              </div>
            ))}
          </div>
        </div>
      </AppLayout>
    </>
  );
}
