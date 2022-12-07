import React from 'react';
import { Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import Discover from '@/views/discover';
import Focus from '@/views/focus';
import Mine from '@/views/mine';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'/discover'} />
  },
  {
    path: 'discover',
    element: <Discover />
  },
  {
    path: 'focus',
    element: <Focus />
  },
  {
    path: 'mine',
    element: <Mine />
  }
];

export default routes;
