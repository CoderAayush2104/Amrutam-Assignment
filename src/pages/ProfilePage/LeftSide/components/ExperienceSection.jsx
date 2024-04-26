
import "./experienceSection.css";
import home from "../../../../assets/profile/home.svg";
const ExperienceSection = () => {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);
  return (
    <div className="experience-section">
      <span className="section-header">My Work Experience</span>
      <span className="section-content">
        <span className="experienc-intro">
          I have been in practice for : 7+ Years
        </span>
        <hr className="experience-rule" />
        <div className="experiences">
          <div className="experience-row">
            <span className="experience-icon-container">
              <img src={home} />
            </span>
            <span className="experience-details">
              <span className="experience-place">Midtown Medical Clinic</span>
              <span className="experience-position">Senior doctor</span>
            </span>
            <span className="experience-period">2016-PRESENT</span>
          </div>
          <div className="experience-row">
            <span className="experience-icon-container">
              <img src={home} />
            </span>
            <span className="experience-details">
              <span className="experience-place">Midtown Medical Clinic</span>
              <span className="experience-position">Senior doctor</span>
            </span>
            <span className="experience-period">2010-2015</span>
          </div>
        </div>
      </span>
    </div>
  );
};

export default ExperienceSection;
