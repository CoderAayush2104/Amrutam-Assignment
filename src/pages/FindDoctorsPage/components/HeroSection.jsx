import React from 'react'
import "./heroSection.css"
import Dropdown from './Dropdown'
const HeroSection = () => {
 
  const locations = [
    { label: 'Delhi', value: 'Delhi' },
    { label: 'Mumbai', value: 'Mumbai' },
    { label: 'Vadodara', value: 'Vadodara' },
    { label: 'Ahemdabad', value: 'Ahemdabad' },
    { label: 'Kolkata', value: 'Kolkata' },
    {label : 'Bangalore' , value : 'Bangalore'}
  ];
  return (
    <div className="hero-section-container">

        <span className="hero-section-title">Find Expert Doctors for an In-clinic session here</span>
        <div className="hero-section-search-container">
        <Dropdown title = "Select Location" options={locations}/>
        <input className='hero-section-input' value={"eg. Doctor,specialisation,clinic name"}></input>
        </div>
    </div>
  )
}

export default HeroSection