import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./component/routers/About";
import Home from "./component/routers/Home";

const router = createBrowserRouter([
  { path: "/About", element: <About /> },
  { path: "/Store", element: <App /> },
  { path: "/Home", element: <Home /> },
]);
const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
