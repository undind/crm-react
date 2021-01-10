import { applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();

const middlewares = (history: History) => applyMiddleware(routerMiddleware(history), sagaMiddleware);

export default middlewares;
