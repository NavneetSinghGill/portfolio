import React from 'react';
// var styles = require('./style.jsx');
import '/static/mainPage/style.css';

function HelloMessage(props) {
  return <div 
  className = {styles.divStyle}
  >
      <h1>
        Hello {props.name}
        </h1>
      </div>;
}

// HelloMessage.propTypes

module.exports = HelloMessage;