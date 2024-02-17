import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { auth } from "../firebase";

function Container() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
 
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Container;
