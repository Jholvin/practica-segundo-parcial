import "../src/styles/styles.css";
import { useState } from "react";

export default function App() {

  const [show, setShow] = useState(true);

  return (
    <div className="container">
      <button onClick={() => setShow((show) => !show)}>MOSTRAR-OCULTAR</button>
      {show ? <h1>ESTE TEXTO ESTA A TU DISPOSICION</h1> : null}
    </div>
  );
}
