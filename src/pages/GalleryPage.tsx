import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './GalleryPage.css';

interface Screenshot {
  id: string;
  title: string;
  image: string;
  description: string;
}

interface Category {
  id: string;
  title: string;
  description: string;
  screenshots: Screenshot[];
}

const GalleryPage: React.FC = () => {
  const categories: Category[] = [
    {
      id: 'exploring',
      title: 'Exploring Characters',
      description: 'Understanding psychology, memory, and relationships',
      screenshots: [
        { id: 'character', title: 'Character Panel', image: '/images/CharacterPanelDetail.png', description: 'Deep dive into character psychology and state - explore drives, goals, and current emotional state' },
        { id: 'core', title: 'Core State', image: '/images/CharacterExplorerCoreTab.png', description: 'The foundational drives and motivations that shape character behavior and decision-making' },
        { id: 'memory', title: 'Memory System', image: '/images/CharacterExplorerMemoryTab.png', description: 'How characters learn and remember - both concrete events and abstract patterns of experience' },
        { id: 'social', title: 'Social Dynamics', image: '/images/CharacterExplorerSocialTab.png', description: 'Relationship modeling and interaction patterns - how characters perceive and relate to each other' },
        { id: 'signals', title: 'Drive Signals', image: '/images/CharacterExplorerSignalsTab.png', description: 'Real-time motivation and decision making - the dynamic signals that drive character actions' }
      ]
    },
    {
      id: 'directing',
      title: 'Directing Performances',
      description: 'Taking control and guiding narratives',
      screenshots: [
        { id: 'landing', title: 'Main Interface', image: '/images/WebworldMain.png', description: 'The central hub where all character interactions begin - your command center for managing performances' },
        { id: 'director', title: 'Director\'s Chair', image: '/images/DirectorsChairComposite.png', description: 'Direct control and character interaction interface - guide decisions, set goals, or observe autonomous behavior' }
      ]
    },
    {
      id: 'worldbuilding',
      title: 'World Building',
      description: 'Environment and setting tools',
      screenshots: [
        { id: 'world', title: 'Dynamic World', image: '/images/Webworld_main_screen.png', description: 'The living environment characters inhabit - a dynamic world that responds to and influences character behavior' }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState(0);
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  const currentCategory = categories[activeCategory];
  const currentScreenshot = currentCategory.screenshots[activeScreenshot];

  const handlePrevious = () => {
    if (activeScreenshot > 0) {
      setActiveScreenshot(activeScreenshot - 1);
    } else if (activeCategory > 0) {
      const prevCategory = categories[activeCategory - 1];
      setActiveCategory(activeCategory - 1);
      setActiveScreenshot(prevCategory.screenshots.length - 1);
    }
  };

  const handleNext = () => {
    if (activeScreenshot < currentCategory.screenshots.length - 1) {
      setActiveScreenshot(activeScreenshot + 1);
    } else if (activeCategory < categories.length - 1) {
      setActiveCategory(activeCategory + 1);
      setActiveScreenshot(0);
    }
  };

  const handleCategoryChange = (categoryIndex: number) => {
    setActiveCategory(categoryIndex);
    setActiveScreenshot(0);
  };

  const handleScreenshotChange = (screenshotIndex: number) => {
    setActiveScreenshot(screenshotIndex);
  };

  const isFirstItem = activeCategory === 0 && activeScreenshot === 0;
  const isLastItem = activeCategory === categories.length - 1 && 
                    activeScreenshot === currentCategory.screenshots.length - 1;

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1>ImprovAI Gallery</h1>
        <p>Explore the interface and capabilities in detail</p>
      </div>

      <div className="gallery-content">
        {/* Category Tabs */}
        <div className="category-tabs">
          {categories.map((category, index) => (
            <button
              key={category.id}
              className={`category-tab ${index === activeCategory ? 'active' : ''}`}
              onClick={() => handleCategoryChange(index)}
            >
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </button>
          ))}
        </div>

        {/* Screenshot Navigation */}
        <div className="screenshot-navigation">
          <div className="nav-header">
            <div className="nav-info">
              <h2>{currentCategory.title}</h2>
              <div className="screenshot-tabs">
                {currentCategory.screenshots.map((screenshot, index) => (
                  <button
                    key={screenshot.id}
                    className={`screenshot-tab ${index === activeScreenshot ? 'active' : ''}`}
                    onClick={() => handleScreenshotChange(index)}
                  >
                    {screenshot.title}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="nav-controls">
              <button 
                className="nav-arrow" 
                onClick={handlePrevious}
                disabled={isFirstItem}
              >
                <ChevronLeft size={24} />
              </button>
              <span className="nav-counter">
                {activeScreenshot + 1} of {currentCategory.screenshots.length}
              </span>
              <button 
                className="nav-arrow" 
                onClick={handleNext}
                disabled={isLastItem}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Main Screenshot Display */}
        <div className="screenshot-display">
          <div className="screenshot-container">
            <img 
              src={currentScreenshot.image} 
              alt={currentScreenshot.title}
              className="screenshot-image"
            />
          </div>
          
          <div className="screenshot-details">
            <h3>{currentScreenshot.title}</h3>
            <p>{currentScreenshot.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage; 