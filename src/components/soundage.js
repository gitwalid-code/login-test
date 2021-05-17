import React, { useState, useEffect } from "react";
import "./soundage.css";
import axios from "axios";

const Soundage = () => {
  const [firstname, Setfirstname] = useState();
  const [lastname, Setlastname] = useState();
  const [mail, Setmail] = useState();
  const [phone, Setphone] = useState();
  const [password, Setpassword] = useState();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/user", {
        email: mail,
        nom: firstname,
        prenom: lastname,
        phone: phone,
        password: password,
      });
    } catch (error) {
      console.log(submit);
    }
  };
  return (
    <div className="signup">
      <form className="Soundage">
        <h3>Sing Up</h3>
        <label>first Name : </label>
        <input
          type="text"
          onChange={(e) => {
            Setfirstname(e.target.value);
          }}
        />
        <label>last Name : </label>
        <input
          type="text"
          onChange={(e) => {
            Setlastname(e.target.value);
          }}
        />
        <label>E-mail : </label>
        <input
          type="text"
          onChange={(e) => {
            Setmail(e.target.value);
          }}
        />
        <label>Phone Number : </label>
        <input
          type="Number"
          type="text"
          onChange={(e) => {
            Setphone(e.target.value);
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

export default Soundage;
