import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom';
import Landing from './components/Landing';
import RedeemPage from './pages/RedeemPage';
import FAQsPage from './pages/FAQsPage';
import TCsPage from './pages/T&CsPage';
import PrivacyPage from './pages/PrivacyPolicyPage/PrivacyPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.scss';

function App() {
  return (
    <Router>
      <ScrollToTop></ScrollToTop>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/redeem' component={RedeemPage} />
        <Route path='/faq' component={FAQsPage} />
        <Route path='/terms' component={TCsPage} />
        <Route path='/privacy-policy' component={PrivacyPage} />
      </Switch>
    </Router>
  );
}

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
export default App;
