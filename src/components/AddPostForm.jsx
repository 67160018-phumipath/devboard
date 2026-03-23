import { useState } from "react";

function AddPostForm({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !body) return;

    onAddPost({ title, body });
    setTitle("");
    setBody("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="หัวข้อ" />
      <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="เนื้อหา" />
      <button type="submit">โพสต์</button>
    </form>
  );
}
export default AddPostForm;