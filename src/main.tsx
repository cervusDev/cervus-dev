import "./global.css";
import { StrictMode } from "react";
import { router } from "./router/index.tsx";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { TanstackQueryClientProvider } from "./services/reactQuery/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TanstackQueryClientProvider>
      <RouterProvider router={router} />
    </TanstackQueryClientProvider>
  </StrictMode>,
);
