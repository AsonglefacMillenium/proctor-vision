import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {MdMaximize} from 'react-icons/md'
import {VscChromeMaximize} from 'react-icons/vsc'
import {VscClose} from 'react-icons/vsc'

//styles import
import './Header.css'

const Header = () => {
  return (
    <div className='header flex a-j-space-between'>
    <div className="logo">
        <h1>Proctor vision</h1>
    </div>
    <div className="search flex a-j-space-between">
    <BiSearch className='icon'/>
        <div className="searchbox">
           
            <input type="search" name="search" id="search"  placeholder='Search'/>
        </div>
    </div>

    <div className="icons_right flex a-j-space-between">
    <MdMaximize className='icon minimise'/>
    <VscChromeMaximize className='icon'/>
    <VscClose className='icon '/>

    </div>

    </div>
  )
}

export default Header