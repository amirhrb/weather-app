import React from "react";

const RadialProgress = ({ value }) => {
  return (
    <div
      className={
        value >= 25
          ? "radial-progress border-4 bg-primary-content text-primary border-primary-content"
          : "radial-progress border-4 bg-primary-content text-accent border-primary-content"
      }
      style={{ "--value": value }}
    >
      {value} %{" "}
      <span>
        H<sub>2</sub>O
      </span>
    </div>
  );
};

export default RadialProgress;
