import React, { useEffect, useRef } from "react";
import { Button } from "../../styles/commonStyles";

const CustomButton = ({
  children,
  width,
  height,
  fullWidth,
  outlined,
  disabled,
  padding,
  onClick,
}) => {
  const btnRef = useRef();

  const handleBtnClick = (e) => {
    let ele = btnRef.current;
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let action = document.createElement("span");
    action.className = "active";
    action.style.left = `${x}px`;
    action.style.top = `${y}px`;

    ele.appendChild(action);

    setTimeout(() => {
      action.remove();
    }, [600]);

    if (onClick) onClick();
  };

  return (
    <Button
      ref={btnRef}
      width={width}
      height={height}
      fullWidth={fullWidth}
      padding={padding}
      onClick={handleBtnClick}
      outlined={outlined}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
