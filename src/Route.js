import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./component/routers/About";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/About", element: <About /> },
]);
const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
