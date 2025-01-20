import React from 'react';

const Entity = (props) => {
    return (
        <p className="subheading n-left">
            <b>{props.title.toUpperCase()}</b>
            <p className="subheading n-left n-noMarginPadding">{props.values}</p>
        </p>
    );
}

export default Entity;