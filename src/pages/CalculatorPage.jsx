import React from 'react';
import Calculator from '../components/calculator';
import './calculatorPage.scss';

function CalculatorPage() {
  return (
    <div className="calcHome">
      <h1 className="calcHome__title">Lets do some math!</h1>
      <div className="calc-container">
        <Calculator />
      </div>
    </div>
  );
}

export default CalculatorPage;
