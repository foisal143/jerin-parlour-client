import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import router from './Routes/Routes';
import AuthProvaider from './AuthProvaider/AuthProvaider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
// Create a client
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvaider>
        <RouterProvider router={router}></RouterProvider>
        <Toaster />
      </AuthProvaider>
    </QueryClientProvider>
  </React.StrictMode>
);
