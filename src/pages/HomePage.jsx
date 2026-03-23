import PostList from "../components/PostList";
import AddPostForm from "../components/AddPostForm";

function HomePage() { // จัดหน้าใหม่
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "2rem auto",
        padding: "1rem",
        background: "#fff7ed",
        borderRadius: "10px",
      }}
    >
      <h1 style={{ color: "#ea580c", marginBottom: "1rem" }}>
        🧡 DevBoard
      </h1>

      <AddPostForm onAddPost={() => {}} />

      <PostList />
    </div>
  );
}

export default HomePage;