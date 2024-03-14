import { useState, useRef } from "react";
import Header from "./Header";
import { FormValidate, NameValidate } from "../utils/validation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isLogin, SetIsLogin] = useState(true);
  const [errorMsg, SetErrorMsg] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);



  const submitForm = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
   

    

    if (!isLogin) {
      const fullname = (name.current.value) ? (name.current.value) : '';  

      const checkNameValidation = NameValidate(fullname);
      if (checkNameValidation) {
        SetErrorMsg(checkNameValidation);
        return;
      }
    }
    const checkValidation = FormValidate(
        emailValue,
        passwordValue
    );

    if (checkValidation) {
      SetErrorMsg(checkValidation);
      return;
    }
    // make empty error message in success case
    SetErrorMsg(null);

    var APIEndPoint = (isLogin) ? signInWithEmailAndPassword : createUserWithEmailAndPassword;
    
        APIEndPoint(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          if(!isLogin){
            updateProfile(user, {
                displayName: "", photoURL: ""
              }).then(() => {
                console.log("Profile updated!");
                // Profile updated!
                // ...
              }).catch((error) => {
                SetErrorMsg(error);
                return;
              });

          }
        
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMsg(errorCode + " = " + errorMessage);
          return;
        });
   

  
  };

  const toggleSignInForm = () => {
    SetIsLogin(!isLogin);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isLogin ? "Sign In" : "Sign Up"}
        </h1>
        {!isLogin && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        {errorMsg && (
          <p className="text-red-500 font-bold text-lg py-2">{errorMsg}</p>
        )}
        <button
          onClick={submitForm}
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
        >
          {isLogin ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isLogin
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};
export default Login;
