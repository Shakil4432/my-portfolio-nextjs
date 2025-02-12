"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaGoogle, FaGithub } from "react-icons/fa";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      alert("Invalid email or password");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Login</h2>
        <p className="text-gray-500 mb-6">Sign in to access your dashboard</p>

        {/* Email & Password Login */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="my-4 text-gray-500">OR</div>

        {/* Social Logins */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          className="w-full flex items-center justify-center space-x-3 p-3 border rounded-lg text-gray-700 hover:bg-gray-100 transition duration-300"
        >
          <FaGoogle className="text-red-500" />
          <span>Sign in with Google</span>
        </button>

        <button
          onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
          className="mt-4 w-full flex items-center justify-center space-x-3 p-3 border rounded-lg text-gray-700 hover:bg-gray-100 transition duration-300"
        >
          <FaGithub className="text-black" />
          <span>Sign in with GitHub</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
