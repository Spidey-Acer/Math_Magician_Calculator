import React from 'react';
import NavigationMenu from '../components/NavigationMenu';
import Quote from '../components/quote';

function QuotePage() {
  return (
    <div>
      <NavigationMenu />
      <h1>Quote</h1>
      <Quote />
    </div>
  );
}

export default QuotePage;
