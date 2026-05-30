import React from 'react';

export const PearBitten = ({ size = 24, color = 'currentColor', style, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
    {...props}
  >
    <path d="M12 22a6 6 0 0 1-5.454-8.5 11 11 0 0 0 2.098-5.492 3.5 3.5 0 0 1 6.713 0A11 11 0 0 0 17.059 13 3.5 3.5 0 0 0 17 19.302 6 6 0 0 1 12.019 22" />
    <path d="M12 5.5A7 7 0 0 0 11 2" />
  </svg>
);
