import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import customRoute from './routing'; 


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <RouterProvider router={customRoute} />
  </React.StrictMode>
);
