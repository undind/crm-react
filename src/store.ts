import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createRootReducer from './redux/reducers';
// import middlewares from './redux/middlewares';
import { history } from './history';

export const store = createStore(
    createRootReducer(history),
    composeWithDevTools(),
);

export default store;