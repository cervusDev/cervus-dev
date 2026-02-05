import Home from "../pages/Home";
import MainLayout from "../Layout";
import { lazy, Suspense } from "react";
import NotFound from "../pages/NotFound";
import { createBrowserRouter } from "react-router";

const Contact = lazy(() => import("../pages/Contact"));
const Portfolio = lazy(() => import("../pages/Portfolio"));
const Applications = lazy(() => import('../pages/Aplication'))

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "portifolio",
        element: (
          <Suspense>
            <Portfolio />
          </Suspense>
        ),
      },
      {
        path: 'aplicativos',
        element: (
          <Suspense>
            <Applications />
          </Suspense>
        )
      },
      {
        path: "contato",
        element: (
          <Suspense>
            <Contact />
          </Suspense>
        ),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
