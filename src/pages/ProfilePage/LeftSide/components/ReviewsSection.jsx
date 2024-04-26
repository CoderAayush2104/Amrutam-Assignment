import "./reviewsSection.css";
import star from "../../../../assets/profile/star.svg";
import profileImage from "../../../../assets/profile/review-profile-image.png"
const ReviewsSection = () => {
  return (
    <div className="reviews-section">
      <span className="section-header">Featured Reviews (102)</span>
      <span className="section-content">
        <div className="review">
          <div className="review-header">
            <div className="review-image-container">
                <img src={profileImage} alt="profile-image"/>
            </div>
            <span className="review-profile-info">
                <span className="reviewer-name">Alicent Hightower</span>
                <span className="reviewer-concern">Consulted for Skincare</span>
            </span>
            <span className="review-date">20 January 2023</span>
          </div>
          <div className="review-ratings">
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
          </div>
          <div className="review-content">
            Might be bit early to confirm but yes I can see noticeable
            difference in my hairfall. will write again after using it for
            longer periods
          </div>
        </div>
        <div className="review">
          <div className="review-header">
            <div className="review-image-container">
                <img src={profileImage} alt="profile-image"/>
            </div>
            <span className="review-profile-info">
                <span className="reviewer-name">Alicent Hightower</span>
                <span className="reviewer-concern">Consulted for Pregnancy</span>
            </span>
            <span className="review-date">20 January 2023</span>
          </div>
          <div className="review-ratings">
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
          </div>
          <div className="review-content">
            Might be bit early to confirm but yes I can see noticeable
            difference in my hairfall. will write again after using it for
            longer periods
          </div>
        </div>
      </span>
    </div>
  );
};

export default ReviewsSection;
