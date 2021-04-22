import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import RedeemPage from './components/Redeem';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Landing} />
      </Switch>
      <Switch>
        <Route path='/redeem' component={RedeemPage} />
      </Switch>
    </Router>
  );
}

export default App;
