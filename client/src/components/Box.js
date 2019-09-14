import React from "react";
import { connect } from "react-redux";

import { changeBoxColor } from "../actions";

const Box = ({ color, index, changeBoxColor, currentColor, currentTool }) => {
  return (
    <div
      className="Box"
      style={{ backgroundColor: color }}
      onClick={() => changeBoxColor(index, currentColor, currentTool)}
    ></div>
  );
};

const mapStateToProps = state => {
  return {
    currentColor: state.currentColor,
    currentTool: state.currentTool
  };
};

export default connect(
  mapStateToProps,
  { changeBoxColor }
)(Box);
