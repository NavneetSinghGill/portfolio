import React from 'react';
import Entity from './Entity';

const Projects = () => {
    return (
        <div className='generalIntro'>

            <h2 className="generalIntro-heading n-left">
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
                    "Used Node.js with express to build the server-side of the app",
                    "Created multiple APIs and React components to serve modularity and reusability",
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
                link='http://nsg-basic-mern-app.herokuapp.com/'
                github='https://github.com/NavneetSinghGill/MotionAnalysis'
                points={[
                    "After the basic understanding of MERN stack from E-motion analysis I went a step up",
                    "I created a much more modular and cleaner project with as many common components as possible using React",
                    "The project is fully React-based and uses flexbox to tackle the responsiveness",
                    "Learned how to animate and have a deeper understanding of CSS along with view engines in Node"
                ]}
            />

            <Entity 
                name="CasaDigi"
                workingDuration="(Aug 2018 - July 2019)"
                skills="iOS, Swift, IoT, Socket, Git"
                link='https://apps.apple.com/us/app/casadigi-3-0/id1487106225'
                appstore='https://apps.apple.com/us/app/casadigi-3-0/id1487106225'
                points = {[
                    "Collaborated with the team on how to design and implement CasaDigi iOS Application",
                    "Worked with the backend team to discuss the best way possible for the development of new features",
                    "For the most flexibility, myself with my team hand-coded all the required components",
                    "Encouraged use of project management within the team to keep track of the product effectively",
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
                    "Collaborated with the team on how to design and implement CasaDigi iOS Application",
                    "Worked with the backend team to discuss the best way possible for the development of new features",
                    "For the most flexibility, myself with my team hand-coded all the required components",
                    "Encouraged use of project management within the team to keep track of the product effectively",
                ]}
            />
            
            <Entity 
                name="Peruze"
                workingDuration="Winter 2016"
                skills="iCloud, Swift, iOS, Git"
                link='https://github.com/NavneetSinghGill/Peruze'
                github="https://github.com/NavneetSinghGill/Peruze"
                points = {[
                    "Collaborated with the team on how to design and implement CasaDigi iOS Application",
                    "Worked with the backend team to discuss the best way possible for the development of new features",
                    "For the most flexibility, myself with my team hand-coded all the required components",
                    "Encouraged use of project management within the team to keep track of the product effectively",
                ]}
            />

            {/* Socket */}
                    
        </div>
    );
}

export default Projects;