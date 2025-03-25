import React, { useEffect, useRef } from 'react';
import './LocationCard.css';

interface LocationCardProps {
  imageUrl: string;
  locationName: string;
  propertyName: string;
  exploreLink: string;
  cardKey: string;
  isActive: boolean;
}

const LocationCard: React.FC<LocationCardProps> = ({
  imageUrl,
  locationName,
  propertyName,
  exploreLink,
  isActive,
}) => {
  const locationRef = useRef<HTMLHeadingElement>(null);
  const propertyRef = useRef<HTMLParagraphElement>(null);
  const exploreRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isActive) {
      [locationRef, propertyRef, exploreRef].forEach((ref) => {
        if (ref.current) {
          ref.current.classList.remove('flip-animate'); // Remove any existing animation
          void ref.current.offsetWidth; // Force reflow
          ref.current.classList.add('flip-animate'); // Re-trigger animation
        }
      });
    }
  }, [isActive]);
  
  return (
    <div className="location-card">
      <img src={imageUrl} alt={propertyName} className="location-image" />
      <div className="overlay">
        <h2 className="location-name" ref={locationRef}>
          {locationName}
        </h2>
        <p className="property-name" ref={propertyRef}>
          {propertyName}
        </p>
        <a href={exploreLink} className="explore-btn" ref={exploreRef}>
          Explore
        </a>
      </div>
    </div>
  );  
};

export default LocationCard;
