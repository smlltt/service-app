import React from "react";
import LoginComponent from "./login.component";

const loginPage = () => {
  const onSubmit = (credentials) => {
    console.log(credentials);
  };

  const onGoogleSubmit = () => {
    console.log("google button clicked");
  };

  return <LoginComponent onSubmit={onSubmit} onGoogleSubmit={onGoogleSubmit} />;
};

export default loginPage;
