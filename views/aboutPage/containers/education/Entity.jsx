import React from 'react';
import TitleAndSupport from '../TitleAndSupport';

const Entity = (props) => {
    return (
        <p className="subheading n-left">
            <TitleAndSupport
                title={props.title.toUpperCase()}
                support={props.workingDuration}
            />
            <p className="content n-left n-noMarginPadding">{props.firmName}</p>
        </p>
    );
}

export default Entity;