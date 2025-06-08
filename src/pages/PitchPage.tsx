import React, { useState } from 'react';
import { Building2, GraduationCap, Gamepad2, Briefcase, Heart, Clapperboard } from 'lucide-react';
import './PitchPage.css';

interface PartnerCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  valuePropositions: string[];
  benefits: string[];
}

const PitchPage: React.FC = () => {
  const partnerCategories: PartnerCategory[] = [
    {
      id: 'research',
      title: 'Research & Academic',
      icon: <GraduationCap size={24} />,
      description: 'Advancing the science of character simulation and AI behavior',
      valuePropositions: [
        'Access to cutting-edge cognitive architecture for character simulation research',
        'Collaboration opportunities on psychology, AI, and behavioral studies',
        'Publication and research partnership programs',
        'Custom character models for specific research needs',
        'Academic licensing and educational discounts'
      ],
      benefits: [
        'Advance your research with state-of-the-art AI',
        'Publish groundbreaking studies on character behavior',
        'Access to our research team and expertise',
        'Flexible academic licensing terms'
      ]
    },
    {
      id: 'gaming',
      title: 'Game & Entertainment',
      icon: <Gamepad2 size={24} />,
      description: 'Creating truly dynamic, believable characters for interactive experiences',
      valuePropositions: [
        'Advanced NPC AI that creates truly dynamic, believable characters',
        'Scriptless narrative generation - characters drive their own stories',
        'Integration APIs for existing game engines and platforms',
        'Character behavior that evolves based on player interactions',
        'Reduced development time for complex character systems'
      ],
      benefits: [
        'Dramatically reduce character scripting time',
        'Create emergent storytelling experiences',
        'Increase player engagement and retention',
        'Stand out with next-generation AI characters'
      ]
    },
    {
      id: 'enterprise',
      title: 'Enterprise & Training',
      icon: <Building2 size={24} />,
      description: 'Realistic human behavior simulation for professional training',
      valuePropositions: [
        'Realistic human behavior simulation for training scenarios',
        'Customer service training with authentic character responses',
        'Leadership and management training simulations',
        'Customizable scenarios for industry-specific needs',
        'Scalable deployment across organizations'
      ],
      benefits: [
        'Improve training effectiveness with realistic scenarios',
        'Reduce training costs with scalable AI solutions',
        'Measure and track training performance',
        'Deploy across multiple locations and teams'
      ]
    },
    {
      id: 'creative',
      title: 'Creative & Content',
      icon: <Clapperboard size={24} />,
      description: 'AI-powered character development for films, shows, and interactive media',
      valuePropositions: [
        'AI-powered character development for films, shows, and interactive media',
        'Procedural storytelling capabilities for content creation',
        'Character consistency across long-form narratives',
        'Real-time character direction and improvisation tools',
        'Content creation workflow integration'
      ],
      benefits: [
        'Accelerate character development and scripting',
        'Maintain character consistency across projects',
        'Explore new forms of interactive storytelling',
        'Integrate seamlessly with existing workflows'
      ]
    },
    {
      id: 'healthcare',
      title: 'Healthcare & Therapy',
      icon: <Heart size={24} />,
      description: 'Therapeutic applications with consistent, empathetic AI characters',
      valuePropositions: [
        'Therapeutic applications with consistent, empathetic AI characters',
        'Training simulations for healthcare professionals',
        'Patient interaction and communication training',
        'Customizable therapeutic scenarios and interventions',
        'HIPAA-compliant deployment options'
      ],
      benefits: [
        'Enhance therapeutic outcomes with AI assistance',
        'Improve healthcare professional training',
        'Ensure patient privacy and compliance',
        'Scale therapeutic interventions effectively'
      ]
    },
    {
      id: 'integration',
      title: 'What We Provide',
      icon: <Briefcase size={24} />,
      description: 'Comprehensive partnership support and technical resources',
      valuePropositions: [
        'Technical Integration - APIs, SDKs, and comprehensive documentation',
        'Custom Development - Tailored solutions for specific use cases',
        'Ongoing Support - Technical support and consultation services',
        'Co-Marketing - Joint marketing and case study opportunities',
        'Flexible Licensing - Various licensing models to fit business needs',
        'Training & Onboarding - Comprehensive partner enablement programs'
      ],
      benefits: [
        'Fast time-to-market with proven integration tools',
        'Dedicated technical support throughout partnership',
        'Flexible terms that scale with your business',
        'Marketing support to promote joint solutions'
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState(0);
  const currentCategory = partnerCategories[activeCategory];

  return (
    <div className="pitch-page">
      <div className="pitch-header">
        <h1>Partner with ImprovAI</h1>
        <p>Unlock the power of authentic AI character simulation for your industry</p>
      </div>

      <div className="pitch-content">
        <div className="partner-tabs">
          {partnerCategories.map((category, index) => (
            <button
              key={category.id}
              className={`partner-tab ${index === activeCategory ? 'active' : ''}`}
              onClick={() => setActiveCategory(index)}
            >
              <div className="tab-icon">
                {category.icon}
              </div>
              <div className="tab-content">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="partner-details">
          <div className="details-header">
            <div className="category-icon">
              {currentCategory.icon}
            </div>
            <div className="category-info">
              <h2>{currentCategory.title}</h2>
              <p>{currentCategory.description}</p>
            </div>
          </div>

          <div className="details-content">
            <div className="value-propositions">
              <h3>What We Offer</h3>
              <ul>
                {currentCategory.valuePropositions.map((proposition, index) => (
                  <li key={index}>{proposition}</li>
                ))}
              </ul>
            </div>

            <div className="benefits">
              <h3>Key Benefits</h3>
              <ul>
                {currentCategory.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="cta-section">
            <h3>Ready to Partner with Us?</h3>
            <p>Let's discuss how ImprovAI can transform your {currentCategory.title.toLowerCase()} initiatives.</p>
            <div className="cta-buttons">
              <a href="/contact" className="primary-cta">
                Start the Conversation
              </a>
              <a href="/demo" className="secondary-cta">
                See It in Action
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchPage; 