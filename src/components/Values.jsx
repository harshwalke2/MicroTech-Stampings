import React from 'react';
import '../styles/Values.css';

function Values() {
  const values = [
    {
      title: 'Excellence',
      description: 'Uncompromising quality through advanced technology and precision engineering',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop'
    },
    {
      title: 'Sustainability',
      description: 'Resource optimization and responsible manufacturing practices',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=200&h=200&fit=crop'
    },
    {
      title: 'Client Satisfaction',
      description: 'Precise, reliable components with responsive, dedicated support',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop'
    },
    {
      title: 'Global Reach',
      description: 'Serving domestic and international markets with global standards',
      image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=200&h=200&fit=crop'
    }
  ];

  return (
    <section id="values" className="values-section">
      <div className="values-wrapper">
        {/* Premium Container Card */}
        <div className="values-card">
          {/* Header Block */}
          <div className="values-header">
            <div className="eyebrow">CORE VALUES</div>
            <h2 className="values-headline">What Drives Us</h2>
            <p className="values-subheadline">The principles that define our commitment to excellence</p>
          </div>

          {/* Divider */}
          <div className="header-divider"></div>

          {/* Values Grid */}
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card-item">
                {/* Icon Container */}
                <div className="icon-container">
                  <img src={value.image} alt={value.title} className="value-icon-img" />
                  <div className="icon-overlay"></div>
                </div>

                {/* Content Block */}
                <div className="value-card-content">
                  <h3 className="value-card-title">{value.title}</h3>
                  <p className="value-card-description">{value.description}</p>
                </div>

                {/* Bottom Accent Line */}
                <div className="value-accent-line"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
