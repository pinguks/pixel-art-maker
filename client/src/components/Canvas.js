import "../css/Canvas.css";
import React from "react";
import { connect } from "react-redux";

import Box from "./Box";

const Canvas = ({ boxes }) => {
  return (
    <div className="Canvas">
      {/* issue when passing box instead of box.color??? */}
      {boxes.map((box, index) => {
        return <Box key={index} color={box.color} index={index} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    boxes: state.boxes
  };
};

export default connect(
  mapStateToProps,
  null
)(Canvas);
