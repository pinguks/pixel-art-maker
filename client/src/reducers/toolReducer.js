export default (state = "pen", { type, payload }) => {
  switch (type) {
    case "CHANGE_TOOL":
      return payload;
    default:
      return state;
  }
};
