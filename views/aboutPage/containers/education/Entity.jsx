import React from 'react';

const Entity = (props) => {
    return (
        <p className="generalIntro-subheading n-left">
            <b>{props.title.toUpperCase()}</b> {props.workingDuration}
            <p className="generalIntro-subheading n-left n-noMarginPadding">{props.firmName}</p>
        </p>
    );
}

export default Entity;