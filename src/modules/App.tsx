import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { paths } from '../const/paths';
import { Layout } from './Layout';
import { Error } from './Error';
import { Beers } from './Beers/components/Beers';
import { Home } from './Home/components/Home';
import { Beer } from './Beers/components/Beer';

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={paths.home} element={<Home />} errorElement={<Error />} />
          <Route path={paths.recipes} element={<Beers />} errorElement={<Error />} />
          <Route path={`${paths.recipes}/${paths.recipeId}`} element={<Beer />} errorElement={<Error />} />
          <Route path={paths.error} element={<Error />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
