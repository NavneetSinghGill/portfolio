import React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import GeneralIntro from '../common/generalIntro';

const mainPage = (props) => {
  return ([
    <link rel="shortcut icon" href="/public/images/favicon.png" />,
    <link rel="stylesheet" href="/public/mainPage/style.css" />,
    <link rel="stylesheet" href="/public/mainPage/fonts.css" />,
    <link rel="preconnect" href="https://fonts.googleapis.com" />,
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />,
    <link href="https://fonts.googleapis.com/css2?family=Macondo&family=Playwrite+IN:wght@100..400&display=swap" rel="stylesheet" />,

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