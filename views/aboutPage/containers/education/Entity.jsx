import React from 'react';

const Entity = (props) => {
    return (
        <p className="subheading n-left">
            <b>{props.title.toUpperCase()}</b> {props.workingDuration}
            <p className="subheading-support n-left n-noMarginPadding">{props.firmName}</p>
        </p>
    );
}

export default Entity;