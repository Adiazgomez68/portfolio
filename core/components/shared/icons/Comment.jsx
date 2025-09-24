import * as React from "react";

function Comment(props, { className = "" }) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
      className={`h-6 w-6", ${className}`}
      {...props}
    >
      <path d="M20,2H4C2.897,2,2,2.897,2,4v18l5.333-4H20c1.103,0,2-0.897,2-2V4C22,2.897,21.103,2,20,2z M20,16H6.667L4,18V4h16V16z" />
    </svg>
  );
}

export default Comment;
