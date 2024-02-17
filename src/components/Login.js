import React, { useRef, useState } from "react";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../redux/userSlice";
function Login() {
  const [form, setForm] = useState({ email: "", password: "", username: "" });
  const [isSignInForm, setIsSignInForm] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [errorMessages, setErrorMessages] = useState({
    errorMessage: "",
    email: "",
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignSubmit = (e) => {
    e.preventDefault();
    const errors = checkValidation();
    const { emailError, usernameError, passwordError } = errors;
    setErrorMessages({
      ...errorMessages,
      email: emailError,
      username: usernameError,
      password: passwordError,
    });

    if (Object.keys(errors).length) return;

    console.log("yes");
    if (isSignInForm) {
      signInWithEmailAndPassword(auth, form.email, form.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
          setErrorMessages();
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorMessage == "Firebase: Error (auth/invalid-credential).")
            setErrorMessages({
              errorMessage: "Invalid user,Please sign in as a valid user.",
            });
          else setErrorMessages({ errorMessage: errorMessage });
        });
    } else {
      createUserWithEmailAndPassword(auth, form.email, form.password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
          updateProfile(auth.currentUser, {
            displayName: form.username,
            photoURL:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP4N7hlmJ4g_2AbEPa-ufj_aMdRybYXac1jQ&usqp=CAU",
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("error is", error.message);
          if (errorMessage == "Firebase: Error (auth/email-already-in-use).")
            setErrorMessages({
              errorMessage:
                "User already exist,Please sign up with another account.",
            });
          else setErrorMessages({ errorMessage: errorMessage });
        });
    }
  };
  const checkValidation = () => {
    const errorMessage = {
      // emailError: "",
      // usernameError: "",
      // passwordError: "",
    };

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const userNameRegex = /[A-Za-z][A-Za-z0-9_]{2,29}/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/;

    if (!emailRegex.test(form.email))
      errorMessage.emailError = "Enter valid e-mail";

    if (!isSignInForm)
      if (!userNameRegex.test(form.username))
        errorMessage.usernameError = "Enter valid username";

    if (!passwordRegex.test(form.password))
      errorMessage.passwordError =
        "Minimum six and maximum 12 characters, at least one uppercase letter, one lowercase letter, one number and one special character:";

    return errorMessage;
  };
  return (
    <div
      className="overflow-auto min-h-screen object-cover
    bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_medium.jpg')]
    "
    >
      <Header />
      <div className=" flex justify-center">
        {/* <div className=" absolute h-full">
          <img
            className="  min-h-screen  object-cover"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
            alt=""
          />
        </div> */}

        <form
          onSubmit={handleSignSubmit}
          className="  rounded-md max-[320px]:w-screen max-[700px]:w-[300px]   max-[1280px]: w-[400px]    h-min  max-h-fit   my-28 bg-black bg-opacity-[85%]  gap-2   flex flex-col mb-20   "
        >
          <p className=" mt-10 font-bold text-white text-4xl mx-auto">
            {" "}
            {isSignInForm ? "Sign In" : "Sign Up"}{" "}
          </p>
          {errorMessages?.errorMessage && (
            <p className="text-red-700 px-10 text-lg font-semibold">
              {errorMessages?.errorMessage}
            </p>
          )}

          {form.email && (
            <p className=" text-white px-10 font-bold mb-[-5px] mt-5 ">Email</p>
          )}
          <div className=" flex-col flex">
            <input
              className={`  w-[80%] px-6 py-3 bg-[#333] mx-auto text-white rounded-sm + ${
                !form.email && "mt-5"
              }`}
              type="text"
              value={form.email}
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
              }}
              placeholder="Email"
            />
            {errorMessages?.email && (
              <p className="text-red-700 px-10 ">{errorMessages?.email}</p>
            )}
          </div>

          {!isSignInForm && (
            <>
              {form.username && (
                <p className=" text-white px-10 font-bold mb-[-5px]  ">
                  Username
                </p>
              )}
              <div className=" flex-col flex">
                <input
                  className={`  w-[80%] px-6 py-3 bg-[#333] mx-auto text-white rounded-sm + `}
                  type="text"
                  value={form.username}
                  onChange={(e) => {
                    setForm({ ...form, username: e.target.value });
                  }}
                  placeholder="Username"
                />
                {errorMessages?.username && (
                  <p className="text-red-700 px-10">
                    {errorMessages?.username}
                  </p>
                )}
              </div>
            </>
          )}

          {form.password && (
            <p className=" text-white px-10 font-bold mb-[-5px] "> Password</p>
          )}
          <div className=" flex-col flex">
            <div
              className={` w-[80%] flex items-center bg-[#333] mx-auto text-white rounded-sm  ${
                isFocused && "border"
              }`}
            >
              {" "}
              <input
                className=" w-[80%] bg-transparent px-6 py-3 border-none focus:outline-none"
                type={!isShow ? "password" : "text"}
                onFocus={() => {
                  setIsFocused(true);
                }}
                onBlur={() => {
                  setIsFocused(false);
                }}
                value={form.password}
                onChange={(e) => {
                  setForm({ ...form, password: e.target.value });
                }}
                placeholder="Password"
              />
              <button
                className="text-white px-2  h-full border-l "
                onClick={() => setIsShow(!isShow)}
              >
                {" "}
                {isShow ? "Hide" : "Show"}
              </button>
            </div>

            {errorMessages?.password && (
              <p className="text-red-700 px-10">{errorMessages?.password}</p>
            )}
          </div>
          <div className="flex justify-center">
            {isSignInForm ? (
              <button
                className=" w-[80%] bg-red-600 rounded-sm  text-white mt-6 py-3 px-6 m-3"
                type="submit"
              >
                Sign In
              </button>
            ) : (
              <button
                className=" w-[80%] bg-red-600 rounded-sm  text-white  m-3 py-3 px-6"
                type="submit"
              >
                Sign Up
              </button>
            )}
          </div>
          <p className="my-5 text-white pl-8">
            {isSignInForm ? (
              <>
                {" "}
                New to Netflix?{" "}
                <a
                  className="hover:cursor-pointer underline"
                  onClick={() => {
                    setIsSignInForm(!isSignInForm);
                  }}
                >
                  {" "}
                  <span className="font-bold">Sign Up. </span>{" "}
                </a>{" "}
              </>
            ) : (
              <>
                {" "}
                Already Registerd?{" "}
                <a
                  className="cursor-pointer underline"
                  onClick={() => {
                    setIsSignInForm(!isSignInForm);
                  }}
                >
                  {" "}
                  <span className="font-bold">Sign In. </span>{" "}
                </a>
              </>
            )}
          </p>
        </form>
        <Footer />
      </div>
    </div>
  );
}

export default Login;
