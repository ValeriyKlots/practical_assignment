// src/reducers/postReducer.js
const initialState = {
    posts: [],
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        // Handle different post-related actions
        default:
            return state;
    }
};

export default postReducer;