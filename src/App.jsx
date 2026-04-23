import AuthPanel from "./components/AuthPanel";
import ThemePanel from "./components/ThemePanel";
import Profile from "./components/Profile";
import { useTheme } from "./context/ThemeContext";

export default function App() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen p-6 grid gap-4 ${
        theme === "dark"
          ? "dark bg-gray-900 text-white"
          : "bg-white text-black"
      }`}
    >
      <AuthPanel />
      <ThemePanel />
      <Profile />
    </div>
  );
}