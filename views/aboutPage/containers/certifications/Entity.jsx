import React from 'react';

const Entity = (props) => {
    var proportion = 0.8
    var marginValue = 55

    switch(props.hostWebsite) {
        case 'CognitiveClass.ai':
            var width = 300*proportion+'px'
            var heightValue =  (300*proportion + 2)+'px'
            var style = {width: width, height: heightValue}
            break;
        case 'LinkedInLearning':
            var width = 300*proportion+'px'
            var heightValue =  (300*proportion + 2)+'px'
            var style = {width: width, height: heightValue}
            break;
        default:
            var width = 300*proportion+'px'
            var heightValue =  (300*proportion + 2)+'px'
            var style = {width: width, height: heightValue}
    }

    return (
        <div className='n-noMarginPadding' 
            style={{height: (heightValue-marginValue)+'px', overflow: 'hidden'}}
        >
            <a href={props.link} target="_blank" style={{marginTop:'-'+marginValue+'px'}}>
                <iframe className="iframeCertification" style={style} src={props.link}>
                </iframe>
            </a>
        </div>
    );
}

export default Entity;