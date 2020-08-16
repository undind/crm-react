import { createSelector } from 'reselect';
import { RootStateOrAny } from 'react-redux';

const userSelector = (state: RootStateOrAny) => state.user;
export const userSelectState = createSelector([userSelector], user => {
    const token = user.token;
    return token;
});