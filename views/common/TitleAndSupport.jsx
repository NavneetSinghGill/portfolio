import React from 'react';

const TitleAndSupport = (props) => {
    var title = <b className="n-noMarginPadding mocondo">{props.title}</b>
    return (
        <div className="subheading n-noMarginPadding noWidth" style={{ justifyContent: "space-between", flexWrap: "wrap"}}>
            {/*{props.link &&*/}
            {/*    <a href={props.link} target='_blank'>*/}
            {/*        {title}*/}
            {/*    </a>*/}
            {/*}*/}
            {/*{!props.link && title}*/}
            {title}
            <span className="subheading-support">{props.support}</span>
        </div>
    );
}

export default TitleAndSupport;