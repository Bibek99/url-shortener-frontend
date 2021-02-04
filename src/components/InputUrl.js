import React, { useState } from 'react';
import { ReactComponent as Linksvg } from '../assets/images/link.svg';
import { shorten } from '../utils';
import { store } from 'react-notifications-component';
import { ReactComponent as Copy } from '../assets/images/copy.svg';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const InputUrl = () => {
    const [values, setValues] = useState({
        longUrl: '',
        error: '',
        loading: false,
        generated: false,
        shortUrl: '',
    });
    const { longUrl, error, loading, generated, shortUrl } = values;

    const handleChange = (name) => (event) => {
        setValues({
            ...values,
            error: false,
            generated: false,
            [name]: event.target.value,
        });
    };

    const shortenUrl = (event) => {
        event.preventDefault();
        if (longUrl === '') {
            setValues({
                ...values,
                error: 'Please enter an URL',
                loading: false,
            });
        } else {
            setValues({
                ...values,
                error: false,
                loading: true,
            });
            shorten({ longUrl }).then(({ data }) => {
                if (data.error) {
                    setValues({
                        ...values,
                        error: data.error,
                        loading: false,
                        generated: false,
                    });
                } else {
                    setValues({
                        ...values,
                        error: '',
                        loading: false,
                        generated: true,
                        shortUrl: data.shortUrl,
                    });
                }
            });
        }
    };

    const Shorturl = () => {
        const handleCopy = () => {
            store.addNotification({
                title: 'Wonderful!',
                message: 'Link copied to your clipboard',
                type: 'success',
                insert: 'bottom',
                container: 'bottom-right',
                dismiss: {
                    duration: 2000,
                },
            });
        };
        return (
            <div
                className="short conatiner"
                style={{ display: generated ? '' : 'none' }}
            >
                <div className="row">
                    <div className="short-div col-12 col-md-8 col-lg-6 mx-auto">
                        <p className="link-text">{shortUrl}</p>
                        <CopyToClipboard text={shortUrl}>
                            <button className="copy" onClick={handleCopy}>
                                <Copy className="copy-icon" />
                                Copy
                            </button>
                        </CopyToClipboard>
                    </div>
                </div>
            </div>
        );
    };

    const Error = () => {
        return (
            <div
                className="error alert alert-danger col-10 col-md-6 mx-auto my-4"
                style={{ display: error ? '' : 'none' }}
            >
                {error}
            </div>
        );
    };

    const Loading = () => {
        return (
            <div
                className="loading alert alert-info col-10 col-md-6 mx-auto my-4"
                style={{ display: loading ? '' : 'none' }}
            >
                Loading...
            </div>
        );
    };

    return (
        <>
            <div className="form-section container">
                <form className="form">
                    <div className="row">
                        <div className="input-div col-12 col-lg-8 mx-auto">
                            <Linksvg className="link-icon" />
                            <input
                                value={longUrl}
                                onChange={handleChange('longUrl')}
                                type="text"
                                placeholder="Paste your long URL here"
                                className="input"
                            ></input>
                        </div>
                    </div>
                    {Error()}
                    {Loading()}
                    <div className="row">
                        <button
                            onClick={shortenUrl}
                            type="submit"
                            className="btn button col-4 col-xs-2 col-sm-4 col-md-3 col-lg-2 mx-auto my-4 py-2"
                        >
                            Shorten
                        </button>
                    </div>
                </form>
            </div>
            {Shorturl()}
        </>
    );
};

export default InputUrl;
