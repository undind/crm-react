import { applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';

const middlewares = (history: History) =>
    applyMiddleware(
        routerMiddleware(history),
    );

export default middlewares;