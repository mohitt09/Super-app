import { useState } from "react";
import Body from "./Body";
import { Provider } from "react-redux";
import store from "./store/store";
import SignUp from "./SigninSignup/SignUp";
import Home from "./home/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Genre from "./genre/Genre";
import Movies from "./movies/Movies";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/register",
          element: <SignUp />,
        },
        {
          path: "/genre",
          element: <Genre />,
        },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/movies",
          element: <Movies/>
        }
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
