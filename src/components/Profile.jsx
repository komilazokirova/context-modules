import { useState } from "react";
import { useUser } from "../context/UserContext";

export default function Profile() {
  const { user, updateUser } = useUser();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ name, email });
  };

  return (
    <div className="p-4 border rounded-xl">
      <h2 className="text-lg font-bold mb-2">Profile</h2>
      <p>Welcome, {user.name}</p>
      <p>Email: {user.email}</p>

      <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="border p-1 rounded"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border p-1 rounded"
        />
        <button className="bg-purple-500 text-white px-3 py-1 rounded">
          Save
        </button>
      </form>
    </div>
  );
}