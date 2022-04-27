import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Root from './components/routes/Root';
import * as serviceWorker from './serviceWorker';
import './index.less';
import { store } from './store';

const App = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
