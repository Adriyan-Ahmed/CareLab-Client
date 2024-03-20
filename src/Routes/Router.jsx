import{  createBrowserRouter } from"react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Dashboard from "../Layouts/Dashboard";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
    ]
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
  }
]);

export default Router;
