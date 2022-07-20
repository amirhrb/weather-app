import React from "react";

const Skeleton = ({ width, height, rounded, margin }) => {
  return (
    <div
      style={{
        width: `${width}rem`,
        height: `${height}rem`,
        borderRadius: `${rounded}rem`,
      }}
      className={`overflow-hidden ${margin ? margin : ""}`}
    >
      <div
        className={`w-full h-full  opacity-40 animate-skeleton bg-base-200 bg-[length:200%] bg-gradient-to-l from-primary via-base-200 to-primary`}
      ></div>
    </div>
  );
};

export default Skeleton;
