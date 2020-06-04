import React from 'react';

const Entity = (props) => {
    var githubElement = null
    if (props.github) {
        var githubElement = <a href={props.github} target="_blank" title="GitHub" className="fa fa-github fa-1x social-media-icon"></a>
    }
    var appstoreElement = null
    if (props.appstore) {
        var appstoreElement = <a href={props.appstore} target="_blank" title="Appstore" className="fa fa-apple fa-1x social-media-icon"></a>
    }
    
    return (
        <p className="generalIntro-subheading n-left">
            <div className="generalIntro-subheading n-left">
                <a href={props.link} target='_blank'>
                    <b>{props.name.toUpperCase()}</b> 
                    {/* {props.workingDuration} */}
                </a>
                {githubElement}
                {appstoreElement}
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