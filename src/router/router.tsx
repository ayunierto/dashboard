import {
  BsBag,
  BsBoxes,
  BsFillGrid1X2Fill,
  BsFillPersonFill,
} from "react-icons/bs";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../pages/error/ErrorPage";
import { LoginPage } from "../pages/login/LoginPage";
import { Dashboard } from "../pages/Dashboard";
import { Users } from "../pages/users/Users";
import { Products } from "../pages/products/Products";
import { Components } from "../pages/components/Components";
import { DashboardLayout } from "../components/dashboard/layout/DashboardLayout";
import { AuthLayout } from "../AuthLayout";

interface Route {
  /** React icons package: https://react-icons.github.io/react-icons/icons/bs/ */
  icon: JSX.Element;
  label: string;
  to: string;
  component: JSX.Element;
}

export const dashboardRoutes: Route[] = [
  {
    icon: <BsFillGrid1X2Fill />,
    label: "Dashboard",
    to: "/dashboard",
    component: <Dashboard />,
  },
  {
    icon: <BsFillPersonFill />,
    label: "Users",
    to: "/users",
    component: <Users />,
  },
  {
    icon: <BsBag />,
    label: "Products",
    to: "/products",
    component: <Products />,
  },
  {
    icon: <BsBoxes />,
    label: "Components",
    to: "/components",
    component: <Components />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      ...dashboardRoutes.map((route) => ({
        path: route.to,
        element: route.component,
      })),
      {
        path: "",
        element: <Navigate to={dashboardRoutes[0].to} />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "",
        element: <Navigate to={"/auth/login"} />,
      },
    ],
  },
]);
