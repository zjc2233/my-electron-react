import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// 递归创建路由
const createRoutes = (routesConfig: any) => {
  return routesConfig.map((route: any) => {
    if (route.routes) {
      // 子路由存在
      return createRoutes(route.routes);
    }

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <route.component />
          </Suspense>
        }
      />
    );
  });
};

// 路由配置
import routesConfig from './routerConfig';

const RoutesStructure = () => {
  return (
    <Router>
      <Routes>
        {createRoutes(routesConfig)}
      </Routes>
    </Router>
  );
};

export default RoutesStructure;
