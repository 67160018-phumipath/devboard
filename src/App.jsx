import { useState } from "react";
import PostList from "./components/PostList";
import UserList from "./components/UserList";

function App() {
  const [favorites, setFavorites] = useState([]);

  function toggle(id) {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  }

  return (
    <div>
      <h1>DevBoard ❤️ {favorites.length}</h1>

      <div
        style={{
          maxWidth: "900px",
          margin: "2rem auto",
          padding: "0 1rem",
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "2rem",
        }}
      >
        <div>
          <PostList
            favorites={favorites}
            onToggleFavorite={toggle}
          />
        </div>

        <div>
          <UserList />
        </div>
      </div>
    </div>
  );
}

export default App;