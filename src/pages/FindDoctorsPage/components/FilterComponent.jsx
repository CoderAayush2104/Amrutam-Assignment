import { useState } from 'react';
import "./filterComponent.css"
import Dropdown from './Dropdown';
const FilterComponent = () => {
  const [filters, setFilters] = useState({
    expertise: [],
    gender: [],
    fees: [],
    language: [],
    filterOptions:['all']
  });
  
  const expertiseOptions = [
    { label: 'Beginner', value: 'beginner' },
    { label: 'Intermediate', value: 'intermediate' },
    { label: 'Advanced', value: 'advanced' }
  ];

  const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Others', value: 'others' }
  ];

  const feesOptions = [
    { label: '0 - 500', value: '0-500' },
    { label: '500 - 1000', value: '500-1000' },
    { label: '1000 - 2000', value: '1000-2000' },
    { label: '2000+', value: '2000+' }
  ];

  const languageOptions = [
    { label: 'English', value: 'english' },
    { label: 'Hindi', value: 'hindi' }
  ];

  const allFiltersOptions = [
    { label: 'All Filters', value: 'all' },
    { label: 'Expertise', value: 'expertise' },
    { label: 'Gender', value: 'gender' },
    { label: 'Fees', value: 'fees' },
    { label: 'Language', value: 'language' }
  ];


  const [selectedFilters, setSelectedFilters] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterChange = (filter, values) => {
    setFilters({ ...filters, [filter]: values });
  };

  const handleRemoveFilter = (filter) => {
    setFilters({ ...filters, [filter]: [] });
    setSelectedFilters(selectedFilters.filter(item => item.filter !== filter));
  };

  const handleFilterSelection = (selectedFilters) => {
    setActiveFilter(selectedFilters);
  };

  const handleOptionSelect = (filter, option) => {
    console.log("Selected filter:", filter);
    console.log("Selected option:", option);
    if (filter === 'filterOptions') {
   
        setActiveFilter(option);
      
    } else {
      setSelectedFilters(prev => {
        const index = prev.findIndex(item => item.filter === filter);
        if (index !== -1) {
          return [
            ...prev.slice(0, index),
            { filter, option },
            ...prev.slice(index + 1)
          ];
        } else {
          return [...prev, { filter, option }];
        }
      });
    }
    console.log("Active filters:", activeFilter);
    console.log("Selected filters:", selectedFilters);
  };
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    
    setDropdownOpen(!isDropdownOpen);
  };


  const visibleOptions = activeFilter=='all'
  ? selectedFilters
  : selectedFilters.filter(item =>item.filter == activeFilter);

  
  return (
    <div>
    
      <div className='dropdowns-container'>

      <Dropdown title="Expertise" options={expertiseOptions} handleOptionSelect={(value) => handleOptionSelect('expertise', value)} />
      <Dropdown title="Gender" options={genderOptions} handleOptionSelect={(value) => handleOptionSelect('gender', value)} />
      <Dropdown title="Fees" options={feesOptions} handleOptionSelect={(value) => handleOptionSelect('fees', value)} />
      <Dropdown title="Language" options={languageOptions} handleOptionSelect={(value) => handleOptionSelect('language', value)} />
      <Dropdown title="Active Filters" options={allFiltersOptions} handleOptionSelect={(value) => handleOptionSelect('filterOptions', value)} />

      </div>
      <div className='selected-options-container'>
        {visibleOptions.map(({ filter, option }) => (
          <div key={`${filter}-${option}`} className="selected-filter-option">
            {option} <button onClick={() => handleRemoveFilter(filter)}>&times;</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
