import "./profileSpecialization.css";
import women from "../../../../assets/profile/Women 1.svg";
import skincare from "../../../../assets/profile/Skincare 1.svg";
import immunity from "../../../../assets/profile/Immunity 1.svg";
import hairCare from "../../../../assets/profile/Hair 1.svg";
const ProfileSpecialization = () => {
  return (
    <div className="specialization-section">
      <span className="section-header">I Specialize In</span>
      <span className="section-content">
        <div className="specializations-container">
          <div className="specialization-icon-container">
            <div className="specialization-icon">
              <img src={women} alt="women's health" />
            </div>
            Women's Health
          </div>
          <div className="specialization-icon-container">
            <div className="specialization-icon">
              <img src={skincare} alt="skincare" />
            </div>
            Skin Care
          </div>
          <div className="specialization-icon-container">
            <div className="specialization-icon">
              <img src={immunity} alt="immunity" />
            </div>
            Immunity
          </div>
          <div className="specialization-icon-container">
            <div className="specialization-icon">
              <img src={hairCare} alt="hair care" />
            </div>
            Hair Care
          </div>
        </div>
      </span>
    </div>
  );
};

export default ProfileSpecialization;
