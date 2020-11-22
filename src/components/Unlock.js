import React from 'react';
import CTA from './CTA';

const Unlock = () => {
    return (
        <div className="unlock-bg container mx-auto">
            <div className="row">
                <div className="unlock-text col-12 col-md-10 col-lg-7 mx-auto">
                    Unlock more of our features and montior your links with on
                    your dashboard.
                </div>
                <div className="unlock-cta col-10 col-lg-3 mx-auto">
                    <CTA name="Get Started" />
                </div>
            </div>
        </div>
    );
};

export default Unlock;
