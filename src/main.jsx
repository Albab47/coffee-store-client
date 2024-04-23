import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./components/AddCoffee";
import UpdateCoffee from "./components/UpdateCoffee";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import AuthProvider from "./providers/AuthProvider";
import Users from "./components/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetch("https://coffee-store-server-ten-theta.vercel.app/coffee"),
      },
      {
        path: "/add-coffee",
        element: <AddCoffee />,
      },
      {
        path: "/update-coffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(`https://coffee-store-server-ten-theta.vercel.app/coffee/${params.id}`),
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch("https://coffee-store-server-ten-theta.vercel.app/users"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
