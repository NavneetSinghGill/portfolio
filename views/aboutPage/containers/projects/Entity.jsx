import React from 'react';

const Entity = (props) => {
    if (props.github) {
        var githubElement = <a href="https://github.com/NavneetSinghGill" target="_blank" title="GitHub" className="fa fa-github fa-1x social-media-icon"></a>
    } else {
        var githubElement = null
    }
    
    return (
        <p className="generalIntro-subheading n-left">
            <div className="generalIntro-subheading n-left">
                <a href={props.link} target='_blank'>
                    <b>{props.name.toUpperCase()}</b> 
                    {/* {props.workingDuration} */}
                </a>
                {githubElement}
            </div>
            <p className="generalIntro-subheading n-left n-noMarginPadding">Skills: {props.skills}</p>
            <p className="generalIntro-subheading n-left n-noMarginPadding">{props.description}</p>
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