import React from 'react'
import { PiArrowBendUpRightFill } from "react-icons/pi"
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import './Footer.css'
import '../../index.css'
import plus_sign from '../../assets/Group 12.svg'
const Footer = () => {
return (
    <div className='footer'>
    <div className="footer-container container">
    <div className="left-side">
        <div className="up-side">
        <ul>
            <li>Contact</li>
            <li>Careers <PiArrowBendUpRightFill className='icon' /></li>
            <li>Subscribe <PiArrowBendUpRightFill className='icon' /></li>
        </ul>
        </div>
        <div className="down-side">
        <ul>
        <li>Corporate</li>
                <li>Privacy</li>
                <li>Cookie <br /> Settings</li>
                <li>Legal</li>
                <li>Contact Us</li>
        </ul>
        </div>
    </div>
<div className="right-side">
        <div className="up-side">
        <CiGlobe className='icon' />
         <span> Select language</span>
        <MdKeyboardArrowDown className='icon' />
        </div>
        <div className="down-side"> 
        <FaInstagram  className='icon'/>
        <FaXTwitter className='icon' />
        <FaFacebook className='icon' />
        </div>
</div>
<img src={plus_sign} alt="" />
    </div>
    </div>
)
}

export default Footer
