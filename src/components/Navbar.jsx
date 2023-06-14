import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsFillAirplaneFill, BsFillPeopleFill } from "react-icons/bs";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/navbar.css';
import { Link as LinkRouter } from 'react-router-dom'

function Navbar() {
    const Navlinks = [
        {
            name: "Home",
            path: "/Home"
        },
        {
            name: "Cities",
            path: "/Cities"
        },
        {
            name: "About",
            path: "/About"
        },
        {
            name: "Contact",
            path: "/Contact"
        }
    ]

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#"><BsFillAirplaneFill /> MyTinerary</a>
                <div className="dropdown text-light">
                    <div className="user">
                        <BsFillPeopleFill />
                        <button className="ms-2 btn px-3 aos-init aos-animate" type="button" data-aos="fade-up"
                            id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"> <FontAwesomeIcon icon={faBars} />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end bg-transparent" aria-labelledby="dropdownMenuButton">
                            {
                                Navlinks.map(link => {
                                    return <LinkRouter className="dropdown-item text-secondary"to={link.path}>{link.name}</LinkRouter>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;