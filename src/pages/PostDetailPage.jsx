import { useParams } from "react-router-dom";

function PostDetailPage() {
  const { id } = useParams();

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Post Detail</h2>
      <p>Post ID: {id}</p>
    </div>
  );
}

export default PostDetailPage;