import React, { useState } from 'react';
import './carousel.css'; // Import your CSS file for styling
import prevArrow from "../../../../assets/profile/prev-arrow.svg"
import nextArrow from "../../../../assets/profile/next-arrow.svg"
const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 6; // Total number of slides
    const slidesPerPage = 3; // Number of slides to show at a time
    const [selectedSlide, setSelectedSlide] = useState(null); // State to track selected slide
    const slidesData = [
        {  
          id : 1,
          date: "Mon, 10 Oct",
          slots: "10"
        },
        {
            id : 2,
          date: "Tue, 11 Oct",
          slots: "02"
        },
        {
            id : 3,
          date: "Wed, 12 Oct",
          slots: "05"
        },
        {
            id : 4,
          date: "Thu, 13 Oct",
          slots: "03"
        },
        {
            id : 5,
          date: "Fri, 14 Oct",
          slots: "01"
        },
        {
            id : 6,
          date: "Sat, 15 Oct",
          slots: "03"
        }
      ]
      
  
    
    const nextSlide = () => {
      setCurrentSlide((currentSlide + 1) % totalSlides);
      setSelectedSlide(null);
    };
  
    const prevSlide = () => {
      setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
      setSelectedSlide(null);
    };
    const selectSlide = (slideIndex) => {
        setSelectedSlide(slideIndex);
      };
    return (
      <div className="carousel">
        <button onClick={prevSlide} disabled={currentSlide === 0}><img src={prevArrow}/></button>
        <div className="carousel-content" >
          {slidesData.slice(currentSlide, currentSlide + 3).map(slide => (
            <div key={slide.id} className={`slide ${selectedSlide === slide.id ? 'selected' : ''} fade-and-scale`} onClick={() => selectSlide(slide.id)}>
              <span className="slide-date">{slide.date}</span>
              <span className="slide-slots">{slide.slots} slots</span>
            </div>
          ))}
        </div>
        <button onClick={nextSlide} disabled={currentSlide + slidesPerPage >= totalSlides}><img src={nextArrow}/></button>
      </div>
    );
  }
  
  export default Carousel;