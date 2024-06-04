// import ReactDOM from 'react-dom/client';
//  import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import App from './App.jsx';
// import Home from './pages/Home.js';
// import Signup from './pages/Signup.js';
// import Login from './pages/Login.js';
// import SingleThought from './pages/SingleThought.js';
// import Profile from './pages/Profile.js';
// import ErrorPage from './pages/ErrorPage.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         element: <Home />
//       }, {
//         path: '/login',
//         element: <Login />
//       }, {
//         path: '/signup',
//         element: <Signup />
//       }, {
//         path: '/profiles/:username',
//         element: <Profile />
//       }, {
//         path: '/me',
//         element: <Profile />
//       }, {
//         path: '/thoughts/:thoughtId',
//         element: <SingleThought />
//       }
//     ]
//   },
// ]);
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)