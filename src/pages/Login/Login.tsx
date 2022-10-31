import './Login.scss';

import React from "react";

import Pablo from "../../assets/imgs/pablo.png";

import Union from "../../assets/svgs/Union.svg";
import Lendsqr from "../../assets/svgs/Lendsqr.svg";

const Login = () => {
  return (
    <div className="login-box">
      <div className='login-right'>
        <div className='login-right-inner'>
        <div className='welcome'>
          <h1>Welcome !</h1>
          <p>Enter details to login.</p>
        </div>
        <div className='input-box'>
          <input type="text" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <p>FORGOT PASSWORD?</p>
        </div>
        <button onClick={
          () => {
            window.location.href = '/users'
          }
        }>LOG IN</button>
      </div>
      </div>
    </div>
  );
};

export default Login;
