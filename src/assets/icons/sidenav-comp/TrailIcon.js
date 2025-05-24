import * as React from "react";
const SvgTrailIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#trail_icon_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m6 12-4.666 2.667V4.001l4.667-2.667m0 10.667 4.666 2.666m-4.666-2.666V1.334m4.666 13.333 4-2.666V1.334l-4 2.667m0 10.666V4.001m0 0L6.001 1.334"
      />
    </g>
    <defs>
      <clipPath id="trail_icon_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTrailIcon;
