import React from "react";

const WaveDividerHalf = () => {
  return (
    <div className="w-full overflow-hidden leading-none border-none">
      <svg
        viewBox="0 0 2500 180"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="sw-gradient-half" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>

        <path
          d="M0,18L34.3,24C68.6,30,137,42,206,39C274.3,36,343,18,411,12C480,6,549,12,617,27C685.7,42,754,66,823,66C891.4,66,960,42,1029,51C1097.1,60,1166,102,1234,120C1302.9,138,1371,132,1440,108C1508.6,84,1577,42,1646,48C1714.3,54,1783,108,1851,108C1920,108,1989,54,2057,33C2125.7,12,2194,24,2263,48C2331.4,72,2400,108,2500,108L2500,180L0,180Z"
          fill="url(#sw-gradient-half)"
        />
      </svg>
    </div>
  );
};

export default WaveDividerHalf;
