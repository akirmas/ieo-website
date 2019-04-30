import { lazy } from 'react';

import { withProps } from '../hocs';

const Home = lazy(() => import('../pages/Home'));
const KeyRoles = lazy(() => import('../pages/KeyRoles'));

const routes = [
  {
    path: '/',
    exact: true,
    render: withProps(Home),
  }, {
    path: '/about/key-roles',
    render: withProps(KeyRoles),
  }
];

export default routes;