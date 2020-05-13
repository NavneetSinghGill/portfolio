import React from 'react';
import HeaderButton from './headerButton';

const header = () => {
    return (
        <div id='header'>
            <div id="header-content">
                <HeaderButton title="NAVNEET SINGH GILL" url="/"/>
                <div style={{flex:1}}></div>
                <HeaderButton title="ABOUT" url="/about"/>
                <HeaderButton title="RESUME" url="/resume" target="_blank"/>
            </div>
            <div id='divider'></div>
        </div>
    );
}

export default header;