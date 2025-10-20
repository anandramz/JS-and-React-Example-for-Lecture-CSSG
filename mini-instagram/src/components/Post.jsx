import React, { useState } from "react";

// useState is React Hook
function Post({ image, likes }) {
  const [likeCount, setLikeCount] = useState(likes);

  // arrow function from JS
  const handleLike = () => setLikeCount(likeCount + 1);

  return (
    <div className="post">
      <img src={image} width="100%" alt="Post" />
      <p className="likes">❤️ {likeCount} likes</p>
      <button className="like-button" onClick={handleLike}>Like</button>
    </div>
  );
}

export default Post;
