import * as React from "react";
const SvgCardSchemeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#D0D5DD"
      strokeLinejoin="round"
      d="M1.666 8c0-2.986 0-4.479.928-5.406.927-.928 2.42-.928 5.405-.928s4.479 0 5.406.928c.928.927.928 2.42.928 5.405s0 4.479-.928 5.406c-.927.928-2.42.928-5.406.928s-4.478 0-5.405-.928c-.928-.927-.928-2.42-.928-5.406Z"
    />
    <path
      stroke="#D0D5DD"
      d="M5.666 6.666a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM10.332 11.332a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
    <path
      stroke="#D0D5DD"
      strokeLinecap="round"
      d="M6.665 5.666h4.667M9.333 10.332H4.666"
    />
  </svg>
);
export default SvgCardSchemeIcon;
