import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  // Using the use state here:
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const collectData = async () => {
    console.warn(name, email, password);
    //Integating api here:
    // fetch('first para: url', second para: header, body)
    //fetch returns proimse, so we use async above at function name, and await with fetch:
    let result = await fetch('http://localhost:5000/register', {
      // method hume konsa use krna h:
      // whenever we want to save data : we use POST method:(small capital all work)
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      //this is general header of content type:
      headers: {
        'Content-Type': 'application/json'
      }
    })
    //now this result is also inside readable string, to get it properly:
    //we require to use .json() with it. this also returns promise : so we use await in front of it as well
    result = await result.json();
    console.log(result);
    navigate('/');
  }

  return (
    <div className="register">
      <h1> Register</h1>
      <input className="inputBox" type="text"
        value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name' />

      <input className="inputBox" type='email'
        value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' />

      <input className="inputBox" type='password'
        value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' />

      <button onClick={collectData} className="appButton" type="button" >Sign Up</button>
    </div>
  )
}


export default SignUp;