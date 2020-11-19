import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Facebook } from '../assets/images/fb.svg';
import { ReactComponent as Instagram } from '../assets/images/ig.svg';
import { ReactComponent as Twitter } from '../assets/images/tw.svg';

const Footer = () => {
    return (
        <footer className="footer-bg">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="brand footer-head">URL ly</div>
                        <ul className="urlly footer-info">
                            <li className="copyright">
                                <p>
                                    <span> &#169; </span>2020 URL ly made by few
                                    tech enthusiasts.
                                </p>
                            </li>
                            <li className="social-media">
                                <Link to="#" className="icon">
                                    <Facebook />
                                </Link>
                                <Link to="#" className="icon">
                                    <Instagram />
                                </Link>
                                <Link to="#" className="icon">
                                    <Twitter />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="footer-head">Why URL ly?</div>
                        <ul className="footer-info">
                            <li>
                                <Link>Better link management</Link>
                            </li>
                            <li>
                                <Link>Easy Integrations & API</Link>
                            </li>
                            <li>
                                <Link>Free for use</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                        <div className="footer-head">Resources</div>
                        <ul className="footer-info">
                            <li>
                                <Link>Blogs</Link>
                            </li>
                            <li>
                                <Link>Developers</Link>
                            </li>
                            <li>
                                <Link>Resource Library</Link>
                            </li>
                            <li>
                                <Link>Support</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                        <div className="footer-head">Company</div>
                        <ul className="footer-info">
                            <li>
                                <Link>About</Link>
                            </li>
                            <li>
                                <Link>Our Team</Link>
                            </li>
                            <li>
                                <Link>Careers</Link>
                            </li>
                            <li>
                                <Link>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2">
                        <div className="footer-head">Legal</div>
                        <ul className="footer-info">
                            <li>
                                <Link>Terms & conditions</Link>
                            </li>
                            <li>
                                <Link>Privacy policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
