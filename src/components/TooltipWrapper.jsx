import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Tooltip from "./Tooltip";
import usePosition from "../hooks/usePosition";
import "../styles/Tooltip.scss";

function TooltipWrapper({ children, content, position, smartPosition }) {
  const [visible, setVisible] = useState(false);
  const [safePosition, setSafePosition] = useState();
  const ref = useRef();

  useEffect(() => {
    if (smartPosition) {
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
    e.key == "Escape" && setVisible(false);
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
  position: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  smartPosition: PropTypes.bool,
};

TooltipWrapper.defaultProps = {
  children: null,
  content: "",
  position: "bottom",
  smartPosition: false,
};

export default TooltipWrapper;
