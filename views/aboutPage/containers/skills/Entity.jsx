import React from 'react';

const Entity = (props) => {
    return (
        <p className="generalIntro-subheading n-left">
            <b>{props.title.toUpperCase()}</b>
            <p className="generalIntro-subheading n-left n-noMarginPadding">{props.values}</p>
        </p>
    );
}

export default Entity;