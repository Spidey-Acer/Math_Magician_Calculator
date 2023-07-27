import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationMenu from './components/NavigationMenu';
import HomePage from './pages/HomePage';
import CalculatorPage from './pages/CalculatorPage';
import QuotePage from './pages/QuotePage';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationMenu />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/calculator" component={CalculatorPage} />
          <Route path="/quote" component={QuotePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
