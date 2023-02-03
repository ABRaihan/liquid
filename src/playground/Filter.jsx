import React, { useState } from 'react';

const PriceSlider = () => {
  const [price, setPrice] = useState(100);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderX, setSliderX] = useState(0);

  const handleSliderRef = (node) => {
    if (node !== null) {
      setSliderWidth(node.offsetWidth);
    }
  };

  const handleThumbRef = (node) => {
    if (node !== null) {
      setSliderX(node.offsetLeft);
    }
  };
  const handleMouseMove = (event) => {
    // eslint-disable-next-line no-mixed-operators
    const newPrice = (event.clientX - sliderX) / sliderWidth * 1000;
    setPrice(Math.max(0, Math.min(1000, newPrice)));
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };
  const handleMouseDown = (event) => {
    event.preventDefault();
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div ref={handleSliderRef} className="price-slider">
      <div
        ref={handleThumbRef}
        className="price-slider-thumb"
        // eslint-disable-next-line no-mixed-operators
        style={{ left: `${price / 1000 * 100}%` }}
        onMouseDown={handleMouseDown}
      />
      <p>
        Price: $
        {price}
      </p>
    </div>
  );
};

export default PriceSlider;
