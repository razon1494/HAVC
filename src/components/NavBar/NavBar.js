import React from 'react';
import './NavBar.css'
import logo from './img/logo.png';
const NavBar = () => {
    return (
        <div className="bg-light">
            <nav className="navbar navbar-expand-lg navbar-light bg-light  py-4 container navigation">
                <div className="container-fluid">
                    <a class="navbar-brand" href="#">
      <img src={logo} alt="hi" width="80" height="60"/>
    </a>
                    <a className="navbar-brand fw-bold fs-5 " href="#">Future Engineering</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-5">
                            <li className="nav-item mx-auto me-2 ms-4 fw-bold fs-5 ">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item mx-auto me-2 ms-4 fw-bold fs-5 ">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item mx-auto me-2 ms-4 fw-bold fs-5 ">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item dropdown mx-auto me-2 ms-4 fw-bold fs-5 ">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                                    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </a>
                                <ul className=" dropdown-menu font" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">AC</a></li>
                                    <li><a className="dropdown-item" href="#">Spere Parts</a></li>
                                    <li><a className="dropdown-item" href="#">HVAC</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form class="container-fluid justify-content-end me-5 d-md-flex">
                    <button class="btnn me-3 py-2 px-3" type="button">+8801971-321446</button>
                    <button class="btnn my-md-0 my-3 me-3 p-2 px-3" type="button">Contact US</button>
                </form>
                    </div>

                </div>

            </nav>
        </div>
    );
};


export default NavBar;