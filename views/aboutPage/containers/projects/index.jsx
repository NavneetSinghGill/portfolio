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
                // description="Software Developer"
                link='http://nsg-basic-mern-app.herokuapp.com/'
                github='https://github.com/NavneetSinghGill/MotionAnalysis'
                points={[
                    "Used Node.js with express to build the server-side of the app",
                    "Created multiple APIs and React components to serve modularity and reusability",
                    "Implemented web technologies, React and NodeJS, to have a simple intuitive website for users",
                ]}
                />

                <Entity 
                name="CasaDigi"
                workingDuration="(Aug 2018 - July 2019)"
                skills="iOS, Swift, IoT, Socket, Git"
                link='https://apps.apple.com/us/app/casadigi-3-0/id1487106225'
                points = {[
                    "Collaborated with the team on how to design and implement CasaDigi iOS Application",
                    "Worked with the backend team to discuss the best way possible for the development of new features",
                    "For the most flexibility, myself with my team hand-coded all the required components",
                    "Encouraged use of project management within the team to keep track of the product effectively",
                ]}
                />

                <Entity 
                name="Peruze"
                workingDuration="Winter 2018"
                skills="iOS, IoT, Socket, Git"
                link='https://apps.apple.com/us/app/casadigi-3-0/id1487106225'
                points = {[
                    "Collaborated with the team on how to design and implement CasaDigi iOS Application",
                    "Worked with the backend team to discuss the best way possible for the development of new features",
                    "For the most flexibility, myself with my team hand-coded all the required components",
                    "Encouraged use of project management within the team to keep track of the product effectively",
                ]}
                />

                    
        </div>
    );
}

export default Projects;