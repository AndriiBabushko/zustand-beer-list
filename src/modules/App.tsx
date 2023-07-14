import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Home } from '../pages/Home/Home';
import { path } from './const/path';
import { Error } from '../pages/Home/Error';

const appRouter = createBrowserRouter([
  {
    path: path.home,
    element: <Home />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
