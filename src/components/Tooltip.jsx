import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import usePosition from "../hooks/usePosition";
import "../styles/Tooltip.scss";

function Tooltip({ children, position }) {
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
      {visible && (
        <div
          className={classNames(
            "tooltip__content",
            safePosition ? safePosition : position
          )}
          role="tooltip"
        >
          {children}
        </div>
      )}
    </div>
  );
}

Tooltip.propTypes = {
  children: PropTypes.any.isRequired,
  position: PropTypes.oneOf(["auto", "top", "right", "bottom", "left"]),
};

Tooltip.defaultProps = {
  children: null,
  position: "auto",
};

export default Tooltip;
