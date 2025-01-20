import React from 'react';

const TitleAndSupport = (props) => {
    return (
        <div className="subheading n-left n-noMarginPadding" style={{ justifyContent: "space-between", flexWrap: "wrap" }}>
            <b className="n-left n-noMarginPadding mocondo">{props.title}</b>
            <span className="subheading-support n-left">{props.support}</span>
        </div>
    );
}

export default TitleAndSupport;