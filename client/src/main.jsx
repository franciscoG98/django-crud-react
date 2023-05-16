import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom"
import TaskPage from './pages/TaskPage.jsx';
import TaskFormPage from './pages/TaskFormPage.jsx';
import { Toaster } from 'react-hot-toast';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to='/tasks' />,
  },
  {
    path: "/tasks",
    element: <TaskPage />,
  },
  {
    path: "/tasks-create",
    element: <TaskFormPage />,
  },
  {
    path: "/tasks/:id",
    element: <TaskFormPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container mx-auto'>
      <RouterProvider router={router} />
      <Toaster />
    </div>
  </React.StrictMode>,
)
