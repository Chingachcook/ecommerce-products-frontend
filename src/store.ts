import { createStore } from 'redux';
import reducer from './reducers/pizzasReducer';

export const store = createStore(reducer);