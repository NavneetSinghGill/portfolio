import React from 'react';
import Entity from './Entity';

const Skills = () => {
    return (
        <div className='generalIntro'>

            <h2 className="generalIntro-heading n-left">
                PROFICIENCIES
            </h2>

            <Entity 
                title="Languages"
                values="Swift, React, Python, SQL, Node.js, C, Bash, Objective-C, Java"
            />
            <Entity 
                title="Database"
                values="MySQL, NoSQL MongoDB"
            />
            <Entity 
                title="Tools"
                values="Git, JIRA, Confluence, GitHub, AWS, Heroku"
            />
            <Entity 
                title="Subjects"
                values="Data structures, OOPs, Algorithms, Ad. Systems programming"
            />

        </div>
    );
}

export default Skills;