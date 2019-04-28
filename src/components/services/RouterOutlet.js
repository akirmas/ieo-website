import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const RouterOutlet = ({ routes, fallback = null }) => {
  const renderRoute = (route) => (
    <Route key={route.path} {...route} />
  );

  return (
    <Suspense fallback={fallback}>
      <Switch>
        {routes.map(renderRoute)}
      </Switch>
    </Suspense>
  );
};

RouterOutlet.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      exact: PropTypes.bool,
      render: PropTypes.func.isRequired,
      component: PropTypes.node,
    })
  ).isRequired,
  fallback: PropTypes.any,
};

export default RouterOutlet;