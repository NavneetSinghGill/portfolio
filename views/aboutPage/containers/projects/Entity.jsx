import React from 'react';
import TitleAndSupport from '../../../common/TitleAndSupport';

const Entity = (props) => {
    var githubElement = null
    if (props.github) {
        var githubElement = <a href={props.github} target="_blank" title="GitHub" className="fa fa-github fa-1x social-media-icon"></a>
    }
    var appstoreElement = null
    if (props.appstore) {
        var appstoreElement = <a href={props.appstore} target="_blank" title="Appstore" className="fa fa-apple fa-1x social-media-icon"></a>
    }
    var linkedInElement = null
    if (props.linkedin) {
        var linkedInElement = <a href={props.linkedin} target="_blank" title="Linked In" className="fa fa-linkedin fa-1x social-media-icon"></a>
    }
    var websiteElement = null
    if (props.website) {
        var websiteElement = <a href={props.website} target="_blank" title="Linked In" className="fa fa-globe fa-1x social-media-icon"></a>
    }
    
    return (
        <p>
            <div className="mocondo" style={{width: "100%", alignItems: "center"}} >
                <TitleAndSupport
                    title={props.name.toUpperCase()}
                    link={props.link}
                />
                <div className="content noWidth">
                    {websiteElement}
                    {githubElement}
                    {appstoreElement}
                    {linkedInElement}
                </div>
            </div>
            <p className="content fullWidth n-noMarginPadding">Skills: {props.skills}</p>
            {/*<p className="content n-left n-noMarginPadding">{props.description}</p>*/}
            <ul className="content fullWidth">
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