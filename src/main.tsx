import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Blog,
  Catalog,
  Certificates,
  ChangeProfile,
  Club,
  Contacts,
  Delivery,
  Home,
  SignIn,
  SignUp,
  SingleProduct,
} from "./routes";
import RootLayout from "./layout/RootLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfileLayout from "./layout/ProfileLayout";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        path: "/profile",
        element: <ProfileLayout />,
        children: [
          {
            path: "/profile",
            element: <ChangeProfile />,
          },
        ],
      },

      {
        path: "/catalog",
        element: <Catalog />,
      },
      {
        path: "/catalog/:id",
        element: <SingleProduct />,
      },
      {
        path: "/club",
        element: <Club />,
      },
      {
        path: "/certificates",
        element: <Certificates />,
      },
      {
        path: "/delivery",
        element: <Delivery />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
