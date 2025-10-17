import React from "react";
import FollowButton from "./FollowButton";
import Post from "./Post";

// JavaScript object and array
const user = {
  name: "Dylan Zhao",
  bio: "AI Researcher | Coding",
  profilePic:
    "https://cdn-icons-png.flaticon.com/512/847/847969.png",
  posts: [
    { id: 1, image: "https://picsum.photos/300?1", likes: 42 },
    { id: 2, image: "https://picsum.photos/300?2", likes: 18 },
  ],
};

// function component
function Profile() {
  return (
    <div className="profile">
      <img
        src={user.profilePic}
        alt="Profile"
        width="100"
        style={{ borderRadius: "50%" }}
      />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      {/* using Follow button component */}
      <FollowButton />

      <h3>Posts</h3>
      {/* using JS map() for generation */}
      {user.posts.map((p) => (
        <Post key={p.id} image={p.image} likes={p.likes} />
      ))}
    </div>
  );
}

export default Profile;
