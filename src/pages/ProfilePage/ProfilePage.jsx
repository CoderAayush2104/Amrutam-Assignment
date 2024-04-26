
import "./profilePage.css";
import ProfileHeader from "./LeftSide/components/ProfileHeader";
import ProfileIntro from "./LeftSide/components/ProfileIntro";
import ProfileSpecialization from "./LeftSide/components/ProfileSpecialization";
import ConcernSection from "./LeftSide/components/ConcernSection";
import ExperienceSection from "./LeftSide/components/ExperienceSection";
import ReviewsSection from "./LeftSide/components/ReviewsSection";
import AppointmentSection from "./RightSide/components/AppointmentSection";
import ScrollToTop from "../../components/ScrollToTop";
import { useEffect } from "react";
const ProfilePage = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  }, []);
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
    <div className="profile-page">
   
      <ProfileHeader />
      <div className="profile-content">
        <div className="profile-content-left">
          <ProfileIntro/>
          <div className="reveal">

          <ProfileSpecialization/>
          </div>
          <div className="reveal">

          <ConcernSection/>
          </div>
          <div className="reveal">

          <ExperienceSection/>
          </div>
          <div className="reveal">

          <ReviewsSection/>
          </div>
        </div>
        <div className="profile-content-right">
          <AppointmentSection/>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
