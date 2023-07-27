import React from 'react';
import Calculator from '../components/calculator';
import NavigationMenu from '../components/NavigationMenu';

function CalculatorPage() {
  return (
    <div>
      <NavigationMenu />
      <h1>Calculator</h1>
      <Calculator />
    </div>
  );
}

export default CalculatorPage;
