import React from "react";
import '../styles/footer.css';
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";
import { Link as LinkRouter } from "react-router-dom";


function Footer() {
    return (
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>For Business</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/healthplan">
                            <p>healthplan</p>
                        </a>
                        <a href="/individual">
                            <p>individual</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Contact</h4>
                        <a href="/resources">
                            <p>+54 11 4531 2123</p>
                        </a>
                        <a href="/resources">
                            <p>Mytinerary@gmail.com</p>
                        </a>
                        <a href="/resources">
                            <p>Buenos Aires, Argentina.</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Partners</h4>
                        <a href="/employer">
                            <p>Mindhub</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>MyTinerary</h4>
                        <LinkRouter to="/home">
                            <p>Home</p>
                        </LinkRouter>
                        <LinkRouter to="/cities">
                            <p>Cities</p>
                        </LinkRouter>
                        <LinkRouter to="/about">
                            <p>About</p>
                        </LinkRouter>
                        <LinkRouter to="/contact">
                            <p>Contact</p>
                        </LinkRouter>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Coming soon on</h4>
                        <div className="socialmedia">
                            <p><BsFacebook /></p>
                            <p><BsTwitter /></p>
                            <p><BsLinkedin /></p>
                            <p><BsInstagram /></p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} MyTinerary. All right reserved.
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                        <a href="/privacy"><div><p>Privacy</p></div></a>
                        <a href="/security"><div><p>Security</p></div></a>
                        <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;