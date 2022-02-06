import React from 'react'
import { NavLink } from 'react-router-dom';
import './Home.css'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link Red" to="/home">HOME </NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link Red" href="#">SERVICES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link Red" href="#">ABOUT US</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link Red" href="#">BLOG </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link Red" href="#">UPCOMING EVENTS</a>
                        </li>
                        <li className="nav-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Header;