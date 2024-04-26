
import "./profileHeader.css";
import profile from "../../../../assets/profile/profile-image.png";
import verified from "../../../../assets/profile/verified.svg";
import star from "../../../../assets/profile/star.svg";

const ProfileHeader = () => {
  return (
    <div className="profile-page-header">
      <div className="profile-header-info">
        <div className="profile-image-container">
          <img className="profile-image"src={profile} alt="profile" />
        </div>
        <div className="profile-info">
          <span className="profile-name">
            Dr. Bruce Willis <img src={verified} />
          </span>
          <span className="profile-role">Gynecologist</span>
          <span className="profile-ratings">
            4.2 <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
          </span>
        </div>
        <div className="profile-reach">
            <span className="followers">Followers
            <span className="followers-count">850</span></span>
            <span className="following">Following
            <span className="following-count">18K</span></span>
            <span className="posts">Posts
            <span className="posts-count">250</span></span>
        </div>
        <button className="booking-appointment-button">Book An Appointment</button>
      </div>
    </div>
  );
};

export default ProfileHeader;
