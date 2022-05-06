import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { GrCheckmark } from "react-icons/gr";
import { VscClose } from "react-icons/vsc";
import { RiLoader4Line } from "react-icons/ri";

//assets import
import HomeImage from "../../Assets/home.png";

//style import
import "./Check.css";
import { Link } from "react-router-dom";

const Check = () => {
  const date = {
    current: new Date().toLocaleString(),
  }
  
  return (
    <div className="check flex flex-column a-j-space-between">
      <div className="check__head full-width flex a-j-space-betweem">
        <div className="check__head__left flex">
          <IoIosArrowBack className="icon" />
          <h2>Graduate Record Examination</h2>
        </div>
        <div className="cheack__head__right">
          <h3>{date.current}</h3>
          <p>9am- 12pm</p>
        </div>
      </div>

      <div className="check__body flex ">
        <div className="check__body__image">
          <img src={HomeImage} alt="" />
        </div>

        <div className="check__body__checks a-j-space-between">
          <div className="checks flex  a-j-space-between">
            <GrCheckmark className="icons__green"/>
            <p>Webcam Check</p>
          </div>
         
          <div className="checks flex  a-j-space-between">
            <GrCheckmark className="icons__green"/>
            <p>Mic testing</p>
          </div>
          
          <div className="checks flex a-j-space-between">
            <VscClose className="icon__red" />
            <p>α Iris sync</p>
          </div>
          <div className="checks flex a-j-space-between">
            <VscClose className="icon__red" />
            <p>BT / Alien hardware detection</p>
          </div>
          <div className="checks flex  a-j-space-between">
            <GrCheckmark className="icons__green"/>
            <p>QR / Virtual Machine detection</p>
          </div>

          <div className="checks flex  a-j-space-between">
            <RiLoader4Line className="white__green"/>
            <p>QR / Virtual Machine detection</p>
          </div>
          <div className="checks flex  a-j-space-between">
            <RiLoader4Line className="white__green"/>
            <p>QR / Virtual Machine detection</p>
          </div>
          <div className="checks flex  a-j-space-between">
            <RiLoader4Line className="white__green"/>
            <p>QR / Virtual Machine detection</p>
          </div>

          <Link to='/exam'>
            <button>Start Exam</button>
          </Link>
        </div>
      </div>

      <div className="class__bottom flex a-j-space-between">
         
          
          <div className="class__bottom__right flex ">
              <div className="profile__left">
                  <h3>JOHN DOE</h3>
                  <p>18BIS1241</p>
              </div>
              <div className="profile__image">
              <Link to='/setting'>
              <img src={HomeImage} alt="" />
              </Link>
                  
              </div>
          </div>
          
          
      </div>
    </div>
  );
};

export default Check;
