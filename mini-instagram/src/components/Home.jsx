import React from "react";
import Post from "./Post";

// Home component with multiple posts
function Home() {
  // Sample posts data for the home feed
  const posts = [
    { id: 1, image: "https://picsum.photos/seed/home1/400/400", likes: 42 },
    { id: 2, image: "https://picsum.photos/seed/home2/400/400", likes: 18 },
    { id: 3, image: "https://picsum.photos/seed/home3/400/400", likes: 25 },
    { id: 4, image: "https://picsum.photos/seed/home4/400/400", likes: 67 },
    { id: 5, image: "https://picsum.photos/seed/home5/400/400", likes: 10 },
    { id: 6, image: "https://picsum.photos/seed/home6/400/400", likes: 91 },
  ];

  return (
    <div className="home">
      <h1 className="home-title">Instagram Feed</h1>
      <div className="home-posts">
        {posts.map((post) => (
          <Post key={post.id} image={post.image} likes={post.likes} />
        ))}
      </div>
    </div>
  );
}

export default Home;
