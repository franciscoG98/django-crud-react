import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom"
import TaskPage from './pages/TaskPage.jsx';
import TaskFormPage from './pages/TaskFormPage.jsx';

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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
