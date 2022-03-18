import React from "react";
import classNames from "classnames";
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

export default Tooltip;
