import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import "./Styles/debug.css";
import "./Styles/class.css";
import "./Styles/noclass.css";
import "./Styles/colors.css";

import Main from "./Pages/Main";
import Error from "./Pages/Error";
import Showcase from "./Pages/Showcase";
import Work from "./Pages/Work";

function scrollCSSVarListener(){
  const html = document.documentElement
  const scrollPercent = html.scrollTop / html.clientHeight
  html.style.setProperty('--pscroll',scrollPercent)
}
window.addEventListener('scroll',scrollCSSVarListener)
window.addEventListener('resize',scrollCSSVarListener)
scrollCSSVarListener()

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <Error />,
  },{
    path: "/test",
    element: <Showcase/>,
  },{
    path: "/work",
    element: <Work/>,
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
