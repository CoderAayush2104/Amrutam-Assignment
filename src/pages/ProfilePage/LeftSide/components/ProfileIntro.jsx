import { useState } from "react";
import "./profileIntro.css"
import facebook from "../../../../assets/profile/facebook.svg";
import instagram from "../../../../assets/profile/instagram.svg";
import youtube from "../../../../assets/profile/youtube.svg";
import twitter from "../../../../assets/profile/twitter.svg";
const ProfileIntro = () => {
    const [showMore, setShowMore] = useState(false);

    const handleToggle = () => {
      setShowMore(!showMore);
    };
  
  return (
    <div className="about-section">
    <span className="section-header">
      A Little About Me{" "}
      <button className="follow-button">
        Follow &nbsp; <span className="plus-sign">&#x2b;</span>
      </button>
    </span>
    <div className="section-content">
      <div className="intro-container">
        <div className="intro">
          Hello, I am Dr. Bruce Willis, a Gynecologist at Sanjivni
          Hospital in Surat. I love collaborating with my hospital staff
          and senior doctors to provide the best possible care for our
          patients. I completed my graduation in Gynecology Medicine
          from the University of Mumbai, specializing in obstetrics and
          gynecology.
          {showMore ? (
            <>
              I am dedicated to offering compassionate care to women at
              all stages of their lives, from adolescence to menopause
              and beyond. Staying abreast of the latest advancements in
              my field is a priority for me, as it ensures that my
              patients receive the highest quality of care and treatment
              options available. My goal is to empower women with
              knowledge about their health and provide them with
              personalized care tailored to their individual needs.
            </>
          ) : (
            <span id="dots">...</span>
          )}
          <div className="read-more-button-container">
            <hr className="intro-rule" />

            {!showMore && (
              <button
                className="read-more"
                onClick={handleToggle}
                id="myBtn"
              >
                Read more
              </button>
            )}
            {showMore && (
              <button
                className="read-more"
                onClick={handleToggle}
                id="myBtn"
              >
                Show less
              </button>
            )}
          </div>
        </div>
      </div>

      <span className="languages-container">
        Languages Spoken
        <span className="language">English</span>
        <span className="language">Hindi</span>
        <span className="language">Telugu</span>
      </span>
      <span className="socials-container">
        <span className="socials-icon-container">
          <img src={facebook} />
        </span>
        <span className="socials-icon-container">
          <img src={instagram} />
        </span>
        <span className="socials-icon-container">
          <img src={youtube} />
        </span>
        <span className="socials-icon-container">
          <img src={twitter} />
        </span>
      </span>
    </div>
  </div>
  )
}

export default ProfileIntro