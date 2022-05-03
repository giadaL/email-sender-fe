import EmailPage from '../pages/EmailPage/EmailPage';
import HomePage from '../pages/HomePage/HomePage';
import Router from './Router/Router';
import { Routes } from './urls';

const Root = () => {
  return (
    <Router>
      <EmailPage path={Routes.HOME} key={Routes.HOME} />
      <HomePage path={Routes.ROOT} key={Routes.ROOT} />
    </Router>
  );
};

export default Root;
