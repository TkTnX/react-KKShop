import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Blog,
  Catalog,
  ChangeProfile,
  Club,
  Contacts,
  Delivery,
  Favorites,
  Home,
  Order,
  Purchases,
  SignIn,
  SignUp,
  SingleProduct,
} from "./routes";
import RootLayout from "./layout/RootLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfileLayout from "./layout/ProfileLayout";
import SinglePost from "./routes/SinglePost";

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
          {
            path: "/profile/favorites",
            element: <Favorites />,
          },
          {
            path: "/profile/purchases",
            element: <Purchases />,
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
      {
        path: "/blog/:id",
        element: <SinglePost />,
      },
      {
        path: "/order/:id",
        element: <Order />,
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
