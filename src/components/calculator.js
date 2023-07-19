import React, { useState } from "react";
import "./Calculator.scss";
import Button from "./button";
import calculate from "../logic/calculate";

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
      <div className="display">
        {calculatorData.next || calculatorData.total || "0"}
      </div>
      <div className="buttons">
        <Button label="AC" onClick={() => clickHandler("AC")} />
        <Button label="+/-" onClick={() => clickHandler("+/-")} />
        <Button label="%" onClick={() => clickHandler("%")} />
        <Button
          label="÷"
          onClick={() => clickHandler("÷")}
          className="orange"
        />
        <Button label="7" onClick={() => clickHandler("7")} />
        <Button label="8" onClick={() => clickHandler("8")} />
        <Button label="9" onClick={() => clickHandler("9")} />
        <Button
          label="x"
          onClick={() => clickHandler("x")}
          className="orange"
        />
        <Button label="4" onClick={() => clickHandler("4")} />
        <Button label="5" onClick={() => clickHandler("5")} />
        <Button label="6" onClick={() => clickHandler("6")} />
        <Button
          label="-"
          onClick={() => clickHandler("-")}
          className="orange"
        />
        <Button label="1" onClick={() => clickHandler("1")} />
        <Button label="2" onClick={() => clickHandler("2")} />
        <Button label="3" onClick={() => clickHandler("3")} />
        <Button
          label="+"
          onClick={() => clickHandler("+")}
          className="orange"
        />
        <Button
          label="0"
          onClick={() => clickHandler("0")}
          className="big-button"
        />
        <Button label="." onClick={() => clickHandler(".")} />
        <Button
          label="="
          onClick={() => clickHandler("=")}
          className="orange"
        />
      </div>
    </div>
  );
};

export default Calculator;
