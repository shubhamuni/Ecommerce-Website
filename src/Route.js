import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./component/routers/About";
import Home from "./component/routers/Home";
import Store from "./component/routers/Store";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/About", element: <About /> },
  { path: "/Home", element: <Home /> },
  { path: "/Store", element: <Store /> },
]);
const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
