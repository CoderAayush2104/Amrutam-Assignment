import React from 'react'
import HeroSection from './components/HeroSection'
import ProfileCard from './components/ProfileCard'
import "./findDoctorsPage.css"
import FilterComponent from './components/FilterComponent';
import { useEffect } from 'react';
const FindDoctorsPage = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
    <HeroSection/>
    <FilterComponent/>
  
    <div className="profile-card-container">
        <ProfileCard/>
        <ProfileCard/>
        <ProfileCard/>
    </div>
    
   
    </>
  )
}

export default FindDoctorsPage