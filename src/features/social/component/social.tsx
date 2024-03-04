import { useContext } from 'react';
import { MouseContext } from '../../../shared/context/mouse-context';
import SocialImage from '../../../assets/images/socialImage.png';
import behanceImage from '../../../assets/images/socials/behance.png';
import codePenImage from '../../../assets/images/socials/codepen.png';
import devImage from '../../../assets/images/socials/dev.png';
import dribbleImage from '../../../assets/images/socials/dribble.png';
import github from '../../../assets/images/socials/github.png';
import linkedInImage from '../../../assets/images/socials/linkedIn.png';
import mediumImage from '../../../assets/images/socials/medium.png';
import stakeOverflowImage from '../../../assets/images/socials/stakeOverflow.png';
import twitterImage from '../../../assets/images/socials/twitter.png';

const Social = () => {
  const { cursorChangeHandler } = useContext(MouseContext);

  return (
    <div className="social-box b-radius--25 flex">
      <div className="flex justify__content--center  intro-image-wrapper">
        <img src={SocialImage} alt="social" className="intro-image" />
      </div>
      <div className="intro-content">
        <p className="intro-title mt--30 font-size--48 font-weight--600">
          Social
        </p>
        <div
          onMouseEnter={() => cursorChangeHandler('hovered')}
          onMouseLeave={() => cursorChangeHandler('')}
        >
          <div className="flex flex--wrap mt--30 gap-10 mb--30 align__items--center social-icons-container">
            <div className="mt--10">
              <a
                href="https://github.com/sanjay123-321"
                target="_blank"
                rel="noreferrer"
              >
                <button className="font-size--18 flex align__items--center p--10 b-radius--25 social-link--btn ">
                  Github
                  <img src={github} alt="github" className="pl--10" />
                </button>
              </a>
            </div>
            <div className="mt--10">
              <a
                href="https://www.linkedin.com/in/sanjay-upadhyaya-2a1169175/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="font-size--18 flex align__items--center p--10 b-radius--25 social-link--btn ">
                  LinkedIn
                  <img src={linkedInImage} alt="LinkedIn" className="pl--10" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
