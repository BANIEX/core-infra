import * as React from "react";
const SvgStockIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.668 10v2.667M8 6v6.667M14.668 14.668H1.335M13.334 8.668v4"
    />
    <path
      stroke="currentColor"
      d="M3.734 5.867a1.333 1.333 0 1 0-2.133 1.6 1.333 1.333 0 0 0 2.133-1.6Zm0 0 3.2-2.4m0 0a1.33 1.33 0 0 0 2.26-.203m-2.26.203a1.333 1.333 0 1 1 2.26-.204m0 0 2.947 1.475m0 0a1.333 1.333 0 1 0 2.386 1.193 1.333 1.333 0 0 0-2.386-1.193Z"
    />
  </svg>
);
export default SvgStockIcon;
