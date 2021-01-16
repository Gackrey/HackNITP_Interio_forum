import React,{useState} from "react";
import Googlelogin from 'react-google-login';
import Navbar from './Navbar'
function LogInPage() {
  const [image,setimage] = useState("");
  const responseGoogle = (response) => {
    console.log(response);
    setimage(response.imageURL);
    sessionStorage.setItem('Users',setimage);
    return alert('dfgfg')
  }
  return (
    <section id="log-in">
      <div class="signin">
        <h1>Sign In</h1>
        <Googlelogin
          clientId="603986127974-ogcke7qf6sjos99594fk3675hbpmv5da.apps.googleusercontent.com"
          buttonText="Sign up with Google"
          scope= "profile"
          onSuccess={responseGoogle}
          uxMode='redirect'
          redirectUri="http://localhost:3000/home"
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </section>
  );
}

export default LogInPage;
