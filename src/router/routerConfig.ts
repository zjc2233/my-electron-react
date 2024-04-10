import React, { lazy } from 'react';

export default [
  {
    path: '/',
    exact: true,
    component: lazy(() => import(`../pages/home/index`)),
  },
  //   {
  //     path: '/user',
  //     layout: false,
  //     routes: [
  //       {
  //         name: 'login',
  //         path: '/user/login',
  //         exact: true,
  //         component: './pages/User/Login',
  //       },
  //     ],
  //   },
  //   {
  //     path: '/about',
  //     component: './pages/About',
  //   },
];
