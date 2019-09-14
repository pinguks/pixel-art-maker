export const changeBoxColor = (index, currentColor, currentTool) => {
  return {
    type: "CHANGE_BOX_COLOR",
    payload: { index, currentColor, currentTool }
  };
};

export const newCanvas = () => {
  const boxes = [];

  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 22; j++) {
      boxes.push({ color: "#FFFFFF" });
    }
  }

  return {
    type: "NEW_CANVAS",
    payload: boxes
  };
};

export const setCurrentColor = color => {
  return {
    type: "SET_CURRENT_COLOR",
    payload: color
  };
};

export const changeTool = tool => {
  return {
    type: "CHANGE_TOOL",
    payload: tool
  };
};
