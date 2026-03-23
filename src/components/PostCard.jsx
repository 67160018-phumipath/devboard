import { useFavorites } from "../context/FavoritesContext";

function PostCard({ post }) {
  const { favorites, toggleFavorite } = useFavorites();

  const isFavorite = favorites.includes(post.id);

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>

      <button onClick={() => toggleFavorite(post.id)}>
        {isFavorite ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

export default PostCard;