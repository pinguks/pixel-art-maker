import "../css/Tools.css";
import React from "react";
import { connect } from "react-redux";

import { changeTool, newCanvas } from "../actions";

const Tools = ({ changeTool, newCanvas, currentTool }) => {
  function resetCanvas() {
    newCanvas();
    changeTool("pen");
  }

  return (
    <div className="Tools">
      <div
        className={`Pencil${currentTool === "pen" ? " active" : ""}`}
        onClick={() => changeTool("pen")}
      >
        <img
          alt="a pen"
          src="https://img.icons8.com/dusk/64/000000/ball-point-pen.png"
        />
      </div>
      <div
        className={`Eraser${currentTool === "eraser" ? " active" : ""}`}
        onClick={() => changeTool("eraser")}
      >
        <img
          alt="an eraser"
          src="https://img.icons8.com/dusk/64/000000/eraser.png"
        />
      </div>
      <div className="Clear" onClick={resetCanvas}>
        <img
          alt="a delete sign"
          src="https://img.icons8.com/dusk/64/000000/delete-sign.png"
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentTool: state.currentTool
  };
};

export default connect(
  mapStateToProps,
  { changeTool, newCanvas }
)(Tools);
