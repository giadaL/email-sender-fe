import HomePage from '../pages/HomePage/HomePage';
import Page from './Page/Page';
import Router from './Router/Router';
import { Routes } from './urls';

const Root = () => {
  return (
    <Router>
      <Page path={Routes.HOME} key={Routes.HOME}>
        HOME
      </Page>
      <HomePage path={Routes.ROOT} key={Routes.ROOT} />
    </Router>
  );
};

export default Root;
