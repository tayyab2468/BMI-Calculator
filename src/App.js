import { useState } from "react";
import "./App.css";
import "./style.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setheight] = useState("");

  const [bmi, setBmi] = useState("");
  const [category, setCategory] = useState("");
  const [color, setcolor] = useState("");

  const getBmi = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = parseFloat(weight) / heightInMeters ** 2;

      setBmi(bmiValue.toFixed(2));

     
      if (bmiValue < 18.5) {
        setCategory("Underweight"); 
      } else if (bmiValue < 24.9) {
        setCategory("Normal Weight");
        setcolor("green");
      } else if (bmiValue < 29.9) {
        setCategory("Overweight");
        setcolor("orange");
      } else {
        setCategory("Extremly Fat Dangerous for Health");
        setcolor(" red");
      }
    } else {
      setBmi("Invalid input");
      setCategory(""); 
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <label>
        Weight <span>(Kg)</span>
      </label>
      <input
        type="text"
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Enter Weight"
      />

      <label>Height (cm)</label>
      <input
        type="text"
        onChange={(e) => setheight(e.target.value)}
        placeholder="Enter height in feet"
      />

      <button onClick={getBmi}>Submit</button>
      <p>The BMI is: {bmi}</p>
      <h2 style={{ color: color }}> {category}</h2>
    </div>
  );
}
}

export default App;

