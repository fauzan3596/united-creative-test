import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts";
import { LandingPage, NotFoundPage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />
      }
    ],
  },
]);

export default router;
