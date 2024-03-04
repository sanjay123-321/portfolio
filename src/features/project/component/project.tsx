import React, { useContext } from 'react'
import { MouseContext } from '../../../shared/context/mouse-context';
import ProjectAvatar from '../../../assets/images/project.png';

const Project = () => {
    const { cursorChangeHandler } = useContext(MouseContext);

    return (
        <div className="project-box  b-radius--25 flex align__items--center">
            <div className="intro-content">
                <p className="intro-title font-size--48 mt--30 font-weight--600 ">
                    Projects
                </p>
                <div className="intro-desc-wrapper">
                    <div
                        onMouseEnter={() => cursorChangeHandler('hovered')}
                        onMouseLeave={() => cursorChangeHandler('')}
                    >
                        <p className="intro-description font-size--20 flex flex--column">
                            SignLingo : Developed a Flutter application in collaboration with a team of three, SignLingo caters to the deaf and mute community. Leveraging Flutter, Dart, Figma, Firebase, and TensorFlow, the app offers features like login, signup, and password management. Users gain access to readable and visual resources for learning sign language, can take tests with scores saved in Firebase, and utilize real-time sign interpretation through TensorFlow. The app fosters a global community where users worldwide can comment and engage

                        </p>
                        <p className="intro-description font-size--20 flex flex--column">
                            Supp :  In the creation of a chat application, Supp utilized Flutter, Dart, and Firebase for a seamless user experience. The app includes signup and login features through an auth library, showcasing an attractive UI. Chats are managed using the cloud Firestore database, ensuring user-friendly interactions.

                        </p>
                        <p className="intro-description font-size--20 flex flex--column">
                            BBNews : Crafted a news application using Flutter, Dart, NewsAPI, and Android Studio, BBNews delivers news in diverse categories. Clicking on news items redirects users to dedicated pages with detailed information. The application boasts an engaging UI/UX to enhance the overall user experience.
                        </p>
                        <p className="intro-description font-size--20 flex flex--column">
                            Hostel Management : Designed a Hostel Management System using Flutter, Dart, and WordPress. The application implements RESTful services API for efficient data handling between the frontend and backend. The system includes interfaces for both administrators and users, streamlining hostel management processes.
                        </p>
                        <p className="intro-description font-size--20 flex flex--column">
                            Kalalay : Developed an E-Commerce Application, Prokruti, using Flutter, Dart, Firebase, and MySQL. The app features RESTful services API for seamless data transfer, allowing users to add items to wishlists and make purchases. Multiple payment methods are integrated, and the app is accessible through both seller and user side applications. Complete control is granted through an admin panel, Used bloc state management along with cubit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project