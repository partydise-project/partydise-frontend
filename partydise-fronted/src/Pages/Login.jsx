import React from "react";
import LogoutButton from "../Components/AuthoComponest/Logaot";
import Profile from "../Components/AuthoComponest/User";
import LoginAutho from "../Components/AuthoComponest/LoginAutho";

const Login = () => {
 return (
   <>
     <h1>inicio de secion</h1>
    <LoginAutho/>
    <LogoutButton/>
    <Profile/>
   </>
  );
};

export default Login;