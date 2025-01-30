import React from 'react';
import TitleAndSupport from '../../../common/TitleAndSupport';

const Entity = (props) => {
    return (
        <p className="subheading">
            <TitleAndSupport
                title={props.title.toUpperCase()}
            />
            <p className="content fullWidth n-noMarginPadding">{props.values}</p>
        </p>
    );
}

export default Entity;