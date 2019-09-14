export default (state = "#000000", { type, payload }) => {
  switch (type) {
    case "SET_CURRENT_COLOR":
      return payload;
    default:
      return state;
  }
};
