import React from 'react';
import Intro from '../../introduction/component/intro';
import Skills from '../../skills/component/skills';
import Social from '../../social/component/social';
import Footer from '../../footer/component/footer';
import '../../../assets/styles/modules/myData.scss';
import Project from '../../project/component/project';

const MyData = () => {
  return (
    <div className="data-container full-width">
      <Intro />
      <Skills />
      <Social />
      <Project />
      <Footer />
    </div>
  );
};

export default MyData;
