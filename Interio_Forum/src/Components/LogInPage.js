import React,{useState} from "react";
import Googlelogin from 'react-google-login';
import Navbar from './Navbar'
function LogInPage() {
  
  const responseGoogle = (response) => {
    console.log(response.profileObj.imageUrl);
    localStorage.setItem('User',JSON.stringify(response.profileObj.imageUrl))
  }
  return (
    <section id="log-in">
      <div class="signin">
        <h1>Sign In</h1>
        <Googlelogin
          clientId="603986127974-ogcke7qf6sjos99594fk3675hbpmv5da.apps.googleusercontent.com"
          buttonText="Sign up with Google"
          scope= "profile"
          redirectUri="http://localhost:3000/home"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          uxMode='redirect'
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </section>
  );
}

export default LogInPage;
