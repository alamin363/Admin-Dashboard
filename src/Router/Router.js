import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "scenes/dashboard/dashbord";
import Layout from "scenes/layout/Layout";
import Products from "scenes/products/Products";

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
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);
