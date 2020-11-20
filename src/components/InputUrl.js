import React from 'react';
import { ReactComponent as Linksvg } from '../assets/images/link.svg';
import ShortUrl from './ShortUrl';

const InputUrl = () => {
    return (
        <>
            <div className="form-section container">
                <form className="form">
                    <div className="row">
                        <div className="input-div col-12 col-lg-8 mx-auto">
                            <Linksvg className="link-icon" />
                            <input
                                type="text"
                                placeholder="Paste your long URL here"
                                className="input"
                            ></input>
                        </div>
                    </div>
                    <div className="row">
                        <button
                            type="submit"
                            className="btn button col-4 col-xs-2 col-sm-4 col-md-3 col-lg-2 mx-auto my-4 py-2"
                        >
                            Shorten
                        </button>
                    </div>
                </form>
            </div>
            <ShortUrl />
        </>
    );
};

export default InputUrl;
