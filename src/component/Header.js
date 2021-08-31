import React from 'react'
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import { Link } from "react-router-dom";
import { StateHandler } from "./login/context/Authcontext";

function Header({ click }) {

    const { user } = StateHandler()

    return (
        <div className="header">
            <div className="header-left">
                <div className="header-menu" onClick={click} >
                    <MenuIcon />
                </div>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <h2 className="header-left-logo">IN<span className="logo-tube">focus</span></h2>
                </Link>
            </div>
            <div className="header-middle">
                <input placeholder="Search" className="header-middle-input" />
            </div>
            <div className="header-navbar">
                <div className="navber">
                    <Link to="/" style={{textDecoration:"none" ,color:"black"}}>
                        <HomeOutlinedIcon className="nav-icons" />
                    </Link>
                    <Link to="/People" style={{textDecoration:"none" ,color:"black"}}>
                        <PeopleAltOutlinedIcon className="nav-icons" />
                    </Link>
                </div>
                <Link to={`/profile/${user?.userName}`} className="header-userprofile">
                   <p className="header-userName">{user?.userName}</p>
                   <img
                     className="header-userimg"
                     src={user?.profilePicture || "https://media.istockphoto.com/vectors/profile-picture-vector-illustration-vector-id587805156"}
                     alt=""
                   />
                </Link>

            </div>

        </div>

    )
}

export default Header