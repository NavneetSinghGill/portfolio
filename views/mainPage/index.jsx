import React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import GeneralIntro from '../common/generalIntro';

const mainPage = (props) => {
  return ([
    <link rel="stylesheet" href="/public/mainPage/style.css" />,

    <div className='main-body'>
      <div id='main-body-center-header'>
        <Header />
        <GeneralIntro />
      </div>
      <Footer />
    </div>

  ]);
}

module.exports = mainPage;