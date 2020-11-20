import React from 'react';
import { ReactComponent as Copy } from '../assets/images/copy.svg';

const ShortUrl = () => {
    return (
        <div className="conatiner">
            <div className="row">
                <div className="short-div col-12 col-lg-6 mx-auto">
                    <p>Your short link here</p>
                    <button className="copy">
                        <Copy className="copy-icon" />
                        copy
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShortUrl;
