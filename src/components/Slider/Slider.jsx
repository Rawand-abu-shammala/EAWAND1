// import React, { useState } from 'react';
// import './Slider.css';

// const Slider = ({ cards }) => {
//   const [scrollX, setScrollX] = useState(0);

//   const handleMouseDown = (e) => {
//     const initialX = e.clientX;
//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseup', handleMouseUp);

//     function handleMouseMove(e) {
//       const deltaX = e.clientX - initialX;
//       setScrollX(scrollX - deltaX);
//     }

//     function handleMouseUp() {
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseup', handleMouseUp);
//     }
//   };

//   return (
//     <div className="slider" onMouseDown={handleMouseDown}>
//       <div
//         className="slider-inner"
//         style={{ transform: `translateX(${scrollX}px)` }}
//       >
//         {cards.map((content, index) => (
//           <div key={index} className="card">
//             {content}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;





// import React, { useRef, useState } from 'react';
// import './Slider.css';

// const Slider = ({ cards }) => {
//   const sliderRef = useRef(null);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const cardWidth = 588;
//   const numVisibleCards = Math.ceil(window.innerWidth / cardWidth);

//   const handleScroll = () => {
//     setScrollPosition(sliderRef.current.scrollLeft);
//   };

//   return (
//     <div className="slider" ref={sliderRef} onScroll={handleScroll}>
//       <div
//         className="slider-inner"
//         style={{ transform: `translateX(${scrollPosition}px)` }}
//       >
//         {[...Array(numVisibleCards * 2)].map((_, index) => (
//           <div key={index} className="card">
//             {cards[index % cards.length]}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;





import React, { useRef, useState } from 'react';
import './Slider.css';

const Slider = ({ cards }) => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="slider"
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="slider-inner">
        {cards.map((content, index) => (
          <div key={index} className="card">
            {content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

