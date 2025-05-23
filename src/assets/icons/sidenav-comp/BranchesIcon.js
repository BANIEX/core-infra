import * as React from "react";
const SvgBranchesIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#D0D5DD"
      strokeLinejoin="round"
      d="M7 1.332H3c-1.655 0-2 .345-2 2v11.333h8V3.332c0-1.655-.345-2-2-2ZM11 5.332H9v9.333h4V7.332c0-1.655-.345-2-2-2Z"
    />
    <path
      stroke="#D0D5DD"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.334 4h1.333M4.334 6h1.333M4.334 8h1.333"
    />
    <path
      stroke="#D0D5DD"
      strokeLinejoin="round"
      d="M6.667 14.666v-2.667c0-.628 0-.943-.195-1.138s-.51-.195-1.138-.195h-.667c-.628 0-.942 0-1.138.195s-.195.51-.195 1.138v2.667"
    />
  </svg>
);
export default SvgBranchesIcon;
