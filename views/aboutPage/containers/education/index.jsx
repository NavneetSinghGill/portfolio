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
                workingDuration="(Sep 2019 - Dec 2020)"
                title="Master of Applied Computing"
                />

                <Entity 
                firmName="Acropolis Institutions"
                workingDuration="(July 2011 - May 2015)"
                title="Bachelors of Engineering (IT)"
                />  
                    
        </div>
    );
}

export default Education;