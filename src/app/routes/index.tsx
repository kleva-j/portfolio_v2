import { Route } from '@tanstack/react-router';

import { rootRoute } from './root';

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  component: Home,
  path: '/'
});

function Home() {
  return (
    <div>
      <h2>This is the Home page</h2>
    </div>
  );
}

export const routeTree = rootRoute.addChildren([indexRoute]);
