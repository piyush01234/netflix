import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggelGpt } from "../redux/gptSlice";

function Header() {
  const navigate = useNavigate();
  const userData = useSelector((state) => state?.user);
  const isGpt = useSelector((state) => state?.gpt?.isGpt);
  const email = userData?.email;
  const photoURL = userData?.photoURL;
  // console.log(userData)
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;

        // debugger
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");

        // ...
      } else {
        navigate("/");
        // User is signed out
        // ...
      }
    });
  }, []);
  return (
    <div className="h-fit  absolute  max-sm:static max-sm:bg-black z-10 flex  max-sm:flex-col items-center   justify-between align-baseline w-screen bg-gradient-to-b from-black  bg-opacity-60 ">
      <img
        className="w-56 p-1 m-2 h-20 max-[300] :w-24  "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt=""
      />
      {email && (
        <div className=" flex  ">
          {/* <img src={photoURL} alt="user" /> */}
          <button
            className="text-white uppercase bg-red-700 h-fit px-5 py-2 rounded-sm m-3"
            onClick={() => {
              dispatch(toggelGpt());
            }}
          >
            {!isGpt ? "Gpt" : "Home"}
          </button>
          <button
            onClick={handleSignOut}
            className="text-white uppercase bg-red-700 h-fit px-5 py-2 rounded-sm m-3"
          >
            sign out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
