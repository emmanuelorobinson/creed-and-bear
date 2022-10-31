import "./Login.scss";

import React, { useState, useRef } from "react";
import { User, verifyUser } from "../../utils/fakeAPI";

interface Response {
  status: string;
  user: User;
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    if (emailRef.current?.value !== email) {
      setEmail(String(emailRef.current?.value));
    }
    if (passwordRef.current?.value !== password) {
      setPassword(String(passwordRef.current?.value));
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const status: Response = await verifyUser(email);
      if (String(status.status) === "success") {
        setError(false);
        console.log("User verified");
      }
      setError(true);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className="login-box">
      <div className="login">
        <div className="login-inner">
          <div className="welcome">
            <h1>Welcome !</h1>
            <p>Enter details to login.</p>
          </div>
          <div className="input-box">
            <input
              type="text"
              ref={emailRef}
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              type="password"
              ref={passwordRef}
              placeholder="Password"
              onChange={handleChange}
            />
            <p>FORGOT PASSWORD?</p>
          </div>
          <button onClick={handleSubmit}>LOG IN</button>
          {error && (
            <p
              style={{
                color: "red",
              }}
            >
              Invalid email or password
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
