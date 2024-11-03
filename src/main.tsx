import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Blog,
  Catalog,
  Certificates,
  Club,
  Contacts,
  Delivery,
  Home,
} from "./routes";
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/catalog",
        element: <Catalog />,
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
  </StrictMode>
);
