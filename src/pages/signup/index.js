import React from "react";
import SignupComponent from "./signup.component";

const signupPage = () => {
  const onSubmit = (credentials) => {
    console.log(credentials);
  };

  const onGoogleSubmit = () => {
    console.log("google button clicked");
  };

  return (
    <SignupComponent onSubmit={onSubmit} onGoogleSubmit={onGoogleSubmit} />
  );
};

export default signupPage;
