import React from 'react';
import { Link } from 'react-router-dom';
import CTA from './CTA';

const Nav = () => {
    return (
        <>
            <div className="container header-nav">
                <div className="brand">
                    <Link to="/" exact className="logo">
                        URL ly
                    </Link>
                </div>
                <ul className="cta">
                    <Link to="/login" className="btn login">
                        Login
                    </Link>
                    <CTA name="Get Started" />
                </ul>
            </div>
        </>
    );
};

export default Nav;
