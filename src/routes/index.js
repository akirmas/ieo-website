import { lazy } from "react";

import { withProps } from "../hocs";

const Product = lazy(() => import("../pages/Product"));
const Home = lazy(() => import("../pages/Home"));
const KeyRoles = lazy(() => import("../pages/KeyRoles"));
const General = lazy(() => import("../pages/General"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const NotFound = lazy(() => import("../pages/NotFound"));

/**
 * TODO: configure independent routing
 */
const routes = [
  {
    path: "/",
    exact: true,
    render: withProps(Home)
  },
  {
    path: "/about/key-roles",
    render: withProps(KeyRoles)
  },
  {
    path: "/contact-us",
    render: withProps(ContactUs)
  },
  {
    path: "/product/:name",
    render: withProps(Product)
  },
  {
    path: "/:category?/:name",
    render: withProps(General)
  },
  {
    path: "*",
    render: withProps(NotFound)
  }
];

export default routes;
