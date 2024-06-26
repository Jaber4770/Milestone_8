import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import Service from './Component/Service/Service.jsx';
import Contact from './Component/Contact/Contact.jsx';
import Login from './Component/Login/Login.jsx';
import About from './Component/About/About.jsx';
import User from './Component/User/User.jsx';
import UserDetails from './Component/UserDetails/UserDetails.jsx';
import Posts from './Component/Posts/Posts.jsx';
import PostDetails from './Component/PostDetails/PostDetails.jsx';
import NotFound from './Component/NotFound/NotFound.jsx';
import Form from './Component/Form/Form.jsx';
import StatefulForm from './Component/StatefulForm/StatefulForm/StatefulForm.jsx';
import FormRef from './Component/FormRef/FormRef.jsx';
import HookForm from './Component/HookForm/HookForm.jsx';
import ReUseableForm from './Component/ReuseableForm/ReUseableForm.jsx';

export const DataContext = createContext('Gold');

<DataContext.Provider value="Gold">
  <Home></Home>
</DataContext.Provider>

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/service',
        element: <Service></Service>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: "/user",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <User></User>
      },
      {
        path: `/user/:userId`,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: "/posts/:postID",
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`),
        element: <PostDetails></PostDetails>
      },
      {
        path: "/form",
        element: <Form></Form>
      },
      {
        path: '/statefulForm',
        element: <StatefulForm></StatefulForm>
      },
      {
        path: '/formref',
        element: <FormRef></FormRef>
      },
      {
        path: '/hookform',
        element: <HookForm></HookForm>
      },
      {
        path: '/reuseableformSignUP',
        element: <ReUseableForm formTitle={"Sign up"} btnText={'Submit'}></ReUseableForm>
      },
      {
        path: '/reuseableformLogin',
        element: <ReUseableForm formTitle={"Log in"} btnText={'Log in'}></ReUseableForm>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
