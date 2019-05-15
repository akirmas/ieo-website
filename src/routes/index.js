import { lazy } from 'react';

import { withProps } from '../hocs';

const Home = lazy(() => import('../pages/Home'));
const KeyRoles = lazy(() => import('../pages/KeyRoles'));
const General = lazy(() => import('../pages/General'));
const NotFound = lazy(() => import('../pages/NotFound'));

/**
 * TODO: configure independent routing
 */
const routes = [
  {
    path: '/',
    exact: true,
    render: withProps(Home),
  }, {
    path: '/about/key-roles',
    render: withProps(KeyRoles),
  }, {
    path: '/:category?/:name',
    render: withProps(General),
  }, {
    path: '*',
    render: withProps(NotFound),
  }
];

export default routes;