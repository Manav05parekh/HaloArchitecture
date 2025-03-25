import React, { useState } from 'react';
import LocationCard from './LocationCard';
import './LocationsSlider.css';
import Image1Img from '../assets/Desktop - 2 (1).png';
import Image2Img from '../assets/Desktop - 2 (2).png';
import Image3Img from '../assets/Desktop - 2 (4).png';

const locations = [
  {
    imageUrl: Image1Img,
    locationName: 'Prabhadevi',
    propertyName: '25 South',
    exploreLink: '/location/25-south',
  },
  {
    imageUrl: Image2Img,
    locationName: 'Bandra West',
    propertyName: '25 West',
    exploreLink: '/location/25-west',
  },
  {
    imageUrl: Image3Img,
    locationName: 'Mahalakshmi',
    propertyName: '25 Downtown',
    exploreLink: '/location/25-downtown',
  },
];

const LocationsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? locations.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === locations.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="locations-slider">
      <button className="nav-button left" onClick={handlePrev}>
        {'<'}
      </button>
      <div className="slider-window">
      <div
  className="slider-track"
  style={{
    transform: `translateX(-${currentIndex * 100}%)`,
  }}
>         {locations.map((loc, index) => (
            <LocationCard
              key={index}
              cardKey={`card-${index}`}
              imageUrl={loc.imageUrl}
              locationName={loc.locationName}
              propertyName={loc.propertyName}
              exploreLink={loc.exploreLink}
              isActive={index === currentIndex}
            />
          ))}
        </div>
      </div>
      <button className="nav-button right" onClick={handleNext}>
        {'>'}
      </button>
    </div>
  );
};

export default LocationsSlider;
