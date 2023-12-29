import { createStore, combineReducers } from 'redux';
import postReducer from './redux/reducers/postReducer';

const rootReducer = combineReducers({
    post: postReducer,
    // Add other reducers as needed
});

const store = createStore(rootReducer);

export default store;