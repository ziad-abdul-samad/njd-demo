import { NavLink , Link } from "react-router-dom";
import logo_image from "../../assets/logo.svg"
import './Navbar.css'
import '../../index.css'
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <img src={logo_image} alt="" />
            <div className="links ">
                <ul>
                <li> <NavLink  to="/">Home</NavLink></li>
                <li><NavLink to="/Games">Games</NavLink></li>
                <li><NavLink to="/About">About Us</NavLink></li>
                <li><NavLink to="/Career">Career</NavLink></li>
                <li><NavLink to="/Support">suppuort</NavLink></li>
                <li><NavLink className="special" to="/create">contact us</NavLink></li>
                </ul>
            </div>
            <RiMenu3Line  className="pc-hide"/> 
        </nav>
    );
}
// {/* <IoCloseOutline />
// import { IoCloseOutline } from "react-icons/io5"; */}

export default Navbar;

