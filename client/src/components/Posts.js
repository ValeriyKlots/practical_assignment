// PhotoForm.js
import React, { useState } from 'react';

const Posts = () => {
    const [photo, setPhoto] = useState(null);
    const [description, setDescription] = useState('');
    const [comments, setComments] = useState([]);
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);

    const handlePhotoChange = (e) => {
        const selectedPhoto = e.target.files[0];
        setPhoto(selectedPhoto);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleAddComment = (comment) => {
        setComments([...comments, comment]);
    };

    const handleLike = () => {
        setLikeCount(likeCount + 1);
    };

    const handleDislike = () => {
        setDislikeCount(dislikeCount + 1);
    };

    return (
        <div>
            <h2>Photo Form</h2>
            <label htmlFor="photoInput">
                <img
                    src='JPEG-File-icon.png' // Замените это на путь к вашему изображению для выбора файла
                    alt="Select Photo"
                    style={{ cursor: 'pointer', maxWidth: '100%' }}
                />
                <input type="file" id="photoInput" accept="image/*" onChange={handlePhotoChange} style={{ display: 'none' }} />
            </label>
            {photo && <img src={URL.createObjectURL(photo)} alt="Selected" style={{ maxWidth: '100%' }} />}
            Value: {likeCount - dislikeCount}

                <img
                    src='bxs-like-icon.png'
                    alt="Like"
                    style={{ cursor: 'pointer', maxWidth: '50px' }}
                    onClick={handleLike}
                />
                <img
                    src="bxs-dislike-icon.png"
                    alt="Dislike"
                    style={{ cursor: 'pointer', maxWidth: '50px' }}
                    onClick={handleDislike}
                />

            <div>
            <label htmlFor="descriptionInput">Description:</label>
                <textarea id="descriptionInput" value={description} onChange={handleDescriptionChange} style={{ width: '50%' }} />
            </div>
            <div>
                <h3>Comments:</h3>
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>{comment}</li>
                    ))}
                </ul>
                <input
                    type="text"
                    placeholder="Add a comment..."
                    onKeyDown={(e) => e.key === 'Enter' && handleAddComment(e.target.value)}
                    style={{ width: '50%' }}
                />
            </div>
        </div>
    );
};
export default Posts;