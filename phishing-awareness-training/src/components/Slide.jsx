// src/components/Slide.jsx
import React from "react";

let motionAvailable = false;
let m = {};
try {
  m = require("framer-motion");
  motionAvailable = true;
} catch (err) {
  console.warn("Framer Motion not installed, falling back to <div>");
  motionAvailable = false;
}

export default function Slide({ slide = {}, index = 0, total = 0 }) {
  if (!slide) return null;

  const content = (
    <div className="slide-content">
      {slide.title && <h2 className="slide-title">{slide.title}</h2>}
      <div className="slide-meta">Slide {index + 1} of {total}</div>

      {slide.image && (
        <div className="slide-image">
          {/* ✅ use the path from slidesData.js directly */}
          <img src={slide.image} alt={slide.title || "Slide image"} />
        </div>
      )}

      {slide.body && (
        <div className="slide-body">
          {slide.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}

      {slide.list && (
        <ul className="slide-list">
          {slide.list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );

  if (motionAvailable) {
    const { motion } = m;
    return (
      <motion.div
        className="slide"
        key={slide.id}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        {content}
      </motion.div>
    );
  }

  return <div className="slide">{content}</div>;
}
