// src/actions/postActions.js
export const fetchPosts = () => {
    // Fetch posts from the server
};

export const addPost = (post) => {
    // Add a new post on the server
};



// src/store.js
import { createStore, combineReducers } from 'redux';
import postReducer from './postReducer';

const rootReducer = combineReducers({
    post: postReducer,
    // Add other reducers as needed
});

const store = createStore(rootReducer);

export default store;