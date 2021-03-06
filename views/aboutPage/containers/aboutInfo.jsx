import React from 'react';

const AboutInfo = () => {
    return (
        <div className='generalIntro'>
                <h2 className="generalIntro-heading n-left">
                    ABOUT
                </h2>
                <p className="generalIntro-subheading n-left">
                    I am a passionate self-driven <b>Software Engineer</b>. 
                    I am currently living in North Bay ON Canada.
                </p>
                <p className="generalIntro-subheading n-left">
                    I grew up in India and my love for tech led me to pursue a Bachelor of Engineering in IT. 
                    I further worked mostly as an iOS and MERN stack application developer in a couple of firms for about <b>4+ years</b> which drastically improved my problem solving and analytical skills along with professionalism.
                </p>
                <p className="generalIntro-subheading n-left">
                    Later, I am pursued a Master of Applied Computing from the University of Windsor and started working as a Software engineer. Currently I am <b>looking for a full-time oppotunity</b> where I could experience growth both technically and professionally.
                </p>
                <p className="generalIntro-subheading n-left">
                    Apart from this I like to spend time reading and experimenting with new techs, and play computer games.
                </p>
            <div style={{width:"50%", justifyContent: "space-around", marginBottom: "2em"}}>
                <a 
                href="mailto:navneet105gill@gmail.com?subject=Hello!" 
                target="_blank" 
                title="Email" 
                className="fa fa-envelope fa-5x social-media-icon"></a>
                <a 
                href="https://www.linkedin.com/in/navneet-singh-gill-9a113aa9/" 
                target="_blank" 
                title="LinkedIn" 
                className="fa fa-linkedin fa-5x social-media-icon" ></a>
                <a 
                href="https://github.com/NavneetSinghGill" 
                target="_blank" 
                title="GitHub" 
                className="fa fa-github fa-5x social-media-icon" ></a>
                <a 
                href="https://stackoverflow.com/users/7333538/navneet-gill" 
                target="_blank" 
                title="Stack overflow" 
                className="fa fa-stack-overflow fa-5x social-media-icon" ></a>
                <a 
                href="https://www.codechef.com/users/misfits9virus" 
                target="_blank" 
                title="Codechef" 
                className="fa fa-code fa-5x social-media-icon" ></a>
            </div>
        </div>
    );
}

export default AboutInfo;