import React, { useContext } from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

import SkillsImage from '../../../assets/images/skillsImage.png';
import jsImage from '../../../assets/images/skills/js.png';
import flutter from '../../../assets/images/skills/flutter.png';
import Bloc from '../../../assets/images/skills/bloc.png';
import Cplus from '../../../assets/images/skills/cplus.png';
import MySql from '../../../assets/images/skills/MySql.png';
import htmlImage from '../../../assets/images/skills/html5.png';
import cssImage from '../../../assets/images/skills/css3.png';
import reactJsImage from '../../../assets/images/skills/reactjs.png';
import sassImage from '../../../assets/images/skills/sass.png';
import bootStrapImage from '../../../assets/images/skills/bootstrap.png';
import webpackImage from '../../../assets/images/skills/webpack.png';
import nodeJsImage from '../../../assets/images/skills/nodejs.png';
import firebaseImage from '../../../assets/images/skills/firebase.png';
import adobeXdImage from '../../../assets/images/skills/adobeXd.png';
import figmaImage from '../../../assets/images/skills/figma.png';
import { MouseContext } from '../../../shared/context/mouse-context';
const Skills = () => {
  const { cursorChangeHandler } = useContext(MouseContext);

  return (
    <div className="skills-box b-radius--25 flex">
      <div
        className="flex 
      justify__content--center
      intro-image-wrapper"
      >
        <img src={SkillsImage} alt="skills" className="intro-image" />
      </div>
      <div className="intro-content">
        <p className="intro-title font-size--48 mt--30 font-weight--600">
          Skills
        </p>
        <div
          onMouseEnter={() => cursorChangeHandler('hovered')}
          onMouseLeave={() => cursorChangeHandler('')}
        >
          <div className="flex flex--wrap mt--30 gap-15 align__items--center skill-icon-container">
            <div
              className=" position--relative flutter"
              data-tooltip-content="flutter"
            >
              <Tooltip anchorSelect=".flutter" className="tool-tip" />
              <img src={flutter} alt="flutter" />
            </div>
            <div
              className=" position--relative Bloc"
              data-tooltip-content="Bloc"
            >
              <Tooltip anchorSelect=".Bloc" className="tool-tip" />
              <img src={Bloc} alt="Bloc" />
            </div>
            <div
              className="position--relative javascript"
              data-tooltip-content="Javascript"
            >
              <Tooltip anchorSelect=".javascript" />
              <img src={jsImage} alt="javascript" />
            </div>
            <div
              className="position--relative cplusplus"
              data-tooltip-content="cplusplus"
            >
              <Tooltip anchorSelect=".cplusplus" />
              <img src={Cplus} alt="cplusplus" />
            </div>
            <div
              className="position--relative html"
              data-tooltip-content="HTML5"
            >
              <Tooltip anchorSelect=".html" />
              <img src={htmlImage} alt="html5" />
            </div>
            <div
              className="position--relative css"
              data-tooltip-content="CSS3"
            >
              <Tooltip anchorSelect=".css" />
              <img src={cssImage} alt="css3" />
            </div>
            <div
              className=" position--relative mysql"
              data-tooltip-content="mysql"
            >
              <Tooltip anchorSelect=".mysql" />
              <img src={MySql} alt="mysql" />
            </div>
            <div
              className=" position--relative nodejs"
              data-tooltip-content="nodejs"
            >
              <Tooltip anchorSelect=".nodejs" />
              <img src={nodeJsImage} alt="nodejs" />
            </div>
            <div
              className=" position--relative firebase"
              data-tooltip-content="Firebase"
            >
              <Tooltip anchorSelect=".firebase" />
              <img src={firebaseImage} alt="firebase" />
            </div>
            <div
              className="mr--20 position--relative figma"
              data-tooltip-content="Figma"
            >
              <Tooltip anchorSelect=".figma" />
              <img src={figmaImage} alt="figma" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
