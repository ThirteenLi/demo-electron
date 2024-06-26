import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Suspense>
    <RouterProvider router={router} />
  </Suspense>
);
