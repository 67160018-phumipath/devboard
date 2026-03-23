import { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

export function CommentList({ postId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchComments() {
      try {
        setLoading(true);
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        if (!res.ok) throw new Error("ดึงความคิดเห็นไม่สำเร็จ");
        const data = await res.json();
        setComments(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchComments();
  }, [postId]);

  if (loading) return <p>กำลังโหลดความคิดเห็น...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <strong>ความคิดเห็น ({comments.length})</strong>
      {comments.map((c) => (
        <div key={c.id} style={{ marginTop: "5px" }}>
          <b>{c.name}</b>
          <p>{c.body}</p>
        </div>
      ))}
    </div>
  );
}
export default CommentList;