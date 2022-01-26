import React from 'react';
import Master from '../layouts/master'
import Home from '../pages/index'
 
export const routes = [
  {
    path: "/",
    component: <Master />,
    routes: [
      {
        path: "/",
        exact: true,
        component: <Home />,
      }
    ]
  },
]