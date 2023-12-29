const apiUrl = 'http://localhost:3000/api/posts';

export const getPosts = () => {
    return fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => data);
};

export const addPost = (post) => {
    return fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    })
        .then((response) => response.json())
        .then((data) => data);
};