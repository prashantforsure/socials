
import axios from "axios";
import { useState } from "react";

const FollowButton = ({ userId, isFollowing, setIsFollowing }) => {
  const [loading, setLoading] = useState(false);

  const handleFollow = async () => {
    setLoading(true);
    if (isFollowing) {
      await axios.post(`/api/users/unfollow`, { userId });
      setIsFollowing(false);
    } else {
      await axios.post(`/api/users/follow`, { userId });
      setIsFollowing(true);
    }
    setLoading(false);
  };

  return (
    <button
      onClick={handleFollow}
      className={`px-4 py-2 rounded-md ${
        isFollowing ? "bg-red-500" : "bg-blue-500"
      } text-white`}
      disabled={loading}
    >
      {loading ? "Processing..." : isFollowing ? "Unfollow" : "Follow"}
    </button>
  );
};

export default FollowButton;
