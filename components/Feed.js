import { useEffect, useState, useCallback } from "react";
import Input from "./Input";
import Post from "./Post";
import { useStore } from "../store/store";

function Feed({ posts: initialPosts }) {
  const [realtimePosts, setRealtimePosts] = useState(initialPosts);
  const { handlePost, setHandlePost, useSSRPosts, setUseSSRPosts } = useStore();

  const fetchPosts = useCallback(async () => {
    try {
      const response = await fetch("/api/posts", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }

      const responseData = await response.json();
      setRealtimePosts(responseData);
      setHandlePost(false);
      setUseSSRPosts(false);
    } catch (error) {
      console.error('Error fetching posts:', error);
      // Fall back to initial posts if there's an error
      setRealtimePosts(initialPosts);
      setUseSSRPosts(true);
    }
  }, [setHandlePost, setUseSSRPosts, initialPosts]);

  useEffect(() => {
    // Only fetch posts if handlePost is true
    if (handlePost) {
      fetchPosts();
    }
  }, [handlePost, fetchPosts]);

  // Initial data fetch on component mount
  useEffect(() => {
    if (useSSRPosts && initialPosts) {
      setRealtimePosts(initialPosts);
    } else if (!useSSRPosts || !initialPosts?.length) {
      fetchPosts();
    }
  }, [useSSRPosts, initialPosts, fetchPosts]);

  return (
    <div className="space-y-6 pb-24 max-w-lg">
      <Input />
      {/* Posts */}
      {(!useSSRPosts && realtimePosts?.length > 0)
        ? realtimePosts.map((post) => <Post key={post._id} post={post} />)
        : (initialPosts?.length > 0 ? initialPosts : realtimePosts || []).map((post) => (
            <Post key={post._id} post={post} />
          ))}
    </div>
  );
}

export default Feed;
