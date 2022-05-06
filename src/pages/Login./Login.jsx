import React from "react";
import { Link } from "react-router-dom";

//styles import
import "./Login.css";

//assets imort
import Logo from "../../Assets/logo.png";

const Login = () => {
  return (
    <div className="login  ">
      <div className="login__box flex flex-column a-j-center">
        <div className="login__head">
          <img src={Logo} alt="" />
        </div>
        <div className="login__body">
          <form action="" className="flex flex-column">
            <input type="text" name="" placeholder="username" id="" />
            <div className="line"></div>
            <input type="password" name="" placeholder="password" id="" />
            <div className="line"></div>

            <Link to="" className="reset__pass">Reset Password to default/ Forgot Password?</Link>
            

            <Link to="/onboard">
              <button type="submit">Login</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
