import React from 'react';

const InputUrl = () => {
    return (
        <div className="form-section container">
            <form className="form">
                <div className="row">
                    <input
                        type="text"
                        className="input col-12 col-md-6 mx-auto"
                    ></input>
                </div>
                <div className="row">
                    <button
                        type="submit"
                        className="btn button col-2 mx-auto my-4 py-2"
                    >
                        Shorten
                    </button>
                </div>
            </form>
        </div>
    );
};

export default InputUrl;
