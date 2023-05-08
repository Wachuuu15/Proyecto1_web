import React from "react";
import "./NavBar.css";
import { Link } from 'react-router-dom';
import logo from "/./imgs/logo_ts.png";


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
                                <a className="nav-link-events" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Events
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
                            <img src={logo} width='200' className='mx-auto'/>
                        </Link>
                    </a>
                </div>
                
        </div>
    </nav>
    );
}
export default NavBar;
