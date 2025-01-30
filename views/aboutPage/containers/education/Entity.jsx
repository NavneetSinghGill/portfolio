import React from 'react';
import TitleAndSupport from '../../../common/TitleAndSupport';

const Entity = (props) => {
    return (
        <p className="subheading">
            <TitleAndSupport
                title={props.title.toUpperCase()}
                support={props.workingDuration}
            />
            <p className="content fullWidth n-noMarginPadding">{props.firmName}</p>
        </p>
    );
}

export default Entity;