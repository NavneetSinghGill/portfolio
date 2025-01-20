import React from 'react';

const Entity = (props) => {
    return (
        <p className="n-left n-noMarginPadding" style={{ textAlign: "left", background:"#333" }}>
            <div className="subheading n-left n-noMarginPadding">
                <b className="n-left n-noMarginPadding">{props.firmName.toUpperCase()}</b>
                <span className="subheading-support n-left">{props.workingDuration}</span>
            </div>

            <div className="subheading n-left n-noMarginPadding">
                <b className="n-left n-noMarginPadding">{props.title}</b>
                <span className="subheading-support n-left">{props.type}</span>
            </div>

            <ul className="content n-left">
                {
                    props.points.map((point) => {
                        return <li key={point}>{point}</li>
                    })
                }
            </ul>
        </p>
    );
}

export default Entity;