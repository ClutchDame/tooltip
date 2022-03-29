import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Tooltip from "./Tooltip";
import usePosition from "../hooks/usePosition";
import "../styles/Tooltip.scss";

function TooltipWrapper({ children, content, position }) {
  const [visible, setVisible] = useState(false);
  const [safePosition, setSafePosition] = useState();
  const ref = useRef();

  useEffect(() => {
    if (position === "auto") {
      setSafePosition(usePosition(ref.current));
    }
  }, []);

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
    e.key === "Escape" && setVisible(false);
  };

  return (
    <div
      className="tooltip__wrapper"
      tabIndex={1}
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      {children}
      {visible && (
        <Tooltip
          position={position}
          safePosition={safePosition}
          content={content}
        />
      )}
    </div>
  );
}

TooltipWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  position: PropTypes.oneOf(["auto", "top", "right", "bottom", "left"]),
};

TooltipWrapper.defaultProps = {
  children: null,
  content: "",
  position: "auto",
};

export default TooltipWrapper;
