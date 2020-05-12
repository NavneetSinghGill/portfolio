import React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import AboutInfo from '../common/aboutInfo';

const AboutPage = (props) => {
  return ([
    <link rel="stylesheet" href="/public/mainPage/style.css" />,
    <link rel="stylesheet" href="/public/font-awesome/css/font-awesome.min.css" />,
    
    <div id='main-body'>
      <div id='main-body-center-header'>
        <Header />
        <AboutInfo />
      </div>
      <Footer />
    </div>

  ]);
}

module.exports = AboutPage;