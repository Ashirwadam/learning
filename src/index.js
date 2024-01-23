import React from 'react';
import ReactDOM from 'react-dom/client';
import {UsingComponent} from './HelloReact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // This just injects the created react node into the root element of dom (which is div in our case as evident from index.html)
  <React.StrictMode>
    <UsingComponent />
  </React.StrictMode>
);

