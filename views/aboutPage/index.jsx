import React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import AboutInfo from './containers/aboutInfo';
import Experience from './containers/experience';
import Education from './containers/education';
import Projects from './containers/projects';
import Certifications from './containers/certifications';
import Skills from './containers/skills';

const AboutPage = (props) => {
  return ([
    <link rel="shortcut icon" href="/public/images/favicon.png" />,
    <link rel="stylesheet" href="/public/mainPage/style.css" />,
    <link rel="stylesheet" href="/public/font-awesome/css/font-awesome.min.css" />,
    
    <div id='main-body'>
      <div id='main-body-center-header'>
        <Header />
        <AboutInfo />
        {/* <Skills /> */}
        <Education />
        <Experience />
        <Projects />
        <Certifications />
      </div>
      <Footer />
    </div>

  ]);
}

module.exports = AboutPage;