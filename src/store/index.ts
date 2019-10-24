import { createStore } from 'redux';

import reducers from './reducers';

const store = createStore(
  reducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => {
  const { settings } = store.getState();
  const JSONsettings = JSON.stringify(settings);
  localStorage.setItem('settings', JSONsettings);
});

export default store;
