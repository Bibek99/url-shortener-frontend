import React from 'react';
import { Link } from 'react-router-dom';

const CTA = (props) => {
    return (
        <Link to="/" className="signup">
            {props.name}
        </Link>
    );
};

export default CTA;
