import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


//style import
import './ClassCard.css'

const ClassCard = ({name, day, time, buttonName, icon}) => {
  return (
    <div className='classcard flex a-j-space-between'>
    <div className="catname">
        <h2>{name}</h2>
    </div>

    <div className="cat__details ">
        <div className="cat__time flex a-j-space-between">
            <p>{day}</p>
            <div className="round"></div>
            <p>{time}</p>
            <div className="icon">
                {icon}
            </div>

        </div>
    </div>

    <div className="button">
        <Link to='/check'>
            <button>{buttonName}</button>
        </Link>
    </div>

    </div>
  )
}


ClassCard.propTypes = {
    name: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    buttonName: PropTypes.isRequired,
    icon: PropTypes.element.isRequired,

}



export default ClassCard