import { lazy } from 'react';

import { withProps } from '../hocs';

const Home = lazy(() => import('../pages/Home'));

const routes = [
  {
    path: '/',
    exact: true,
    render: withProps(Home),
  }
];

export default routes;