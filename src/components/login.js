import React, { useState, useEffect } from "react";
import axios from "axios";
import "./login.css";

const Login = () => {
  const [mail, Setmail] = useState();

  const [password, Setpassword] = useState();

  const submit = async (e) => {
    e.preventDefault();
    try {
      console.log(mail, password);
      const response = await axios.post(
        "https://walidapp12.herokuapp.com/user/login",
        {
          email: mail,
          password: password,
        }
      );
      localStorage.setItem("token", response.data.accessToken);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login">
      <form className="newlog">
        <h3>Login</h3>

        <label>E-mail : </label>
        <input
          type="text"
          onChange={(e) => {
            Setmail(e.target.value);
          }}
        />

        <label>Password : </label>
        <input
          type="password"
          onChange={(e) => {
            Setpassword(e.target.value);
          }}
        />
        <br></br>

        <button type="submit" onClick={(e) => submit(e)}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
