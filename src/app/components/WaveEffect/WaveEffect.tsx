import React from "react";

function WavyShape() {
  return (
    <div>
      <div className="hidden md:block relative w-screen h-[150px]">
        <svg width="2880" height="300" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'translateY(-50px)' }}>
          <path fill="#F3F4F6" d="M0 150 Q 480 180, 960 150 Q 1440 120, 1920 150 Q 2400 180, 2880 150 Q 2880 300, 0 300 Z" />
        </svg>
      </div>
      <div className="block md:hidden relative w-screen h-[150px]">
        <svg width="960" height="400" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'translateY(-150px)' }}>
          <path fill="#F3F4F6" d="M0 200 Q 160 240, 320 200 Q 480 160, 640 200 Q 800 240, 960 200 Q 960 400, 0 400 Z" />
        </svg>
      </div>
    </div>
  );
}

export default WavyShape;
