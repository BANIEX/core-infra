import * as React from "react";
const SvgCreditCard = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="gray"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 13.333h2c2.506 0 3.76 0 4.596-.66q.2-.159.37-.348c.701-.787.701-1.967.701-4.325 0-.789 0-1.446-.026-2H1.361c-.027.554-.027 1.211-.027 2 0 2.358 0 3.537.702 4.325q.168.189.37.348c.836.66 2.089.66 4.595.66"
    />
    <path
      stroke="#D0D5DD"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.334 8c0-2.359 0-3.538.702-4.325q.168-.19.37-.348c.836-.661 2.089-.661 4.595-.661h2c2.505 0 3.758 0 4.595.66q.2.16.37.349c.701.787.701 1.966.701 4.324 0 2.359 0 3.538-.701 4.325a3 3 0 0 1-.37.348c-.837.66-2.09.66-4.595.66H7c-2.506 0-3.759 0-4.595-.66a3 3 0 0 1-.37-.348c-.702-.787-.702-1.966-.702-4.325"
    />
    <path
      stroke="#D0D5DD"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M6.668 10.666h1M9.668 10.666h2.333"
    />
    <path stroke="#D0D5DD" strokeLinejoin="round" d="M1.334 6h13.333" />
  </svg>
);
export default SvgCreditCard;

