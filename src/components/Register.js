import React, { useRef } from "react";
import axios from "axios";

function Register({ switchForm }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleRegister(e) {
    e.preventDefault();
    const userObj = {
      userEmail: emailRef.current.value,
      password: passwordRef.current.value,
    };
    axios({
      url: "https://autheserver.vercel.app/register",
      method: "POST",
      data: userObj,
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => {
        console.log(resp.data.token);
        alert(resp.data.message);
        localStorage.setItem("userToken", resp.data.token);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="registerForm">
      <form>
        <div className="form__field">
          <label htmlFor="userName">User Name</label>
          <input type="text" id="userName" />
        </div>
        <div className="form__field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div className="form__field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={passwordRef} />
        </div>
        <div className="form__field">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" />
        </div>
        <button type="submit" onClick={handleRegister}>
          Register
        </button>
      </form>
      <p>
        If you are an existing user{" "}
        <span id="linkToForm" onClick={() => switchForm("login")}>
          click here
        </span>
      </p>
    </div>
  );
}

export default Register;
