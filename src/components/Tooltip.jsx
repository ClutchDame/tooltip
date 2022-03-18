import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "../styles/Tooltip.scss";

function Tooltip({ content, position }) {
  const renderContent = () =>
    typeof content === "function" ? content() : content;

  return (
    <div className={classNames("tooltip__content", position)} role="tooltip">
      {renderContent()}
    </div>
  );
}

Tooltip.propTypes = {
  content: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  position: PropTypes.oneOf(["top", "right", "bottom", "left"]),
};

Tooltip.defaultProps = {
  content: "",
  position: "bottom",
};

export default Tooltip;
