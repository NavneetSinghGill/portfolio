import React from 'react';

const headerButton = (props) => {
    return (
        <h1 className='headerButton'>
            <a className="headerButtonLink" href={props.url}>{props.title}</a>
        </h1>
    );
}

export default headerButton;