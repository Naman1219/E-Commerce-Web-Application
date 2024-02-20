import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { passwordStrength } from "check-password-strength";
const BASE_URL = process.env.REACT_APP_BASE_URL;
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  let strengthClass;
  switch (passwordStrength(password).value) {
    case "Too weak":
      strengthClass = "red";
      break;
    case "Weak":
      strengthClass = "red";
      break;
    case "Strong":
      strengthClass = "green";
      break;
    default:
      strengthClass = "green";
  }
  const collectData = async () => {
    console.warn(name, email, password);
    console.log(passwordStrength(password).value);
    if (
      passwordStrength(password).value === "weak" ||
      passwordStrength(password).value === "Too weak"
    ) {
      alert("Weak Password");
    } else {
      let result = await fetch(`${BASE_URL}/register`, {
        method: "post",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      console.log(result);
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    }
  };

  return (
    <div className="register">
      <h1> Register</h1>
      <input
        className="inputBox"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
        required:true
      />

      <input
        className="inputBox"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
        required:true
      />

      <input
        className="inputBox"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
        required:true
      />
      <p className={`password-strength ${strengthClass}`}>
        {passwordStrength(password).value}....
      </p>
      <button onClick={collectData} className="appButton" type="button">
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
