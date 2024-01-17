import React, { useState } from "react";
import ProgressBar from "../src/components/ProgressBar";

export default function App() {
  const [val, setVal] = useState( );

  const setValuer = (e) => {
    const inputValue = parseFloat(e.target.value);
    setVal(isNaN(inputValue) ? 0 : inputValue);
  };

  return (
    <>
      <div className="App">
        <h1>Barra de progreso</h1>
        <ProgressBar width={val} />
        <form>
          <label htmlFor="html">PORCENTAJE</label>
          <input type="number" id="html" onChange={setValuer} />
        </form>
      </div>
    </>
  );
}
