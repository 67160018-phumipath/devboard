import { useFavorites } from "../context/FavoritesContext";

function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>ยังไม่มีโพสต์ที่ถูกใจ</p>
      ) : (
        <ul>
          {favorites.map((id) => (
            <li key={id}>Post ID: {id}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoritesPage;