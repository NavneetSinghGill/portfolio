import React from 'react';

const TitleAndSupport = (props) => {
    return (
        <div className="subheading n-left n-noMarginPadding" style={{justifyContent:"space-between"}}>
            <b className="n-left n-noMarginPadding">{props.title}</b>
            <span className="subheading-support n-left">{props.support}</span>
        </div>
    );
}

export default TitleAndSupport;