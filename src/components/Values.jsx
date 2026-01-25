import React from 'react';
import '../styles/Values.css';

function Values() {
  const values = [
    {
      title: 'Excellence',
      description: 'We deliver uncompromising quality and precision through advanced technology, rigorous inspection, and a commitment to continuous improvement.',
      image: 'https://microtechstampings.lovable.app/assets/product-camlock-BI7DjqIE.jpg'
    },
    {
      title: 'Innovation',
      description: 'We embrace advanced manufacturing techniques and smart engineering solutions to create high-performance metal components that meet evolving industry needs.',
      image: 'https://microtechstampings.lovable.app/assets/product-sheetmetal-80owJ07a.jpg'
    },
    {
      title: 'Sustainability',
      description: 'We optimize resources and reduce waste to ensure responsible and sustainable manufacturing practices.',
      image: 'https://microtechstampings.lovable.app/assets/product-camlock-BI7DjqIE.jpg'
    },
    {
      title: 'Client Satisfaction',
      description: 'We build lasting partnerships by delivering precise, reliable components on time and providing responsive, customer-focused support.',
      image: 'https://microtechstampings.lovable.app/assets/product-sheetmetal-80owJ07a.jpg'
    },
    {
      title: 'Global Reach',
      description: 'We serve both domestic and international markets, supplying precision metal components that meet global quality and performance standards.',
      image: 'https://microtechstampings.lovable.app/assets/product-camlock-BI7DjqIE.jpg'
    }
  ];

  return (
    <section id="values" className="values">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">OUR CORE VALUES</h2>
          <h3 className="section-subtitle">What Drives Us</h3>
          <p className="section-description">Our values define who we are and guide every decision we make</p>
        </div>

        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-image">
                <img src={value.image} alt={value.title} />
              </div>
              <div className="value-content">
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Values;
