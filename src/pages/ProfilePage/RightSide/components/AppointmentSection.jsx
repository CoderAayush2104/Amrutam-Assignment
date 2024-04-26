import React, { useEffect, useState } from "react";
import "./appointmentSection.css";
import calendar from "../../../../assets/profile/calendar.svg";
import tick from "../../../../assets/profile/tick.svg";
import Carousel from "./Carousel";
const AppointmentSection = () => {
  const [selectedSession, setSelectedSession] = useState(null);

  const selectSession = (event, session) => {
    setSelectedSession(session);
  };


  

  useEffect(() => {
    const slots = document.querySelectorAll(".slot");

  slots.forEach((slot) => {
    slot.addEventListener("click", (event) => {
      slots.forEach((s) => {
        s.classList.remove("selected");
      });
      event.target.classList?.add("selected");
    });
  });
  }, []);
  
  return (
    <div className="appointment-section">
      <span className="appointment-fee-container">
        Appointment-Fee
        <span className="appointment-fee">&#8377;699.00</span>
      </span>
      <div className="session-container">
        <span className="sessions-heading">
          Select your mode of session
          <hr />
        </span>
        <div className="session-cards-container">
          <span
            className={`session-card ${
              selectedSession === "In-Clinic" ? "selected" : ""
            }`}
            onClick={(event) => selectSession(event, "In-Clinic")}
          >
            <span className="session-title">
              In-Clinic{" "}
              <img
                src={tick}
                className="tick-icon"
                alt="tick"
                style={{
                  display: selectedSession === "In-Clinic" ? "block" : "none",
                }}
              />
            </span>
            <span className="session-time">45 Mins</span>
          </span>
          <span
            className={`session-card ${
              selectedSession === "Video" ? "selected" : ""
            }`}
            onClick={(event) => selectSession(event, "Video")}
          >
            <span className="session-title">
              Video{" "}
              <img
                src={tick}
                className="tick-icon"
                alt="tick"
                style={{
                  display: selectedSession === "Video" ? "block" : "none",
                }}
              />
            </span>
            <span className="session-time">45 Mins</span>
          </span>
          <span
            className={`session-card ${
              selectedSession === "Chat" ? "selected" : ""
            }`}
            onClick={(event) => selectSession(event, "Chat")}
          >
            <span className="session-title">
              Chat{" "}
              <img
                src={tick}
                className="tick-icon"
                alt="tick"
                style={{
                  display: selectedSession === "Chat" ? "block" : "none",
                }}
              />
            </span>
            <span className="session-time">45 Mins</span>
          </span>
        </div>
      </div>
      <div className="time-slot-container">
        <span className="sessions-heading">
          Pick a time slot
          <hr />
          <img src={calendar} />
        </span>
        <div className="carousel-container">

        <Carousel/>
        </div>
        <div className="timing-container">
          <span className="timing">Morning</span>
          <div className="slots-container">
            <span className="slot">09:00 AM</span>
            <span className="slot">09:30 AM</span>
            <span className="slot">10:00 AM</span>
            <span className="slot">10:15 AM</span>
            <span className="slot">10:45 AM</span>
            <span className="slot">11:00 AM</span>
          </div>
        </div>
        <div className="timing-container">
          <span className="timing">Evening</span>
          <div className="slots-container">
            <span className="slot">04:00 PM</span>
            <span className="slot">04:15 PM</span>
            <span className="slot">04:30 PM</span>
            <span className="slot">04:45 PM</span>
            <span className="slot">05:15 PM</span>
          </div>
        </div>
      </div>

      <button className="make-appointment-button">Make An Appointment</button>
    </div>
  );
};

export default AppointmentSection;
