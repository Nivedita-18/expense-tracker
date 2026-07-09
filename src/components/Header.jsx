import { FaWallet } from "react-icons/fa";

function Header({ darkMode, setDarkMode }) {
  return (
    <header>
      <h1>
        <FaWallet /> Personal Finance Manager
      </h1>

      <p>Developed by ❤️ Nivedita</p>

      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
}

export default Header;