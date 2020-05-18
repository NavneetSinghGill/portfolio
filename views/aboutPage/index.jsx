import React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import AboutInfo from '../common/aboutInfo';

const AboutPage = (props) => {
  return ([
    <link rel="stylesheet" href="/public/mainPage/style.css" />,
    <link rel="stylesheet" href="/public/font-awesome/css/font-awesome.min.css" />,
    
    <div className='main-body'>
      <img src="/public/mainPage/imgBack-yellow.jpg" id="main-body-background"/>
      <div className="main-body" style={{position:"absolute"}}>
        <div id='main-body-center-header'>
          <Header />
          <AboutInfo />
        </div>
        <Footer />
      </div>
    </div>

  ]);
}

module.exports = AboutPage;