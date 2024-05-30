import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      // {
      //   path: "/",
      //   element: <Login />,
      // },
      // {
      //   path: "/service",
      //   children: [
      //     {
      //       path: "/service",
      //       element: <ServiceNode />,
      //     },
      //     {
      //       path: "/service/active",
      //       element: <ServiceNodeActive />,
      //     },
      //     {
      //       path: "/service/detail/:id",
      //       element: <ServiceNodeDetail />,
      //     },
      //   ],
      // },
      // {
      //   path: "/fund",
      //   element: <Fund />,
      // },
      // {
      //   path: "/plan",
      //   element: null,
      // },
    ],
  },
]);

export { router as default };
