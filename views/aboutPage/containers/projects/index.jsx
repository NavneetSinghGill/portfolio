import React from 'react';
import Entity from './Entity';

const Projects = () => {
    return (
        <div className='generalIntro'>

            <h2 className="heading n-left">
                PROJECTS
            </h2>

            <Entity 
                name="E-motion Analysis"
                workingDuration="(Aug 2018 - July 2019)"
                skills="React, Node, Express, MongoDB, Git"
                link='http://nsg-basic-mern-app.herokuapp.com/'
                github='https://github.com/NavneetSinghGill/MotionAnalysis'
                // description="Software Developer"
                points={[
                    "Used Node.js with express to build the server-side of the app and MongoDB for data storage",
                    "Created multiple APIs and React components to serve modularity and reusability",
                    "Deployed the application on Heroku for production release",
                    "Data cleaning, processing, and visualisation using JS, and React",
                ]}
            />

            <Entity 
                name="Search Engine"
                workingDuration="(Sep 2019 - Dec 2020)"
                skills="Data structures, OOPs, Java"
                points={[
                    "Implemented inverted index, ranking using Quick-Select, auto-completion using Trie, spellcheck using Edit-Distance algorithms",
                    "Around 100 web pages were extracted using web crawler"
                ]}
                />

            <Entity 
                name="E-Portfolio"
                workingDuration="(December 2020 - Present)"
                skills="React, Node, Express, MongoDB, Git"
                link='http://navneetsinghgill.com'
                github='https://github.com/NavneetSinghGill/portfolio'
                points={[
                    "After the basic understanding of MERN stack from E-motion analysis I went a step up",
                    "Created a much more modular and cleaner project with as many common components as possible using React",
                    "The project is fully React-based and uses flexbox to tackle the responsiveness",
                    "Learned how to animate and have a deeper understanding of CSS along with view engines in Node"
                ]}
            />

            <Entity 
                name="CasaDigi"
                workingDuration="(Aug 2018 - July 2019)"
                skills="iOS, Swift, IoT, Socket, Git, Swift, Autolayout, RSA, VIPER, MVC, MVVM"
                link='https://apps.apple.com/us/app/casadigi-3-0/id1487106225'
                appstore='https://apps.apple.com/us/app/casadigi-3-0/id1487106225'
                points = {[
                    "Designed UX and implemented the architecture of IoT application using Swift and Objective-C with bridging header",
                    "Spatial reasoning in designing and building the IoT application architecture with 1 touch access in mind",
                    "Created intuitive design, responsive to all iOS devices and did Data preparation, storage and encryption",
                    "Integrated RESTful APIs and Sockets for CRUD operations and hardware (TV, music system, AC, etc) control using iPad and iPhone",
                    "Scrum and Agile proficiency with JIRA along with code management using Git on GitHub and Bitbucket",
                ]}
            />

            <Entity 
                name="Two player dice game"
                workingDuration="Mar 2020"
                skills="C, Bash, Socket"
                link="https://github.com/NavneetSinghGill/DiceRollingGame"
                github="https://github.com/NavneetSinghGill/DiceRollingGame"
                points={[
                    "Implemented inverted index, ranking using Quick-Select, auto-completion using Trie, spellcheck using Edit-Distance algorithms",
                    "Around 100 web pages were extracted using web crawler"
                ]}
            />

            <Entity         
                name="MentalSnapp"
                workingDuration="Fall 2018"
                skills="AWS S3, Audio/video rendering, Swift, iOS, Git"
                link='https://apps.apple.com/gb/app/mental-snapp/id1187218345'
                github="https://github.com/NavneetSinghGill/MentalSnapp"
                appstore="https://apps.apple.com/gb/app/mental-snapp/id1187218345"
                points = {[
                    "Implemented audio/video to record the emotion of patients",
                    "Added Chat functionality to let doctors assist patients and used AWS-S3 for storage and analysis",
                    "For the most flexibility, myself with my team hand-coded all the required components",
                    "Encouraged use of project management within the team to keep track of the product effectively",
                ]}
            />

            <Entity         
                name="SpiralPay"
                workingDuration="2017"
                skills="Swift, VIPER, Facial recognition, Ecommerce, Inventory, QR Scan"
                points = {[
                    "Designed and developed this payment gateway application where users can do payment on the go just by scanning the products QR.",
                    "Implemented functional ecommerce platform inclusive of Microsoft backend database",
                ]}
            />
            
            <Entity 
                name="Peruze"
                workingDuration="Winter 2016"
                skills="iCloud, Swift, iOS, Git"
                link='https://github.com/NavneetSinghGill/Peruze'
                github="https://github.com/NavneetSinghGill/Peruze"
                points = {[
                    "Created iCloud based backed to store user data making it independent of any other technology than iOS",
                    "Implemented smooth animations using UIImageView and components for reusability",
                    "Used developer portal to design the database for CRUD operations",
                ]}
            />

            <Entity 
                name="Hamperville"
                workingDuration="Winter 2016"
                skills="Objective-C, RestFul APIs, Classical design"
                link='https://github.com/NavneetSinghGill/Hamperville'
                github="https://github.com/NavneetSinghGill/Hamperville"
                points = {[
                    "Implement this Laundry app which included pickup, drop-off options with traditional app design",
                    "Created 10+ pixel-perfect screens with pleasing designs for user engagement",
                    "Gather and filter requirements to include only the most suitable information in the best way possible",
                ]}
            />

            {/* Socket */}
                    
        </div>
    );
}

export default Projects;