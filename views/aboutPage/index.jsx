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
    <link rel="stylesheet" href="/public/mainPage/fonts.css" />,
    <link rel="stylesheet" href="/public/font-awesome/css/font-awesome.min.css" />,
    <link rel="preconnect" href="https://fonts.googleapis.com" />,
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />,
    <link href="https://fonts.googleapis.com/css2?family=Macondo&family=Playwrite+IN:wght@100..400&display=swap" rel="stylesheet" />,
    
    <div id='main-body'>
      <div id='main-body-center-header'>
        <Header />
        <AboutInfo />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Certifications />
      </div>
      <Footer />
    </div>

  ]);
}

module.exports = AboutPage;