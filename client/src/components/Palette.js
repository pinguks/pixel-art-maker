import "../css/Palette.css";
import React from "react";
import { connect } from "react-redux";

import { setCurrentColor } from "../actions";

import paletteColors from "../utils/paletteColors";

const Palette = ({ setCurrentColor }) => {
  return (
    <div className="Palette">
      {paletteColors.map(color => {
        return (
          <div
            key={color}
            style={{ backgroundColor: color }}
            className="Palette-box"
            onClick={() => setCurrentColor(color)}
          ></div>
        );
      })}
    </div>
  );
};

export default connect(
  null,
  { setCurrentColor }
)(Palette);
