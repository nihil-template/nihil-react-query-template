import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { HomePage } from './pages';
import { TestDetailPage } from './pages/TestDetailPage';

import '@/styles/tailwind.css';

const queryClient = new QueryClient();

const ReduxApp = (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/todos/:id' element={<TestDetailPage />} />
      </Routes>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
  </QueryClientProvider>
);

const root = createRoot(document.querySelector('#root'));
root.render(ReduxApp);
