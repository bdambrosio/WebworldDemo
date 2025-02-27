import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Mail } from 'lucide-react';
import './WebWorldPresentation.css';

interface Slide {
  title: string;
  visual: string;
  message: string;
}

interface VisualMap {
  [key: string]: string;
}

interface DialogProps {
  onClose: () => void;
  onSubmit: (email: string) => void;
}

const WebWorldPresentation: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const [email, setEmail] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');

  const slides: Slide[] = [
    {
      title: "Introduction",
      visual: "landing-page",
      message: "Unleash unprecedented creative control with WebWorld's groundbreaking cognitive modeling platform. Create characters with authentic psychology, place them in custom scenarios, and watch as they navigate complex emotional landscapes with genuine autonomy. Peer into their minds to observe their thoughts, emotional reactions, and evolving relationships. Intervene at any moment to redirect narratives or question characters directly about their motivations. WebWorld isn't just simulation — it's the future of narrative creation where stories unfold organically through truly intelligent characters."   },
    {
      title: "Engagement-Driven Simulation",
      visual: "character-panel",
      message: "Characters in WebWorld are driven by the interaction of their perceptions with their innate drives, memories, emotional states, even internal models of other characters. These aren't static scripts - they're dynamic, evolving minds making decisions in real-time based on their internal state and perceptions of the world around them."
    },
    {
      title: "Cognitive Architecture",
      visual: "core-state",
      message: "The most advanced cognitive architecture in the industry, for those who need to create characters with authentic psychology. Characters maintain drives that motivate their behavior, form goals and tasks to satisfy those drives, and act based on their perception of the world around them."
    },
    {
      title: "Memory System",
      visual: "memory-tab",
      message: "Characters don't just react - they remember and learn. WebWorld's memory system creates both concrete memories of specific events and abstract memories that represent patterns of experience, allowing characters to learn and evolve through their interactions."
    },
    {
      title: "Social Dynamics",
      visual: "social-tab",
      message: "Characters build relationships that evolve naturally over time. They remember past interactions, form impressions, including their own internal models of other characters, and adjust their behavior accordingly. Watch as they develop trust, navigate conflicts, and form authentic bonds. Or not."
    },
    {
      title: "Drive Signals & Character Motivation",
      visual: "signals-tab",
      message: "Character behavior is motivated by 'drive signals' - opportunities and issues that arise from the interaction between a character's fundamental needs and desires, and their perceptions of the events around them. These shape goals and tasks in a dynamic way that creates emergent narrative without scripting."
    },
    {
      title: "Transformative AI for Character Simulation",
      visual: "landing-page",
      message: "Whether you are a creative needing to explore human behavior, a researcher needing realistic simulations, or a therapist developing innovative counseling tools, WebWorld offers unprecedented capabilities. Join us in pioneering the future of AI-driven character simulation. Contact us to explore how WebWorld can enhance your creative or professional practice."
    }
  ];

  const visualPlaceholders: VisualMap = {
    "landing-page": "/images/Webworld_main_screen.png",
    "character-panel": "/images/CharacterPanelDetail.png",
    "core-state": "/images/CharacterExplorerCoreTab.png",
    "memory-tab": "/images/CharacterExplorerMemoryTab.png",
    "social-tab": "/images/CharacterExplorerSocialTab.png",
    "signals-tab": "/images/CharacterExplorerSignalsTab.png"
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prevSlide) => 
          prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
      }, 8000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, slides.length]);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const progressPercentage = ((currentSlide + 1) / slides.length) * 100;

  const handleContact = () => {
    setShowDialog(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Use encodeURIComponent for proper URL encoding and remove special characters
    const body = encodeURIComponent("I'm interested in learning more about WebWorld.\n\nEmail: " + email);
    window.location.href = `mailto:info@tuuyi.com?subject=WebWorld%20Access%20Request&body=${body}`;
    setSubmitStatus('Thank you for your interest!');
    setTimeout(() => {
      setShowDialog(false);
      setSubmitStatus('');
      setEmail('');
    }, 2000);
  };

  return (
    <div 
      className="presentation-container"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <header className="presentation-header">
        <h1>WebWorld</h1>
        <span>AI Characters in Living Stories</span>
      </header>

      <div className="presentation-content">
        <div className="slide-content">
          <div className="visual-section">
            <div className="image-container">
              <img 
                src={visualPlaceholders[slides[currentSlide].visual]} 
                alt={slides[currentSlide].title} 
              />
              <div className="image-gradient"></div>
            </div>
          </div>

          <div className="text-section">
            <h2>{slides[currentSlide].title}</h2>
            <p>{slides[currentSlide].message}</p>
            {currentSlide === slides.length - 1 && (
              <button onClick={handleContact} className="contact-button">
                <Mail size={20} />
                Contact Us
              </button>
            )}
          </div>
        </div>

        <div className={`navigation-controls ${showControls ? 'visible' : ''}`}>
          <div className="controls-container">
            <button onClick={goToPrevSlide} className="nav-button">
              <ChevronLeft />
            </button>
            
            <button onClick={togglePlayPause} className="nav-button">
              {isPlaying ? <Pause /> : <Play />}
            </button>
            
            <button onClick={goToNextSlide} className="nav-button">
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      <footer className="presentation-footer">
        <div className="slide-counter">
          Slide {currentSlide + 1} of {slides.length}
        </div>
        <div className="copyright">
          WebWorld © 2025
        </div>
      </footer>

      {showDialog && (
        <div className="email-dialog-overlay">
          <div className="email-dialog">
            <h3>Contact Us</h3>
            <p>Enter your email to learn more about WebWorld</p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
              />
              <div className="dialog-buttons">
                <button type="submit">Submit</button>
                <button type="button" onClick={() => setShowDialog(false)}>Cancel</button>
              </div>
            </form>
            {submitStatus && <p className="status-message">{submitStatus}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default WebWorldPresentation; 