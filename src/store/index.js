import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';

const enhencer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const store = createStore(rootReducer, enhencer);

export default store;
