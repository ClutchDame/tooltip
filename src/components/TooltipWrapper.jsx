import React, { useState } from "react";
import PropTypes from "prop-types";
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

TooltipWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  position: PropTypes.oneOf(["top", "right", "bottom", "left"]),
};

TooltipWrapper.defaultProps = {
  children: null,
  content: "",
  position: "bottom",
};

export default TooltipWrapper;
