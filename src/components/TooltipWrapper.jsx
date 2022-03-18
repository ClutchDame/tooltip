import React, { useState } from "react";
import Tooltip from "./Tooltip";
import "../styles/Tooltip.scss";

function TooltipWrapper({ children, content, position }) {
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = () => {
    setVisible(true);
  };
  const handleFocus = () => {
    setVisible(true);
  };
  const handleMouseLeave = () => {
    setVisible(false);
  };
  const handleBlur = () => {
    setVisible(false);
  };
  const handleKeyDown = (e) => {
    e.key == "Escape" && setVisible(false);
  };

  return (
    <div
      className="tooltip__wrapper"
      tabIndex={1}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      {children}
      {visible && <Tooltip position={position} content={content} />}
    </div>
  );
}

export default TooltipWrapper;
