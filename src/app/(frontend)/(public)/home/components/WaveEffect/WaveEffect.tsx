import React from "react";

function WavyShape() {
  return (
    <div className="relative w-screen h-[100px]">
      <svg width="1920" height="200" xmlns="http://www.w3.org/2000/svg" style={{transform: 'translateY(-50px)'}}>
        <path
          fill="#F3F4F6"
          d="M0 100 Q 320 120, 640 100 Q 960 80, 1280 100 Q 1600 120, 1920 100 Q 1920 200, 0 200 Z"
        />
      </svg>
    </div>
  );
}

export default WavyShape;
