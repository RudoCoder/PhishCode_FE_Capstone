import React from 'react';

export default function Slide({ slide = {}, index = 0, total = 0 }) {
  if (!slide) return null;

  return (
    <section className="slide-card">
      <div className="slide-header">
        <h2>{slide.title}</h2>
        <div className="slide-meta">Slide {index + 1} of {total}</div>
      </div>

      {slide.image && (
        <div className="slide-image">
          <img src={slide.image} alt={slide.title} />
        </div>
      )}

      <div className="slide-body">
        {slide.body && slide.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
