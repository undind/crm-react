import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createRootReducer from './redux/reducers';
import middlewares, { sagaMiddleware } from './redux/middlewares';
import { history } from './history';

import rootSaga from './redux/saga';

export const store = createStore(createRootReducer(history), composeWithDevTools(middlewares(history)));

sagaMiddleware.run(rootSaga);

export default store;
