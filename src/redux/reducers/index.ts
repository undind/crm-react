import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import user from './users';

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    user,
  });

export default createRootReducer;
