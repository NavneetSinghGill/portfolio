import React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import GeneralIntro from '../common/generalIntro';

const mainPage = (props) => {
  return ([
    <link rel="shortcut icon" href="/public/images/favicon.png" />,
    <link rel="stylesheet" href="/public/mainPage/style.css" />,

    <div id='main-body'>
      <div id='main-body-center-header'>
        <Header />
        <GeneralIntro />
      </div>
      <Footer />
    </div>

  ]);
}

module.exports = mainPage;