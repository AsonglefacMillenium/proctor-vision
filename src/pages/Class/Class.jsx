import React from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { BsBell } from "react-icons/bs";

//styles import
import "./Class.css";
import { Link } from "react-router-dom";


//assets import
import HomeImage from '../../Assets/home.png'
import ClassCard from "../../Components/classCard/ClassCard";

const Class = () => {
  return (
    <div className="class flex flex-column a-j-space-between">
      <div className="class__head">
        <h1>My Classes</h1>
      </div>

      <div className="small__card flex a-j-space-between">
        <div className="small__card__left">
          <h2>Neural Networks and Fussy Control</h2>
          <p>CSE3013</p>
        </div>
        <div>
          <MdKeyboardArrowDown className="icon" />
        </div>
      </div>

      <div className="large__card flex flex-column">
        <div className="large__card__head flex a-j-space-between">
          <div className="card__left flex flex-column">
            <h2>IOT System Architecture</h2>
            <p>ECE1029</p>
          </div>
          <div>
            <MdKeyboardArrowUp className="icon" />
          </div>
        </div>

        <ClassCard 
            name="CAT1"
            day="22nd Dec 2020"
            time="9:00 am - 12:00 pm"
            icon={<BsBell/>}
            buttonName="Completed"
        />

<ClassCard 
            name="CAT2"
            day="12th Jan 2021"
            time="9:00 am - 12:00 pm"
            icon={<BsBell/>}
            buttonName="Join Exam"
        />

<ClassCard 
            name="Lab FAT"
            day="12th Mar 2021"
            time="9:00 am - 12:00 pm"
            icon={<BsBell/>}
            buttonName="Yet to Start"
        />
      </div>

      <div className="class__bottom flex a-j-space-between">
          <div className="class__bottom__left">
              <Link to=''>Take Demo Exam</Link>
          </div>
          
          <div className="class__bottom__right flex a-j-space-between">
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

export default Class;
