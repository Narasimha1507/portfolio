import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Import your icons
import cppIcon from "../assets/img/cplusplus-original.svg";
import htmlIcon from "../assets/img/html5-plain-wordmark.svg";
import cssIcon from "../assets/img/css3-plain-wordmark.svg";
import javaIcon from "../assets/img/java-original-wordmark.svg";
import jsIcon from "../assets/img/jsIcon.png";
import linuxIcon from "../assets/img/linux-original.svg";
import cIcon from "../assets/img/c-original.svg";
import netlifyIcon from "../assets/img/netlify-original-wordmark.svg";
import mysqlIcon from "../assets/img/mysql-original-wordmark.svg";
import reactjsIcon from "../assets/img/react-original-wordmark.svg";
import firebaseIcon from "../assets/img/firebase-original-wordmark.svg";
import mongodbIcon from "../assets/img/mongodb-original-wordmark.svg";
import githubIcon from "../assets/img/githubIcon.png";
import nodejsIcon from "../assets/img/nodejs-plain-wordmark.svg";
import postmanIcon from "../assets/img/postman-original-wordmark.svg";

// Background image
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  // Carousel responsiveness
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                A blend of technical expertise in web development, software engineering, 
                cloud technologies, and cybersecurity. Proficient in building scalable 
                applications and managing end-to-end software solutions. Always striving 
                to enhance my knowledge with hands-on projects, certifications, and 
                emerging technologies.
              </p>
              <Carousel                 
              responsive={responsive} 
                infinite={true}
                arrows={true}         
                autoPlay={true}        
                autoPlaySpeed={1500}    
                className="owl-carousel owl-theme skill-slider"
              >
                {/* 1. HTML */}
                <div className="item">
                  <div className="icon-container">
                    <img src={htmlIcon} alt="HTML" />
                  </div>
                </div>

                {/* 2. C */}
                <div className="item">
                  <div className="icon-container">
                    <img src={cIcon} alt="C" />
                  </div>
                </div>

                {/* 3. C++ */}
                <div className="item">
                  <div className="icon-container">
                    <img src={cppIcon} alt="C++" />
                  </div>
                </div>

                {/* 4. CSS */}
                <div className="item">
                  <div className="icon-container">
                    <img src={cssIcon} alt="CSS" />
                  </div>
                </div>

                {/* 5. Java */}
                <div className="item">
                  <div className="icon-container">
                    <img src={javaIcon} alt="JAVA" />
                  </div>
                </div>

                {/* 6. React.js */}
                <div className="item">
                  <div className="icon-container">
                    <img src={reactjsIcon} alt="React.js" />
                  </div>
                </div>

                {/* 7. JavaScript */}
                <div className="item">
                  <div className="icon-container">
                    <img src={jsIcon} alt="JavaScript"/>
                  </div>
                </div>

                {/* 8. Firebase */}
                <div className="item">
                  <div className="icon-container">
                    <img src={firebaseIcon} alt="firebaseIcon" />
                  </div>
                </div>

                {/* 9. GitHub */}
                <div className="item">
                  <div className="icon-container">
                    <img src={githubIcon} alt="githubIcon" />
                  </div>
                </div>

                {/* 10. Linux */}
                <div className="item">
                  <div className="icon-container">
                    <img src={linuxIcon} alt="linuxIcon" />
                  </div>
                </div>

                {/* 11. MongoDB */}
                <div className="item">
                  <div className="icon-container">
                    <img src={mongodbIcon} alt="mongodbIcon" />
                  </div>
                </div>

                {/* 12. MySQL */}
                <div className="item">
                  <div className="icon-container">
                    <img src={mysqlIcon} alt="mysqlIcon" />
                  </div>
                </div>

                {/* 13. Netlify */}
                <div className="item">
                  <div className="icon-container">
                    <img src={netlifyIcon} alt="netlifyIcon" />
                  </div>
                </div>

                {/* 14. Node.js */}
                <div className="item">
                  <div className="icon-container">
                    <img src={nodejsIcon} alt="nodejsIcon" />
                  </div>
                </div>

                {/* 15. Postman */}
                <div className="item">
                  <div className="icon-container">
                    <img src={postmanIcon} alt="postmanIcon" />
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img 
        className="background-image-left" 
        src={colorSharp} 
        alt="background-shape" 
      />
    </section>
  );
};
