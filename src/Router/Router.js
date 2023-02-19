import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "scenes/dashboard/dashbord";
import Layout from "scenes/layout/Layout";

export const router = createBrowserRouter([
  {
    // path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
