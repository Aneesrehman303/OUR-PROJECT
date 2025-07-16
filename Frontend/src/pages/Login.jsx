import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import heroimage from '../assets/uneza-bg.jpg'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // reset before new request

    try {
      // Mocking axios-like response
      const response = {
        data: {
          success: true,
          token: "mock-jwt-token",
          message: "Login successful!",
        },
      };

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        navigate("/");
      }

      setMessage(response.data.message || "Login successful!");
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroimage})`,
      }}
    >
      {/* Backdrop blur overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

      {/* Login Card */}
      <div className="relative w-full max-w-md bg-white/30 backdrop-blur-sm p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

        {message && (
          <div className="mb-4 text-center text-sm text-red-500">{message}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="Enter Email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="Enter Password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 transform hover:scale-[1.01]"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline font-medium">
            Signup
          </Link>
        </p>
        
                    <p className="mt-4 text-center text-sm text-gray-600">
                    Go to Home Page{" "}
                    <Link to="/" className="text-blue-600 hover:underline">
                      Skip
                    </Link>
                  </p>
      </div>
    </div>
  );
};

export default Login;