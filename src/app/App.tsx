import { routeTree } from '@app/routes';
import { Router, RouterProvider } from '@tanstack/react-router';

import Loader from '@app/components/Loader';

export const router = new Router({
  routeTree,
  defaultPendingComponent: () => (
    <div className="p-2 text-2xl">
      <Loader />
    </div>
  )
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
