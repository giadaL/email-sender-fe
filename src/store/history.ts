import { eventChannel, buffers } from 'redux-saga';
import { createBrowserHistory } from 'history';

const BUFFER_LIMIT = 5;

const history = createBrowserHistory();

export function createHistoryChannel() {
  // @ts-ignore
  function subscribe(emitter) {
    const initialLocation = history.location;

    if (initialLocation) {
      emitter(initialLocation);
    }

    return history.listen(({ location }) => {
      emitter(location);
    });
  }

  return eventChannel(subscribe, buffers.fixed(BUFFER_LIMIT));
}

export default history;
