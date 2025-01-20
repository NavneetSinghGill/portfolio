import React from 'react';
import TitleAndSupport from '../../../common/TitleAndSupport';

const Entity = (props) => {
    return (
        <p className="subheading n-left">
            <TitleAndSupport
                title={props.title.toUpperCase()}
            />
            <p className="content n-left n-noMarginPadding">{props.values}</p>
        </p>
    );
}

export default Entity;