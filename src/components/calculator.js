import React, { useState } from "react";
import "./Calculator.scss";
import Button from "./button";
import "../logic/calculate";

const Calculator = () => {
  //Keeping the track of the state of the calculator
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  //Handling the click of the button
  const clickHandler = (buttonName) => {
    const newInput = calculate(calculatorData, buttonName);
    setCalculatorData(newInput);
  };

  //Rendering the calculator
  return (
    <div className="calculator">
      <div className="display">0</div>
      <div className="buttons">
        <Button label="AC" />
        <Button label="+/-" />
        <Button label="%" />
        <Button label="÷" className="orange" />
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <Button label="x" className="orange" />
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="-" className="orange" />
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="+" className="orange" />
        <Button label="0" className="big-button" />
        <Button label="." />
        <Button label="=" className="orange" />
      </div>
    </div>
  );
};

export default Calculator;
