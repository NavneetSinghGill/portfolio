import React from 'react';
import Entity from './Entity';

const Experience = () => {
    return (
        <div className='generalIntro'>

                <h2 className="generalIntro-heading n-left">
                    EXPERIENCE
                </h2>

                <Entity 
                firmName="CASADIGI"
                workingDuration="(Aug 2018 - July 2019)"
                title="Software Developer"
                points={[
                    "Front end iOS development of CasaDigi, which is a home automation product",
                    "Active participation in decision making of the product architecture and all of SDLC",
                    "Focused on testing for a more stable product delivery",
                    "Actively worked in the Agile environment to be productive and flexible simultaneously"
                ]}
                />

                <Entity 
                firmName="BESTPEERS"
                workingDuration="(Aug 2017 - July 2018)"
                title="iOS Developer"
                points={[
                    "Started iOS development at the firm",
                    "Showed leadership and ownership by a team of 2 during the working time",
                    "Worked as a member of a virtual team, based worldwide",
                    "Involved in active documentation in code management tools with Jira, Confluence, and Git"
                ]}
                />

                <Entity 
                firmName="SYSTANGO"
                workingDuration="(June 2015 - July 2017)"
                title="Associate Software Engineer"
                points={[
                    "Mostly involved in small teams which focused on a fast-paced development",
                    "Participation in backend database structuring for making front end app less complex and more user-friendly",
                    "Improved as a passionate self-driven individual having concentration mainly on continuous learning",
                    "Adopted Waterfall method for small level projects"
                ]}
                />        
                    
        </div>
    );
}

export default Experience;