import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

function Navbar() {
  const { favorites } = useFavorites();

  return (
    <nav
      style={{
        background: "#f97316",// แก้ ให้เป็นสีส้ม
        color: "white",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        DevBoard
      </Link>

      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>Home</Link>
        <Link to="/profile" style={{ textDecoration: "none", color: "white" }}>Users</Link>
        <Link to="/favorites" style={{ textDecoration: "none", color: "white" }}>
          ❤️ {favorites.length}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;