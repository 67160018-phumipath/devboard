import { useState, useEffect } from "react";
import PostCard from "./PostCard";
import LoadingSpinner from "./LoadingSpinner";

export function PostList({ favorites = [], onToggleFavorite }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error("โหลดโพสต์ไม่สำเร็จครับท่าน");
        const data = await res.json();
        setPosts(data.slice(0, 20));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <LoadingSpinner />;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      {/* ผมเพิ่มหัวข้อ */}
      <h2
        style={{
          color: "#ea580c",
          borderBottom: "2px solid #f97316",
          paddingBottom: "0.5rem",
          marginBottom: "1rem",
        }}
      >
         โพสต์ล่าสุด
      </h2>

      {/* ผมปรับ search ใหม่ครับ */}
      <input
        placeholder="🔍 ค้นหาโพสต์..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "0.6rem",
          border: "1px solid #fdba74",
          borderRadius: "6px",
          marginBottom: "1rem",
          outline: "none",
        }}
      />

      {filtered.length === 0 && <p>ไม่พบโพสต์</p>}

      {filtered.map((post) => {
        const isFav = favorites.includes(post.id);

        return (
          <PostCard
            key={post.id}
            post={post}
            isFavorite={isFav}                 // 🔥 เพิ่ม
            onToggleFavorite={onToggleFavorite} // 🔥 เพิ่ม
          />
        );
      })}
    </div>
  );
}

export default PostList;