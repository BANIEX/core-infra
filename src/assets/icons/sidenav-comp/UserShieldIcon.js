import * as React from "react";
const SvgUserShieldIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g stroke="currentColor" clipPath="url(#user_shield_icon_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 9.365a7.1 7.1 0 0 0-4.281.957c-.943.561-3.416 1.708-1.91 3.143.736.701 1.555 1.202 2.586 1.202h4.272"
      />
      <path d="M10.334 4.334a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9.334c-.844 0-1.392.538-2.039.735-.263.08-.395.12-.448.176s-.069.138-.1.302c-.334 1.76.396 3.385 2.136 4.018.187.068.28.102.452.102s.265-.034.452-.102c1.74-.633 2.47-2.259 2.135-4.018-.03-.164-.046-.246-.1-.303-.053-.056-.185-.096-.448-.175-.647-.197-1.195-.735-2.04-.735"
      />
    </g>
    <defs>
      <clipPath id="user_shield_icon_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUserShieldIcon;
