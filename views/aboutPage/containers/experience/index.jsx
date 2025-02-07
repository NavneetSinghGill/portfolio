import React from 'react';
import Entity from './Entity';

const Experience = () => {
    return (
        <div className='generalIntro'>

            <h2 className="heading n-left">
                EXPERIENCE
            </h2>

            <Entity
                firmName="TD"
                workingDuration="(Jun 2023 - Present)"
                title="Software Engineer II"
                type="(Full-time)"
                points={[
                "Designing and implementing common components in SwiftUI, to be used in TD US and Canada",
                "Is responsible for maintaining Accessibility; Unit, and Snapshot tests; and multilingual standards",
                "Maintaining a bunch of custom libraries and repositories to minimise the load on a single point and for more developer readiness along with control",
                "Working in a diverse agile environment with ever changing requirements",
                ]}
            />

            <Entity 
            firmName="HSBC"
            workingDuration="(Jul 2022 - Feb 2023)"
            title="iOS Developer"
            type="(Contract)"
            points={[
                "Contributed as an agile iOS developer on different region-based projects, with small to large-scale libraries for the HSBC global app with Test-driven approach using SwiftUI and UIKit",
                "Implemented XCTests, UITests, and snapshot testing for better reliable code with API handling",
                "Worked as a team member for maintaining Github and add new features using Swift practices with VIPER and MVVM design pattern",
            ]}
            />

            <Entity 
            firmName="CIBC"
            workingDuration="(Apr 2021 - Jun 2022)"
            title="Sr. Application Developer"
            type="(Full-time)"
            points={[
                "Worked as an iOS developer for the CIBC main app which is a mix of Objective-C and Swift along with custom frameworks for maintaining and improving the global app",
                "Contributed as an Individual and a team member for the upcoming features using the latest Swift practices with CLEAN swift architecture being the design pattern",
            ]}
            />

            <Entity 
            firmName="Sherry and Sherry"
            workingDuration="(Sep 2020 - Mar 2021)"
            title="Software Developer"
            type="(Co-op)"
            points={[
                "Worked as a researcher, developer and tester (TDD) for the new browser extension application",
                "Designed and Implemented a Microsoft azure database which connects with multiple Point-of-sales system and the middleware along with Shopify",
                "Tester for the iOS application “The game of things” which is a card game where I focused on breaking the flow and list in JIRA",
            ]}
            />

            <Entity 
            firmName="CASADIGI"
            workingDuration="(Aug 2018 - July 2019)"
            title="Software Developer"
            type="(Full-time)"
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
            type="(Full-time)"
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
            type="(Full-time)"
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