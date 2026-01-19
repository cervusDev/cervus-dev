import Home from "../pages/Home";
import MainLayout from "../Layout";
import { lazy, Suspense } from "react";
import NotFound from "../pages/NotFound";
import { createBrowserRouter } from "react-router";

const Posts = lazy(() => import("../pages/Posts"));
const Contact = lazy(() => import("../pages/Contact"));
const WhereIAm = lazy(() => import("../pages/WhereIAm"));
const Projects = lazy(() => import("../pages/Projects"));
const PostDetail = lazy(() => import("../pages/PostDetail"));
// const ProjectDetail = lazy(() => import("../pages/ProjectDetails"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "projetos",
        element: (
          <Suspense
            fallback={<div className="p-6 text-white">Carregando...</div>}
          >
            <Projects />
          </Suspense>
        ),
      },
      // { path: "projetos/:id", element: <ProjectDetail /> },
      {
        path: "textos",
        element: (
          <Suspense
            fallback={<div className="p-6 text-white">Carregando...</div>}
          >
            <Posts />
          </Suspense>
        ),
      },
      { path: "textos/:id", element: <PostDetail /> },
      {
        path: "onde-estou",
        element: (
          <Suspense
            fallback={<div className="p-6 text-white">Carregando...</div>}
          >
            <WhereIAm />
          </Suspense>
        ),
      },
      {
        path: "contato",
        element: (
          <Suspense
            fallback={<div className="p-6 text-white">Carregando...</div>}
          >
            <Contact />
          </Suspense>
        ),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
