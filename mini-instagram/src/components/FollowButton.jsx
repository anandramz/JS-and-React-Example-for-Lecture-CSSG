import React, { useState } from "react";

// useState for controlling button state
function FollowButton() {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <button
      onClick={() => setIsFollowing(!isFollowing)} // inverse state
      style={{
        background: isFollowing ? "#ddd" : "#0095f6",
        color: "white",
        border: "none",
        borderRadius: "5px",
        padding: "8px 16px",
        marginTop: "10px",
      }}
    >
      {/* ternary operator */}
      {isFollowing ? "Following" : "Follow"}
    </button>
  );
}

export default FollowButton;
