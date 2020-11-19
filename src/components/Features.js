import React from 'react';
import { ReactComponent as Growth } from '../assets/images/growth.svg';
import { ReactComponent as Dashboard } from '../assets/images/dashboard.svg';
import { ReactComponent as Customize } from '../assets/images/customize.svg';

const Features = () => {
    return (
        <>
            <div className="features-bg">
                <div className="features-body container">
                    <div className="section-title">Features</div>
                    <div className="row">
                        <div className="feature col-12 col-md-7 mx-auto col-lg-4">
                            <div className="feature-icon">
                                <Growth />
                            </div>
                            <div className="feature-title">Branding</div>
                            <div className="feature-info">
                                Boost your brand with each click. Our custom
                                links help you be identified easily.
                            </div>
                        </div>
                        <hr className="d-lg-none d-block col-7 mx-auto" />
                        <div className="feature col-12 col-md-7 mx-auto col-lg-4">
                            <div className="feature-icon">
                                <Dashboard />
                            </div>
                            <div className="feature-title">Dashboard</div>
                            <div className="feature-info">
                                Get to know how your links and campaigns are
                                performing in the real world by looking the
                                statistics in your dashboard.
                            </div>
                        </div>
                        <hr className="d-lg-none d-md-block col-7 mx-auto" />
                        <div className="feature col-12 col-md-7 mx-auto col-lg-4 mab">
                            <div className="feature-icon">
                                <Customize />
                            </div>
                            <div className="feature-title">Customize</div>
                            <div className="feature-info">
                                Improve your recognition more with fully
                                customizable links and spread awareness.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="white-b"></div>
        </>
    );
};

export default Features;
