import * as React from "react";

const AuthorizationListIcon = (props) => {
  const { width = 20, height = 20, className = "", ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="currentColor"
      className={`inline-block ${className}`}
      {...rest}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 8H6m8-4H6m8 8H6M3.333 8A.667.667 0 1 1 2 8a.667.667 0 0 1 1.333 0Zm0-4A.667.667 0 1 1 2 4a.667.667 0 0 1 1.333 0Zm0 8A.667.667 0 1 1 2 12a.667.667 0 0 1 1.333 0Z"
      />
    </svg>
  );
};

export default AuthorizationListIcon;
