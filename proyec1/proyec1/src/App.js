import React, { useState, useEffect, useRef } from 'react';
import "../src/styles/styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const id = useRef(null);

  const clear = () => window.clearInterval(id.current);

  useEffect(() => {
    id.current = window.setInterval(() => {
      console.log("Interval callback");
      setTimeLeft((time) => time - 1);
    }, 1000);

    return clear;
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      clear();
    }
  }, [timeLeft]);

  const handleButtonClick = () => {
    setCount((c) => c + 1);
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <h3>EN {timeLeft} SEGUNDOS DESAPARECERA EL BOTON</h3>
      <h3>HABER CUANTOS CLICKS LOGRAS APRETAR!!!</h3>
      {timeLeft === 0 ? null : 
        <button onClick={handleButtonClick}>
          +
        </button>}
    </div>
  );
}
