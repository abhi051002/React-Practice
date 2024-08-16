import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantsMenu from "./components/RestaurantsMenu";
import AboutClass from "./components/AboutClass";
import UserContext from "./Constant/UserContext";
import LoginSignup from "./components/LoginSignup";
import { Provider } from "react-redux";
import appStore from "./Constant/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [showName, setShowName] = useState("Abhijit");
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedUser: showName, setShowName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/login",
        element: <LoginSignup />,
      },
      {
        path: "about",
        element: (
          <Suspense fallback="<h1>loading....</h1>">
            <About />
          </Suspense>
        ),
      },
      {
        path: "grocery",
        element: (
          <Suspense fallback="<h1>loading....</h1>">
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "restaurants/:restId",
        element: <RestaurantsMenu />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
