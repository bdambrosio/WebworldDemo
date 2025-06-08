import React from 'react';
import WebWorldPresentation from '../components/WebWorldPresentation';

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <WebWorldPresentation showHeader={false} />
    </div>
  );
};

export default HomePage; 