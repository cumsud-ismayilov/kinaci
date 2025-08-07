import { createBrowserRouter } from "react-router";
import Layout from "../layout";
import HomePage from "../pages/homePage";
import Contact from "../pages/contact";
import Comments from "../pages/comments";
import Blog from "../pages/blog";
import About from "../pages/about";
import Possessions from "../pages/possessions";
import Service from "../pages/service";
import ForSale from "../pages/forSale";
import ForRent from "../pages/forRent";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/comments",
        element: <Comments />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/possessions",
        element: <Possessions />,
      },
      {
        path: "/forSale",
        element: <ForSale />,
      },
      {
        path: "/forRent",
        element: <ForRent />,
      },
      {
        path: "/service",
        element: <Service />,
      },
    ],
  },
]);
