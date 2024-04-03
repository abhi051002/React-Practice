import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantsMenu from "./components/RestaurantsMenu";
import AboutClass from "./components/AboutClass";

const Grocery = lazy(()=>import("./components/Grocery"));
const About = lazy(()=>import("./components/About"));

const AppLayout = () => {

  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path:"/",
        element:<Body />
      },
      {
        path: "about",
        element: <Suspense fallback="<h1>loading....</h1>"><About /></Suspense>,
      },
      {
        path: "grocery",
        element: <Suspense fallback="<h1>loading....</h1>"><Grocery /></Suspense>,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "restaurants/:restId",
        element: <RestaurantsMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
