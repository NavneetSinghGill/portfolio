import React from 'react';
import Entity from './Entity';

const Projects = () => {
    return (
        <div className='generalIntro'>

            <h2 className="generalIntro-heading n-left">
                CERTIFICATIONS
            </h2>

            <div className='generalIntro'>
                <div className='generalIntro' style={{flexDirection: 'row', justifyContent:'space-evenly'}}>
                    <Entity 
                    name="Big data 101"
                    link='/public/certifications/BigData.pdf'
                    hostWebsite='CognitiveClass.ai'
                    />
                    <Entity 
                    name="Learning MongoDB"
                    link='/public/certifications/MongoDB.pdf'
                    hostWebsite='LinkedInLearning'
                    />
                </div>
                <div className='generalIntro' style={{flexDirection: 'row', justifyContent:'space-evenly'}}>
                    <Entity 
                    name="Databases for Node.js Developers"
                    link='/public/certifications/NodeJSdb.pdf'
                    hostWebsite='LinkedInLearning'
                    />
                    <Entity 
                    name="Learning NoSQL databases"
                    link='/public/certifications/Nosql.pdf'
                    hostWebsite='LinkedInLearning'
                    />
                </div>
                <div className='generalIntro' style={{flexDirection: 'row', justifyContent:'space-evenly'}}>
                    <Entity 
                    name="Spark Fundamentals"
                    link='/public/certifications/Spark.pdf'
                    hostWebsite='CognitiveClass.ai'
                    />
                    <Entity 
                    name="Hadoop 101"
                    link='/public/certifications/Hadoop.pdf'
                    hostWebsite='CognitiveClass.ai'
                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;