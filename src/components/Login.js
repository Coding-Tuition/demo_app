import React, { useRef } from "react";
import axios from "axios";

function Login({ switchForm }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleLogin(e) {
    e.preventDefault();
    const userObj = {
      userEmail: emailRef.current.value,
      password: passwordRef.current.value,
    };

    axios({
      url: "https://autheserver.vercel.app/login",
      method: "POST",
      data: userObj,
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("userToken"),
      },
    }).then((resp) => console.log(resp.data));
  }

  return (
    <div className="loginForm">
      <form>
        <div className="form__field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div className="form__field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={passwordRef} />
        </div>

        <button onClick={handleLogin}>Login</button>
      </form>
      <p>
        If you are an new user{" "}
        <span id="linkToForm" onClick={() => switchForm("register")}>
          click here
        </span>
      </p>
    </div>
  );
}

export default Login;
