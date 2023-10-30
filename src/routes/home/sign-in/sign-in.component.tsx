import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../../firebase/firebase.utils";

const SignIn = () => {
  useEffect(() => {
    async function getResult() {
      const response = await redirectResult();
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }
    getResult();
  }, []);

  const redirectResult = async () => {
    const response = await getRedirectResult(auth);
    return response;
  };
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirection
      </button>
    </div>
  );
  //Server side rendering
};

export default SignIn;
