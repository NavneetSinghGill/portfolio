import React from 'react';
import Entity from './Entity';

const Skills = () => {
    return (
        <div className='generalIntro'>

            <h2 className="heading n-left">
                PROFICIENCIES <div style={{display:"inline", fontWeight:"normal", fontSize:"0.7em"}}>(not limited to..)</div>
            </h2>

            <Entity 
                title="Languages"
                values="Swift (SwiftUI), Objective-C, SQL, Node.js, React, C, Python, Bash, Java"
            />
            <Entity 
                title="Mobile development skills"
                values="SwiftUI, Accessibility, UIKit, Unit & snapshot tests, RxSwift, SPM, RESTful APIs, iCloud, XCTests"
            />
            <Entity 
                title="Database"
                values="NoSQL MongoDB, CoreData, SQLite, Realm, MySQL, PostGre SQL"
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