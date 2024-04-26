import { useState } from 'react';
import "./concernSection.css"
const ConcernSection = () => {

    const initialTags = [
        "Skin Treatment",
        "Pregnancy",
        "Period Doubts",
        "Endometriosis",
        "Pelvic Pain",
        "Ovarian Cysts"
      ];
    
      const [showMore, setShowMore] = useState(false);
      const [tags, setTags] = useState(initialTags);
      
      const additionalTags = [
        "Menstrual Disorders",
        "Polycystic Ovary Syndrome (PCOS)",
        "Uterine Fibroids",
        "Menopause Symptoms",
        "Infertility Treatments"
      ];
    
      const handleShowMoreClick = () => {
        setShowMore(!showMore);
        setTags(showMore ? initialTags : [...initialTags, ...additionalTags]);
      };

  return (
    <div className='concerns-section'>
      <span className="section-header">
        The Concerns I Threat
      </span>
      <span className='section-content'>
        <div className="tags-container">
        {tags.map((tag, index) => (
      <span key={index} className="tag">{tag}</span>
    ))}
    <span className="tag" onClick={handleShowMoreClick}>
      {showMore ? 'Show Less' : '+5 more'}
    </span>
        </div>
      
      </span>
  
  </div>
  )
}

export default ConcernSection;