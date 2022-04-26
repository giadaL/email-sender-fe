import Page from './Page/Page';
import Router from './Router/Router';

const Root = () => {
  return (
    <>
      <Router>
        <Page path="/test2" key="test2">
          TEST 2
        </Page>
        <Page path="/" key="test">
          ROOT
        </Page>
      </Router>
    </>
  );
};

export default Root;
