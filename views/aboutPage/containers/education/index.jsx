import React from 'react';
import Entity from './Entity';

const Education = () => {
    return (
        <div className='generalIntro'>

                <h2 className="generalIntro-heading n-left">
                    EDUCATION
                </h2>

                <Entity 
                firmName="University of Windsor"
                workingDuration="(Sep 2019 - Present)"
                title="Master of Applied Computing"
                />

                <Entity 
                firmName="Rajiv Gandhi Technical University"
                workingDuration="(2011 - 2015)"
                title="Bachelors of Engineering (IT)"
                />  
                    
        </div>
    );
}

export default Education;