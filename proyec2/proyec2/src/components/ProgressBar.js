import React from "react";
import "../styles/ProgressBar.css";
const ProgressBar = ({ width: inputWidth }) => {
  return (
    <div>
      <div className="container">
        {inputWidth >= 0 && inputWidth <= 100 ? (
          <div className="innerContainer" style={{ width: `${inputWidth}%` }}>
            {inputWidth}%
          </div>
        ) : (
          alert("Por favor solo un porcentaje >=0 o <=100")
        )}
      </div>
    </div>
  );
};
export default ProgressBar;
