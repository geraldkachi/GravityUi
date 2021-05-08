import React from "react";

const Rainbow = (WrappedComponent) => {
  const colors = [
    "primary",
    "secondary",
    "warning",
    "danger",
    "dark",
    "success",
    "info"
  ];
  const randomColor = colors[Math.floor(Math.random() *5)];
  const className =  "text-"  + randomColor ;

  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
