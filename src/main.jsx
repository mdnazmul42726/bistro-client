import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Root";
import Home from "./pages/Home";
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import Login from "./pages/Login";
import AuthProvider from "./AuthProvider";
import Register from "./pages/Register";
import Dashboard from "./pages/xx/Dashboard";
import Cart from "./pages/xx/Cart";
import Users from "./pages/xx/Users";
import Img from "./pages/xx/Img";
import Payment from "./pages/xx/Payment";

const router = createBrowserRouter([
  {
    path: "/", element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/menu", element: <Menu /> },
      { path: "/order", element: <Order />, loader: () => fetch('http://localhost:5000/menu/v1') },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> }
    ]
  },
  {
    path: "/dashboard", element: <Dashboard />,
    children: [
      { path: "/dashboard/cart", element: <Cart /> },
      { path: "/dashboard/users", element: <Users /> },
      { path: "/dashboard/add-items", element: <Img /> },
      { path: "/dashboard/payment", element: <Payment /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </HelmetProvider>
    </QueryClientProvider>

  </React.StrictMode>
);