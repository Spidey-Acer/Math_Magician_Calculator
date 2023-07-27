import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavigationMenu from './components/NavigationMenu';
import HomePage from './pages/HomePage';
import CalculatorPage from './pages/CalculatorPage';
import QuotePage from './pages/QuotePage';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/quote" element={<QuotePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
