import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { App } from './modules/App';
import { Providers } from './modules/Providers';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Providers>
    <App />
  </Providers>,
);
