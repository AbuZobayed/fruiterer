import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "../layouts/MainLayout";
import MainLayout from "../Layouts/MainLayouts";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
// import ErrorPage from "../pages/ErrorPage";
import ErrorPage from "../pages/ErrorPages";
// import DashboardLayout from "../layouts/DashboardLayouts";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import Dashboard from "../pages/Dashboard";
import Registration from "../pages/Registration";
import PrivateRoute from "./private/PrivateRoute";
import ProductDetails from "../pages/ProductDetails";
import AllProducts from "../pages/AllProducts";
import AddProducts from "../pages/AddProducts";
import EditProducts from "../pages/EditProducts";
import EditProfile from "../pages/EditProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/fruits"),
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/fruits/${params.id}`),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "profile/edit/:id",
        element: (
          <PrivateRoute>
            <EditProfile/>
          </PrivateRoute>
        ),
        loader:({params}) =>
          fetch(`http://localhost:3000/user/get/${params.id}`),
      },
      {
        path: "all-products",
        element: (
          <PrivateRoute>
            <AllProducts/>  
          </PrivateRoute>
        ),
      },
      {
        path: "add-products",
        element: (
          <PrivateRoute>
            <AddProducts/>  
          </PrivateRoute>
        ),  
      },
      {
        path: "all-products/edit/:id",
        element: (
          <PrivateRoute>
            <EditProducts/> 
          </PrivateRoute>
        ), 
        loader:({params}) =>
          fetch(`http://localhost:3000/fruits/${params.id}`),
      },
    ],
  },
]);