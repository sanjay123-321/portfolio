import React, { useContext } from 'react';
import ProfileImage from '../../../assets/images/Profile.png';
import { RightArrow } from '../../../shared/icons/icons';
import '../header.scss';
import { MouseContext } from '../../../shared/context/mouse-context';
const Header = () => {
  const { cursorChangeHandler } = useContext(MouseContext);

  return (
    <div className="width--full flex justify__content--between align__items--center">
      <div className="profile-image-wrapper  position--relative">
        <img src={ProfileImage} alt="profile" className="width--100-px" />
      </div>
      <div className="connect-btn-wrapper"
        onMouseEnter={() => cursorChangeHandler('hovered')}
        onMouseLeave={() => cursorChangeHandler('')}>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sanjayup21@gmail.com" target='_blank' rel="noopener noreferrer">
          <button className="flex font-weight--600 align__items--center p--10 mr--20 connect-btn">
            Let's connect
            <RightArrow />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Header;
