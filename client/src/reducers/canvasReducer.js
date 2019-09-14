export default (state = [], { type, payload }) => {
  switch (type) {
    case "CHANGE_BOX_COLOR":
      const boxes = [...state];

      const { index, currentColor, currentTool } = payload;

      const color = currentTool === "pen" ? currentColor : "#FFFFFF";

      boxes[index].color = color;

      return boxes;
    case "NEW_CANVAS":
      return payload;
    default:
      return state;
  }
};
