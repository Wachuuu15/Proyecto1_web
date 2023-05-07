import React from "react";
import "./NavBar.css";
import { Link } from 'react-router-dom';
import logo from "/./imgs/logo_ts.png";


function NavBar(){
    return(
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link-merch" aria-current="page" href="#">Merch</a>
                            </li>

                            <li class="nav-item-dropdown">
                                <a class="nav-link-events" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Events
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link class="dropdown-item" href="#">Action</Link></li>
                                    <li><Link class="dropdown-item" href="#">Another action</Link></li>
                                    <li><Link class="dropdown-item" href="#">Something else here</Link></li>
                                </ul>
                                <button class="navbar-toggler navbar-toggler-icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                </button>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link-newsletter" href="#">Newsletter</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link-mdn" href="#">TS Midnights</a>
                            </li>
                            
                            
                        </ul>
                    </div>
                    <a class="navbar-brand">
                        <Link to='/'>
                            <img src={logo} width='200' clas='mx-auto'/>
                        </Link>
                    </a>

        </div>
    </nav>
    );
}
export default NavBar;