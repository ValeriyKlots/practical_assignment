// src/components/PostList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/postActions';

const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.post.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <div>
            {/* Render the list of posts */}
        </div>
    );
};

export default PostList;