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
                values="Swift, Objective-C, SQL, Node.js, React, C, Python, Bash, Java"
            />
            <Entity 
                title="Mobile development skills"
                values="SwiftUI, UIKit, Autolayout/Storyboards, RxSwift, SPM, RESTful APIs, iCloud, XCTests"
            />
            <Entity 
                title="Database"
                values="MySQL, NoSQL MongoDB, CoreData, SQLite, PostGre SQL"
            />
            <Entity 
                title="Tools/SDK"
                values="XCode, Sketch, AWS, GitHub, Git, JIRA, Confluence, Appcenter, Firebase"
            />
            <Entity 
                title="Tools"
                values="Git, JIRA, Confluence, GitHub, AWS, Heroku"
            />
            <Entity 
                title="Subjects"
                values="Data structures, OOPs, Algorithms, Software engineering, Computer networks, DBMS, Advanced Systems programming"
            />

        </div>
    );
}

export default Skills;