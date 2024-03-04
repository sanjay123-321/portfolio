import React, { useContext } from 'react';
import MySelf from '../../../assets/images/intro image/myself.jpg';
import { MouseContext } from '../../../shared/context/mouse-context';
const Intro = () => {
  const { cursorChangeHandler } = useContext(MouseContext);
  return (
    <div className="intro-box  b-radius--25  flex">
      <div className="flex justify__content--center  align__items--center intro-image-wrapper ">
        <img src={MySelf} alt="intro" className="b-radius--25 intro-image" />
      </div>
      <div className="intro-content">
        <p className="intro-title font-size--48 mt--30 font-weight--600 ">
          Sanjay Upadhyaya
        </p>
        <div className="intro-desc-wrapper">
          <div
            onMouseEnter={() => cursorChangeHandler('hovered')}
            onMouseLeave={() => cursorChangeHandler('')}
          >
            <p className="intro-description font-size--20">
              Greetings! 👋 I'm a devoted Flutter enthusiast, specializing in crafting seamless mobile experiences that captivate users. 📱 With a keen passion for both coding and design, I possess the unique ability to turn concepts into visually stunning and user-friendly apps.
            </p>
            <p className="intro-description font-size--20">
              🚀 Constantly hungry for knowledge, I ensure that I stay abreast of the latest tech trends to maintain an innovative edge in the dynamic world of mobile development. 💻🌟

            </p>
            <p className="intro-description font-size--20">
              I'm always on the lookout for connections within the #FlutterDev community, eager to explore the limitless possibilities that Flutter has to offer
            </p>
            <p className="intro-description font-size--20">
              Join me in this journey, where we can collaborate, share insights, and collectively discover the magic of mobile app development! 💫🔧 Let's connect and unleash the potential of Flutter together! #MobileAppMagic
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
