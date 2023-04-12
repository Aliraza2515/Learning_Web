import ReactDOM from "react-dom";
import Aboutpage from './components/aboutpage/Aboutpage'
import Coursespage from './components/coursespage/Coursespage'
import Contact from './components/contact/Contact'
import Loginpages from "./components/login/Loginpages";
import Registerpage from "./components/registerpage/Registerpage";
import Coursesvideo from "./components/coursesvideos/coursesVideo";
// import ReactDOM from "react-dom/client";
import App from './App';
import './index.css'
import {
   createBrowserRouter,
   RouterProvider,
 } from "react-router-dom";

 const router = createBrowserRouter([
   {
      path: "/",
      element: <App/>,
   },

   {
      path: "/aboutpage",
      element: <Aboutpage/>,
   },

   {
      path: "/coursespage",
      element: <Coursespage/>,
   },

   {
      path: "/coursesvideos",
      element: <Coursesvideo/>,
   },

   {
      path: "/contact",
      element: <Contact/>,
   },

   {
      path: "/login",
      element: <Loginpages/>,
   },

   {
      path: "/registerpage",
      element: <Registerpage/>,
   },
 ]);



ReactDOM.render(
   
   
   <RouterProvider router={router}/>,



document.querySelector('#root')
);