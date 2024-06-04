import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
// import Signup from './pages/Signup.js';
// import Login from './pages/Login.js';
// import Profile from './pages/Profile.js';
import ErrorPage from "./pages/ErrorPage.jsx";
import ResultPage from "./pages/Result.jsx";
import QuizPage from "./pages/Quiz.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "/login",
      //   element: <Login />,
      // },
      // {
      //   path: "/signup",
      //   element: <Signup />,
      // },
      {
        path: "/quiz",
        element: <QuizPage />,
      },
      // {
      //   path: "/me",
      //   element: <Profile />,
      // },
      {
        path: "/result",
        element: <ResultPage />,
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
