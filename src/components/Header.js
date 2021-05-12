import React from 'react';
import { Link, useLocation } from "react-router-dom";


function Header() {
    const location = useLocation;

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark mb-3">
                <div className="container-lg">


                    <span className="navbar-brand h2" id="brand">Liz Townsend</span>


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-dark"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto d-flex">
                            <ul className="navbar-nav align-items-end">
                                <li className="nav-item justify-content-end ">
                                    <Link to="/about"
                                        className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                                        About
                                </Link>
                                </li>
                                <li className="nav-item justify-content-end ">
                                    <Link to="/portfolio"
                                        className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                                        Portfolio
                                </Link>
                                </li>
                                <li className="nav-item justify-content-end ">
                                    <Link to="/contact"
                                        className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                                        Contact
                                </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;