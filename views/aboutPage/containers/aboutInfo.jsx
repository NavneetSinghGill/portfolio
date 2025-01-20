import React from 'react';

const AboutInfo = () => {
    return (
        <div className='generalIntro'>
                <h2 className="generalIntro-heading n-left">
                    ABOUT
                </h2>
                <p className="generalIntro-subheading n-left">
                    I am a passionate self-driven Software Engineer with over <b>8 years</b> of mobile development experience
                    I currently live in Mississauga ON Canada.
                </p>
                <p className="generalIntro-subheading n-left">
                    I grew up in India and my love for tech led me to pursue a Bachelor of Engineering in IT. 
                    I further worked mostly as an iOS and MERN stack application developer for about 4+ years which drastically improved my problem solving and analytical skills.
                </p>
                <p className="generalIntro-subheading n-left">
                Later, I pursued a Master of Applied Computing from the University of Windsor and then worked with CIBC, HSBC and now with <b>TD</b> as a <b>Senior Software Engineer II</b>. 
                </p>
                <p className="generalIntro-subheading n-left">
                    Apart from this I like to spend time reading and experimenting with new techs, doing photo/video editing and play computer games.
                </p>
            <div style={{ flexWrap: "wrap", width: "70%", justifyContent: "space-around", marginBottom: "2em"}}>
                <a 
                href="mailto:navneet105gill@gmail.com?subject=Hello!" 
                target="_blank" 
                title="Email" 
                className="fa fa-envelope fa-5x social-media-icon"></a>
                <a 
                href="https://www.linkedin.com/in/navneet-singh-gill" 
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