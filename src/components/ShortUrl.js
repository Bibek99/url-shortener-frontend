import React from 'react';
import { store } from 'react-notifications-component';
import { ReactComponent as Copy } from '../assets/images/copy.svg';

const ShortUrl = (shortUrl) => {
    const handleCopy = () => {
        store.addNotification({
            title: 'Wonderful!',
            message: 'Link copied to your clipboard',
            type: 'success',
            insert: 'top',
            container: 'top-right',
            dismiss: {
                duration: 2000,
            },
        });
    };

    return (
        <div className="short conatiner">
            <div className="row">
                <div className="short-div col-12 col-md-8 col-lg-6 mx-auto">
                    <p className="link-text"></p>
                    <button onClick={handleCopy} className="copy">
                        <Copy className="copy-icon" />
                        copy
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShortUrl;
