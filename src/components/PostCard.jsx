import { useFavorites } from "../context/FavoritesContext";

function PostCard({ post }) {
  //  ดึงจาก Context แทน props
  const { favorites, toggleFavorite } = useFavorites();

  const isFavorite = favorites.includes(post.id);

  return (
    <div
      style={{
        border: "1px solid #fed7aa",
        borderRadius: "12px",
        padding: "1.2rem",
        marginBottom: "1rem",
        background: "white",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        transition: "0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {/* หัวข้อ + หัวใจ */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "0.5rem",
        }}
      >
        <h3
          style={{
            margin: 0,
            color: "#ea580c",
            fontSize: "1.2rem",
            fontWeight: "600",
          }}
        >
          {post.title}
        </h3>

        {/* ปุ่มหัวใจ */}
        <button
          onClick={() => toggleFavorite(post.id)} 
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1.3rem",
          }}
        >
          {isFavorite ? "🧡" : "🤍"}
        </button>
      </div>

      {/* เส้นคั่น */}
      <div
        style={{
          height: "2px",
          width: "40px",
          background: "#f97316",
          marginBottom: "0.7rem",
          borderRadius: "10px",
        }}
      />

      {/* เนื้อหา */}
      <p
        style={{
          margin: 0,
          color: "#444",
          lineHeight: 1.7,
          fontSize: "0.95rem",
        }}
      >
        {post.body}
      </p>
    </div>
  );
}

export default PostCard;