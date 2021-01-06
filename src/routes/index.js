import React, { lazy } from "react";
import { Redirect, Route } from "react-router-dom";

import { getLoggedInUser } from "../helpers/authUtils"; //isUserAuthenticated

// Dev pages
const FeatherIcons = lazy(() => import("../pages/other/FeatherIcons"));

// base pages
const Home = lazy(() => import("../pages/Home"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
// Auth pages
const Login = lazy(() => import("../pages/auth/Login"));
const Logout = lazy(() => import("../pages/auth/Logout"));
const Register = lazy(() => import("../pages/auth/Register"));
const Property = lazy(() => import("../pages/Property"));
const Transport = lazy(() => import("../pages/Transport"));
const PersonalItems = lazy(() => import("../pages/PersonalItems"));
const Services = lazy(() => import("../pages/Services"));
const Electronics = lazy(() => import("../pages/Electronics"));
const SportsAndHobbies = lazy(() => import("../pages/SportsAndHobbies"));
const Announcement = lazy(() => import("../pages/Announcement"));
const MyProfile = lazy(() => import("../pages/MyProfile"));
const ProductPage = lazy(() => import("../pages/ProductPage"));
const PostLoading = lazy(() => import("../pages/PostCreateSuccess"));
const EditPage = lazy(() => import("../pages/EditPage"));
const Resume = lazy(() => import("../pages/ResumeList"));
const ResumeDetails = lazy(() => import("../pages/ResumeDetails"));
const ResumeCreate = lazy(() => import("../pages/Resume"));
const Favorites = lazy(() => import('../pages/Favorites'))

// handle auth and authorization
const PrivateRoute = ({ component: Component, roles, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      // if (!isUserAuthenticated()) return <Redirect to={{ pathname: '/account/login', state: { from: props.location } }} />
      if (roles && roles.indexOf(getLoggedInUser().role) === -1)
        return <Redirect to={{ pathname: "/" }} />;
      return <Component {...props} />;
    }}
  />
);

// root routes
const rootRoute = {
  path: "/",
  exact: true,
  component: () => <Redirect to="/home" />,
  route: PrivateRoute,
};

const authRoutes = {
  path: "/account",
  name: "Auth",
  children: [
    {
      path: "/account/login",
      name: "Login",
      component: Login,
      route: PrivateRoute,
    },
    {
      path: "/account/logout",
      name: "Logout",
      component: Logout,
      route: PrivateRoute,
    },
    {
      path: "/account/register",
      name: "Register",
      component: Register,
      route: PrivateRoute,
    },
  ],
};
const featherIconsRoute = {
  exact: true,
  path: "/icons",
  component: FeatherIcons,
  route: Route,
};

const homeRoute = {
  name: "Home",
  path: "/home",
  exact: true,
  component: Home,
  route: PrivateRoute,
};
const aboutUsRoute = {
  name: "Home",
  path: "/about-us",
  exact: true,
  component: AboutUs,
  route: PrivateRoute,
};

const property = {
  name: "Home",
  path: "/property",
  exact: true,
  component: Property,
  route: PrivateRoute,
};

const transport = {
  name: "Home",
  path: "/transport",
  exact: true,
  component: Transport,
  route: PrivateRoute,
};

const personalItems = {
  name: "Home",
  path: "/personal-items",
  exact: true,
  component: PersonalItems,
  route: PrivateRoute,
};

const services = {
  name: "Home",
  path: "/services",
  exact: true,
  component: Services,
  route: PrivateRoute,
};

const electronics = {
  name: "Home",
  path: "/electronics",
  exact: true,
  component: Electronics,
  route: PrivateRoute,
};

const sportsAndHobbies = {
  name: "Home",
  path: "/sports-and-hobbies",
  exact: true,
  component: SportsAndHobbies,
  route: PrivateRoute,
};

const announcement = {
  name: "Home",
  path: "/announcement",
  exact: true,
  component: Announcement,
  route: PrivateRoute,
};

const myProfile = {
  name: "Home",
  path: "/my-profile",
  exact: true,
  component: MyProfile,
  route: PrivateRoute,
};

const productPage = {
  name: "Home",
  path: "/product-page/:id",
  exact: true,
  component: ProductPage,
  route: PrivateRoute,
};

const postLoading = {
  name: "Home",
  path: "/post-create-success",
  exact: true,
  component: PostLoading,
  route: PrivateRoute,
};

const editPage = {
  name: "EditPage",
  path: "/edit-page/:id/",
  exact: true,
  component: EditPage,
  route: PrivateRoute,
};

const resume = {
  name: "ResumePage",
  path: "/resume",
  exact: true,
  component: Resume,
  route: PrivateRoute,
};

const resumeDetails = {
  name: "ResumeDetails",
  path: "/resume-details/:id/",
  exact: true,
  component: ResumeDetails,
  route: PrivateRoute,
};

const resumeCreate = {
  name: "ResumeCreate",
  path: "/resume-create",
  exact: true,
  component: ResumeCreate,
  route: PrivateRoute,
};

const favorites = {
  name: "favorites",
  path: "/favorites",
  component: Favorites,
  route: PrivateRoute
}

const error404Route = {
  name: "Error 404",
  component: () => <h1>Error 404</h1>,
  route: Route,
};
// flatten the list of all nested routes
const flattenRoutes = (routes) => {
  let flatRoutes = [];
  routes = routes || [];
  routes.forEach((item) => {
    flatRoutes.push(item);
    if (typeof item.children !== "undefined") {
      flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
    }
  });
  return flatRoutes;
};

// All routes
const allRoutes = [
  rootRoute,
  authRoutes,
  featherIconsRoute,

  homeRoute,
  aboutUsRoute,
  property,
  transport,
  personalItems,
  services,
  electronics,
  sportsAndHobbies,
  announcement,
  myProfile,
  productPage,
  postLoading,
  editPage,
  resume,
  resumeDetails,
  resumeCreate,
  favorites
];

// Insert Error404 page
allRoutes.push(error404Route);

const authProtectedRoutes = [homeRoute, aboutUsRoute];

const allFlattenRoutes = flattenRoutes(allRoutes);
export { allRoutes, authProtectedRoutes, allFlattenRoutes };
