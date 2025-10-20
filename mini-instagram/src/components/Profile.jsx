import React from "react";
import FollowButton from "./FollowButton";
import Post from "./Post";
import profileImage from "../assets/1742611985634.jpeg";

// JavaScript object and array
const user = {
  name: "Dylan Zhao",
  bio: "AI Researcher | Coding",
  profilePic: profileImage,
  posts: [
    { id: 1, image: "https://picsum.photos/seed/1/400/400", likes: 42 },
    { id: 2, image: "https://picsum.photos/seed/2/400/400", likes: 18 },
    { id: 3, image: "https://picsum.photos/seed/3/400/400", likes: 25 },
    { id: 4, image: "https://picsum.photos/seed/4/400/400", likes: 67 },
    { id: 5, image: "https://picsum.photos/seed/5/400/400", likes: 10 },
    { id: 6, image: "https://picsum.photos/seed/6/400/400", likes: 91 },
    { id: 7, image: "https://picsum.photos/seed/7/400/400", likes: 33 },
    { id: 8, image: "https://picsum.photos/seed/8/400/400", likes: 5 },
  ],
};

// function component
function Profile() {
  return (
    <div className="profile">
      <div className="profile-header">
        <img className="avatar" src={user.profilePic} alt="Profile" />
        <div className="profile-meta">
          <h2 className="username">{user.name}</h2>
          <p className="description">{user.bio}</p>
          <div className="actions">
            <FollowButton />
          </div>
        </div>
      </div>

      <h3 className="posts-heading">Posts</h3>
      <div className="posts-grid">
        {user.posts.map((p) => (
          <Post key={p.id} image={p.image} likes={p.likes} />
        ))}
      </div>
    </div>
  );
}

export default Profile;
