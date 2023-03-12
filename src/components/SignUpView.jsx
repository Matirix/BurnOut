import React, { useState } from 'react'
import '../login-signup.css'
import { useNavigate } from "react-router-dom";


function SignUpView(props){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
      }

    return(
      <div className="h-screen flex justify-center flex-col bg-dark-navy p-4">
        {/* <header className="title">Burn Out</header> */}
        <div className="font-saira mb-24 text-white text-7xl text-center">Burn Out</div>

        <form className="flex flex-col p-3 bg-dark-navy" onSubmit={handleSubmit}>
            <label>Username</label>
            <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder='Enter username'></input>
            <label htmlfor="email">Email </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" name="email"></input>
            <label htmlfor="password">Password </label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter password"name="password"></input>
            <br></br>
            <button className="text-white" type="submit">Sign Up</button>
        </form>
        <br></br>
        <button className="link-btn " onClick={() => navigate("/login")}>Already have an account? Login here.</button>
      </div>
    )
}

export default SignUpView