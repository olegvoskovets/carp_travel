import React from "react";

const RigthSvg_mobile = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="53"
      viewBox="0 0 42 53"
      fill="none"
    >
      <rect
        width="0.954545"
        height="11"
        transform="matrix(-1 0 0 1 42 0)"
        fill="white"
      />
      <rect
        width="42"
        height="1"
        transform="matrix(-1 0 0 1 42 0)"
        fill="white"
      />
      <rect
        x="42"
        y="53"
        width="0.954545"
        height="11"
        transform="rotate(180 42 53)"
        fill="white"
      />
      <rect
        x="42"
        y="53"
        width="42"
        height="1"
        transform="rotate(180 42 53)"
        fill="white"
      />
    </svg>
  );
};

export default RigthSvg_mobile;
