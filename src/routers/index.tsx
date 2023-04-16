import { lazy } from "react";
import { createHashRouter, Navigate } from "react-router-dom";

const Home = lazy(() => import('@/views/home'))
export default createHashRouter([
  {
    path: "/",
    element: <Navigate replace to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  }
]);
