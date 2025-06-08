import React, { useState } from 'react';
import { ExternalLink, Monitor } from 'lucide-react';
import './DemoPage.css';

const DemoPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'embedded' | 'fullscreen'>('embedded');
  const demoUrl = 'https://demo.tuuyi.com';

  const handleFullscreen = () => {
    window.open(demoUrl, '_blank');
  };

  return (
    <div className="demo-page">
      <div className="demo-header">
        <h1>ImprovAI Live Demo</h1>
        <p>Experience AI characters in action - explore the cognitive architecture, create dynamic scenarios, and watch authentic psychology unfold in real-time.</p>
        
        <div className="demo-controls">
          <button 
            className={`demo-control-btn ${viewMode === 'embedded' ? 'active' : ''}`}
            onClick={() => setViewMode('embedded')}
          >
            <Monitor size={20} />
            Embedded View
          </button>
          <button 
            className="demo-control-btn"
            onClick={handleFullscreen}
          >
            <ExternalLink size={20} />
            Open Full Demo
          </button>
        </div>
      </div>

      <div className="demo-content">
        {viewMode === 'embedded' ? (
          <div className="demo-embed-container">
            <iframe
              src={demoUrl}
              title="ImprovAI Demo"
              className="demo-iframe"
              allow="fullscreen"
              loading="lazy"
            />
            <div className="embed-overlay">
              <div className="embed-info">
                <h3>Interactive ImprovAI Demo</h3>
                <p>Click anywhere to start exploring</p>
                <button onClick={handleFullscreen} className="fullscreen-btn">
                  <ExternalLink size={16} />
                  Open in New Tab for Best Experience
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <div className="demo-features">
        <h2>What You Can Explore in These Replays</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Character Psychology</h3>
            <p>Watch characters with authentic psychology, drives, and memories as they navigate their world.</p>
          </div>
          <div className="feature-card">
            <h3>Social Dynamics</h3>
            <p>Observe relationships evolving naturally as characters remember interactions and develop impressions.</p>
          </div>
          <div className="feature-card">
            <h3>Character Insights</h3>
            <p>Click on a character name on the left to reveal character thoughts and motivations, use ExploreCharacter for an even deeper dive.</p>
          </div>
          <div className="feature-card">
            <h3>Living World</h3>
            <p>Experience a dynamic environment where characters perceive, move, and interact with their surroundings.</p>
          </div>
        </div>
      </div>

      <div className="demo-cta">
        <h2>Want to Create Performances Like These?</h2>
        <p>This replay showcases ImprovAI's character simulation in action. In the full ImprovAI system, you can:</p>
        <div className="creation-features">
          <div className="creation-feature">
            <h4>Build Your Own Characters</h4>
            <p>Create characters with custom psychology, drives, and memories</p>
          </div>
          <div className="creation-feature">
            <h4>Direct Live Performances</h4>
            <p>Use the Director's Chair to guide character decisions in real-time</p>
          </div>
          <div className="creation-feature">
            <h4>Create Dynamic Scenarios</h4>
            <p>Design worlds and situations where your characters can thrive</p>
          </div>
        </div>
        <div className="cta-buttons">
          <button onClick={handleFullscreen} className="primary-cta">
            <ExternalLink size={20} />
            Launch Full Demo
          </button>
          <a href="/contact" className="secondary-cta">
            Contact Us for Access
          </a>
        </div>
      </div>
    </div>
  );
};

export default DemoPage; 