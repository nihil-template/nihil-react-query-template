import React from 'react';
import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <>
      <nav>
        <Link to='/'>홈</Link>
        <Link to='/test'>테스트</Link>
      </nav>
    </>
  );
}
