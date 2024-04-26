import { Link } from "react-router-dom"
import "./profileCard.css"
import medicine from "../../../assets/card/medicine.svg"
import hat from "../../../assets/card/hat.svg"
import message from "../../../assets/card/message.svg"
import profile from "../../../assets/card/profile.png"
const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-card-image-container">
        <img src={profile} alt="profile" className="profile-card-image" />
        <div className='profile-card-rating'>4.5 &nbsp;<span className='star'>&#9733;</span></div>
      </div>
        <div className="profile-card-details">
          <span className="profile-card-name">Dr. Prerna Narang</span>
          <div className="profile-card-info">
            <span className="card-info-line"><img src={medicine}/> Male-Female Infertility</span>
            <span className="card-info-line"><img src={hat}/> 7 Years of Experience</span>
            <span className="card-info-line"><img src={message}/> Speaks : English,Hindi,Marathi </span>
          </div>
          <div className="fees-container">
            <span className='fees'>
              <span className='fees-title'>Video Consultation</span>
              <span className='fees-amount'>&#8377;800</span>
            </span>
            <span className='fees'>
              <span className='fees-title'>Chat Consultation</span>
              <span className='fees-amount'>Free</span>
            </span>
          </div>
        </div>
        <div className="profile-card-button-container">
        <Link to="/profile" className="view-profile-link"><button className="view-profile-button">View Profile</button></Link>
        <button className="booking-button">Book a consultation</button>
        </div>
   
    </div>
  )
}

export default ProfileCard