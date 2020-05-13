import React from 'react';

const headerButton = (props) => {
    var target = "_self";
    if(props.target) {
        target = props.target
    } 
    return (
        <h1 className='headerButton'>
            <a className="headerButtonLink" href={props.url} target={target}>{props.title}</a>
        </h1>
    );
}

export default headerButton;