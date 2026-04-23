import { useAuth } from "../context/AuthContext";

export default function AuthPanel() {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div className="p-4 border rounded-xl bg-gray-200 dark:bg-gray-800">
      <h2 className="text-lg font-bold mb-2">Auth</h2>
      <p>
        {isAuthenticated ? "Welcome back!" : "Please log in"}
      </p>
      <button onClick={login} className="mr-2 mt-2 px-3 py-1 bg-green-500 text-white rounded">
        Login
      </button>
      <button onClick={logout} className="mt-2 px-3 py-1 bg-red-500 text-white rounded">
        Logout
      </button>
    </div>
  );
}