import React from 'react';
import TitleAndSupport from '../../../common/TitleAndSupport';

const Entity = (props) => {
    return (
        <p>
            <TitleAndSupport
                title={props.firmName.toUpperCase()}
                support={props.workingDuration}
            />
            <TitleAndSupport
                title={props.title}
                support={props.type}
            />

            <ul className="content n-left">
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