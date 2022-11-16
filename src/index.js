import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import {About}      from './about';
import {Home}       from './home';
import {Projects}   from './projects';
import {Contact}    from './contact';
import {Navigation} from './components/navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navigation/>
    <RouterProvider router={router} />
  </React.StrictMode>
);