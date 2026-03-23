import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

function Navbar() {
  const { favorites } = useFavorites();

  return (
    <nav
      style={{
        background: "#1e40af",
        color: "white",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        DevBoard
      </Link>

      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/" style={{ color: "white" }}>Home</Link>
        <Link to="/profile" style={{ color: "white" }}>Users</Link>
        <Link to="/favorites" style={{ color: "white" }}>
          ❤️ {favorites.length}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;