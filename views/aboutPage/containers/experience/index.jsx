import React from 'react';
import Entity from './Entity';

const Experience = () => {
    return (
        <div className='generalIntro'>

                <h2 className="generalIntro-heading n-left">
                    EXPERIENCE
                </h2>

                <Entity 
                firmName="Sherry and Sherry"
                workingDuration="(Sep 2020 - Present)"
                title="Software Developer"
                points={[
                    "Working as a researcher, developer and tester (TDD) for the new browser extension application",
                    "Designed and Implemented a Microsoft azure database which connects with multiple Point-of-sales system and the middleware along with Shopify",
                    "Tester for the iOS application “The game of things” which is a card game where I focused on breaking the flow and list in JIRA",
                ]}
                />

                <Entity 
                firmName="CASADIGI"
                workingDuration="(Aug 2018 - July 2019)"
                title="Software Developer"
                points={[
                    "Designed UX and implemented the architecture of IoT application using Swift and Objective-C with bridging",
                    "Implemented SQLite and keychain storage along with RSA encryption",
                    "Integrated HTTP, SOAP, and REST APIs and Sockets for CRUD operations and hardware (TV, music system, AC, etc) control using iPad/iPhone",
                    "Actively worked in the Agile environment to be productive and flexible simultaneously",
                    "Participated in decision making of the product architecture and all of SDLC",
                ]}
                />

                <Entity 
                firmName="BESTPEERS"
                workingDuration="(Aug 2017 - July 2018)"
                title="iOS Developer"
                points={[
                    "Established an iOS team and led 3 projects",
                    "Implemented a new payment application to build pay-as-you-go service",
                    "Integrated face recognition, credit card and bar code reading capabilities",
                    "Created certificates and provisioning profiles; and deployed production iOS application on Appstore, and for internal and external testing (staging) using Fastlane",
                    "Created multiple Pods (open-source libraries) to distribute in community and self-growth",
                    "Involved in active documentation in code management tools with Jira, Confluence, and Git"
                ]}
                />

                <Entity 
                firmName="SYSTANGO"
                workingDuration="(June 2015 - July 2017)"
                title="Associate Software Engineer"
                points={[
                    "Implemented 15+ projects based on Swift, Objective-C",
                    "Created E-commerce, chat applications and extensive animation apps individually and/or with team",
                    "Implemented apps based on iCloud, push notifications, and more",
                    "Adopted Waterfall and Incremental models for small to medium level projects",
                    "Participation in backend database RESTful APIs for making iOS apps flexible, and less complex"
                ]}
                />        
                    
        </div>
    );
}

export default Experience;