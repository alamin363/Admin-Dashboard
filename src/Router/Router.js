import { createBrowserRouter, Navigate } from "react-router-dom";
import Customers from "scenes/Customest/Customers";
import Daily from "scenes/Daily";
import Dashboard from "scenes/dashboard/dashbord";
import Geography from "scenes/Geography/Geography";
import Layout from "scenes/layout/Layout";
import Overview from "scenes/Overview/Overview";
import Products from "scenes/products/Products";
import Transaction from "scenes/Transaction/Transaction";

export const router = createBrowserRouter([
  {
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
      {
        path: "/customers",
        element: <Customers />,
      },
      {
        path: "/transactions",
        element: <Transaction />,
      },
      {
        path: "/geography",
        element: <Geography />,
      },
      {
        path: "/overview",
        element: <Overview />,
      },
  
      {
        path: "/daily",
        element: <Daily />,
      },
    ],
  },
]);
