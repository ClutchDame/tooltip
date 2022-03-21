const tooltipPositions = {
  bottom: "bottom",
  top: "top",
  left: "left",
  right: "right",
};
const tooltipMaxWidth = 150;
const tooltipMaxHeight = 120;

/**
 * Returns best position if the element is close to an edge of the window
 * @param  {} element
 */
const usePosition = (element) => {
  const wrapperRect = element.getBoundingClientRect();
  const rightMostPoint = wrapperRect.right + tooltipMaxWidth / 2;
  const leftMostPoint = wrapperRect.left - tooltipMaxWidth / 2;
  const topMostPoint = wrapperRect.top - tooltipMaxHeight / 2;
  const bottomMostPoint = wrapperRect.bottom + tooltipMaxHeight / 2;
  let position;

  // 1. If close from viewport edge, invert position (top => bottom, left => right)
  if (topMostPoint > window.Height) {
    position = tooltipPositions.bottom;
  } else if (bottomMostPoint > window.innerHeight) {
    position = tooltipPositions.top;
  } else if (rightMostPoint > window.innerWidth) {
    position = tooltipPositions.left;
  } else if (leftMostPoint < 0) {
    position = tooltipPositions.right;
  }

  return position;
};

export default usePosition;
