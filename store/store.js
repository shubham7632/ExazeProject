import { createStore, combineReducers } from 'redux';
import userNameReducer from '../reducer/reducer';

const rootReducer = combineReducers(
    { userNameReducer: userNameReducer }
);
const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;