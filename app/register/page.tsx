"use client";

import React, { useState } from "react";
import { useRegister } from "@/hooks/useRegister";
import { useRouter } from "next/navigation";

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  //   const [role, setRole] = useState("user");
  const [error, setError] = useState("");
  const router = useRouter();

  const mutation = useRegister((token: string) => {
    localStorage.setItem("token", token);
    router.push("/");
  }, setError);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ email, password, name });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl mb-6 text-center text-teal-700">Register</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block mb-2 text-black">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-black">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-black">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
            required
          />
        </div>
        {/* <div className="mb-4">
          <label className="block mb-2 text-black">Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div> */}
        <button
          type="submit"
          className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 w-full"
        >
          Register
        </button>
        <p className="mt-4 text-center text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="text-teal-500 hover:underline">
            Click here to login
          </a>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
