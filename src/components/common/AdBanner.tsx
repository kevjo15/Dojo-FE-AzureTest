import React from 'react';
import adImage from '../../assets/Image.jpg';

const AdBanner: React.FC = () => {
  return (
    <div className="flex justify-center my-8">
      <img src={adImage} alt="Ad Banner" className="max-w-full sm:w-100 md:w-100 lg:w-3/4 h-auto" />
    </div>
  );
};

export default AdBanner;
