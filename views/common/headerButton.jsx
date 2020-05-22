import React from 'react';

const headerButton = (props) => {
    var target = "_self";
    if(props.target) {
        target = props.target
    } 
    
    var classOfHeaderButton = "headerButton";
    if(props.transparent) {
        classOfHeaderButton = "headerButton headerButtonAnimation";
    }

    return (
        <h1 className='headerButton'>
            <a className={classOfHeaderButton} href={props.url} target={target}>{props.title}</a>
        </h1>
    );
}

export default headerButton;