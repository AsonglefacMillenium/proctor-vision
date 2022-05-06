import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

//style imports
import "./Home.css";

//assets import

import Logo from "../../Assets/logo.png";


const Home = () => {
  return (
    <div className="home full-width">
      <div className="home__box flex flex-column ">
        <div className="content__head flex a-j-space-between">
          <img src={Logo} alt="" />
          <h2>Proctor Vision</h2>
        </div>
        <div className="content__body">
          <p>
          Welcome aboard
to the future in the making
you’ve just become a part of it
          </p>
        </div>

        <div className="content__tail flex a-j-center">
        <Link to='/login'>
        <button className="flex">
            Continue
            <MdKeyboardArrowRight />
          </button>
        </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
