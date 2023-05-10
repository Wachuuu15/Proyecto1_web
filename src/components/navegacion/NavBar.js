import React from "react";
import "./NavBar.css";
import { Link } from 'react-router-dom';
import logo from "/./imgs/logo_ts.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

function NavBar(){
    return(
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>


        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link-merch" aria-current="page" href="#">Merch</a>
                            </li>

                            <li className="nav-item-dropdown">
                                <a className="nav-link-events" href="#" id="navbarDropdownMenuLink"  data-bs-toggle="dropdown" aria-expanded="false">
                                    <div className="flex-container">
                                    <div className="text-container">Events</div>
                                    <div className="arrow-container">
                                        <a href="#"><i className="bi bi-caret-down-fill"></i></a>
                                    </div>
                                    </div>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" href="#">Action</Link></li>
                                    <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                    <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                                </ul>
                            </li>


                            <li className="nav-item">
                                <a className="nav-link-newsletter" href="#">Newsletter</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link-mdn" href="#">TS Midnights</a>
                            </li>
                        </ul>
                        <a className="navbar-brand">
                        <Link to='/'>
                            <img src={logo} width='200' />
                        </Link>
                        </a>
                        
                        <ul className="social-icons">
                            <li className="facebook-icon">
                                <a href="#"><i className="bi bi-facebook"></i></a>
                            </li>
                            <li className="instagram-icon">
                                <a href="#"><i className="bi bi-instagram"></i></a>
                            </li>
                            <li className="twitter-icon">
                                <a href="#"><i className="bi bi-twitter"></i></a>
                            </li>
                            <li className="tiktok-icon">
                                <a href="#"><i className="bi bi-tiktok"></i></a>
                            </li>
                            <li className="youtube-icon">
                                <a href="#"><i className="bi bi-youtube"></i></a>
                            </li>
                            <li className="snapchat-icon">
                                <a href="#"><i className="bi bi-snapchat"></i></a>
                            </li>
                        </ul>
                </div>  
        </div>
    </nav>

    );
}
export default NavBar;
