import React from 'react';

const Entity = (props) => {
    return (
        <p className="generalIntro-subheading n-left">
            <b>{props.firmName.toUpperCase()}</b> {props.workingDuration}
            <p className="generalIntro-subheading n-left n-noMarginPadding"><b>{props.title}</b></p>
            <ul className="generalIntro-subheading n-left">
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