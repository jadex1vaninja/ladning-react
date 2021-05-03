import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import RedeemPage from './components/Redeem';
import FAQsPage from './pages/FAQsPage';
import TCsPage from './pages/T&CsPage';
import PrivacyPage from './pages/PrivacyPolicyPage/PrivacyPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/redeem' component={RedeemPage} />
        <Route path='/faq' component={FAQsPage} />
        <Route path='/tcs' component={TCsPage} />
        <Route path='/privacy-policy' component={PrivacyPage} />
      </Switch>
    </Router>
  );
}

export default App;
