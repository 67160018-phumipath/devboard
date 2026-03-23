import { useState } from "react";
import CommentList  from "./CommentList";

export function PostCard({ post, isFavorite, onToggleFavorite }) {
  const [show, setShow] = useState(false);

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>

      <button onClick={onToggleFavorite}>
        {isFavorite ? "❤️" : "🤍"}
      </button>

      <button onClick={() => setShow(!show)}>
        {show ? "ซ่อน" : "ดูคอมเมนต์"}
      </button>

      {show && <CommentList postId={post.id} />}
    </div>
  );
}

export default PostCard;