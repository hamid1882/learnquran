import { useState } from "react";
import "../App.css";
import TasbihCarousel from "./TasbihCarousel";

const Tabih = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleIncrement = () => {
    setCount(count + 1)
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="tasbihBg d-flex justify-content-center text-center mx-auto">
      <div className="container p-5 m-5 vh-100">
        <h1 className="text-center p-5">Tasbih</h1>
        {/* <TasbihCarousel /> */}
        <div
          className="tasbihDiv d-flex justify-content-center align-items-center text-center h-50 w-100 mx-auto"
          style={{ cursor: "pointer" }}
          onClick={handleCount}
        >
          <h1 className="tasbihInsideDiv p-5 rounded shadow">{count}</h1>
        </div>
        <div className="d-flex gap-2 align-items-center justify-content-around p-2 my-5">
          <button onClick={handleDecrement} className="tasbihBtn btn-success p-2 rounded">
          &#8722; Decrement
          </button>
          <button onClick={handleReset} className="tasbihBtn btn-success p-2 rounded">
            Reset &#33;
          </button>
          <button onClick={handleIncrement} className="tasbihBtn btn-success p-2 rounded">
           Increment &#43;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabih;
