import { useState } from "react";
import "./dropdown.css";
import downArrow from "../../../assets/profile/down-arrow.svg";
import location from "../../../assets/location.svg"
const Dropdown = ({ title, options, handleOptionSelect }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="dropdown">
      <div className={`dropdown-toggle  ${isDropdownOpen ? 'open' : ''}  ${title == "Select Location" ? "select-location-dropdown" : ""}`} onClick={toggleDropdown}>
        {title == "Select Location" ? <img src={location}/> : <></>}{title} <img src={downArrow} />
      </div>
      {isDropdownOpen  && (
        <div className={` ${title == "Select Location" ? "select-location-dropdown-content" : ""} dropdown-content `}>
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-option"
              onClick={() => handleOptionSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
