import PostCard from "./PostCard";

function PostList({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}

export default PostList;