import React, { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import GoogleButton from 'react-google-button'
import ApplicationsView from './ApplicationsView';
import '../login-signup.css'
import { useNavigate } from "react-router-dom";
import * as DataInterface from './DataInterface'


function LoginView(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  useEffect(() => {
    if (user) {
      return navigate("/");
    }
  }, [user]);

  // const [currentForm, setCurrentForm] = useState('login');
  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }

  // return (
  //   <div className="App">
  //   {
  //     currentForm === "login" ? <LoginView onFormSwitch={toggleForm} /> : <SignUpView onFormSwitch={toggleForm}/>
  //   }
  //   </div>
  // )

  return (
    <div className="h-screen justify-center flex flex-col bg-dark-navy">
      <div className="flex flex-col bg-dark-navy m-5">
      {/* <header className="title ">Burn Out</header> */}
      <div className="font-saira mb-24 text-white text-7xl text-center">Burn Out</div>

      {/* <header className="google-header"> */}
      {/* </header> */}
      <GoogleButton
      className='mx-auto my-4'
          onClick={() => {
            DataInterface.authenticateWithGoogle().then((user) => {
              console.log("logged in")
              console.log(user);
              setUser(user);
              // props.onLogin();
            });
          }}
        />

        <form className="flex flex-col bg-dark-navy" onSubmit={handleSubmit}>
          <label htmlfor="email">Email </label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" name="email"></input>
          <label htmlfor="password">Password </label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter password"name="password"></input>
          <br></br>
          <button className="login-button text-white text-15 font-bold border-none bg-1A508B py-20 px-20 rounded-10 cursor-pointer" type="submit">Log In</button>
      </form>
      <br></br>
      <hr></hr>
      <button className="link-btn text-white underline mt-3" onClick={() => navigate("/signup")}>Don't have an account? Register here.</button>
      </div>
    </div>
  )
}

export default LoginView