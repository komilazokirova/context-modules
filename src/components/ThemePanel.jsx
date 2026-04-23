import { useTheme } from "../context/ThemeContext";

export default function ThemePanel() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-4 border rounded-xl">
      <h2 className="text-lg font-bold mb-2">Theme</h2>
      <p>Current: {theme}</p>
      <button onClick={toggleTheme} className="mt-2 px-3 py-1 bg-blue-500 text-white rounded">
        Toggle Theme
      </button>
    </div>
  );
}