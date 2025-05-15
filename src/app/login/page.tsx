"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-900 shadow-2xl rounded-xl p-8 max-w-sm w-full text-center border border-gray-800"
      >
        <h2 className="text-3xl font-bold mb-4 text-white">Login</h2>
        <p className="text-gray-400 mb-6">Sign in to access your dashboard</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="mt-4 w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white rounded-lg shadow-lg transition-all duration-300"
          >
            Login
          </motion.button>
        </form>

        <div className="my-4 text-gray-500">OR</div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          className="w-full flex items-center justify-center space-x-3 p-3 bg-white/10 border border-gray-700 rounded-lg text-white hover:bg-white/20 transition duration-300"
        >
          <FaGoogle className="text-red-500" />
          <span>Sign in with Google</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
          className="mt-4 w-full flex items-center justify-center space-x-3 p-3 bg-white/10 border border-gray-700 rounded-lg text-white hover:bg-white/20 transition duration-300"
        >
          <FaGithub className="text-white" />
          <span>Sign in with GitHub</span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default LoginPage;
