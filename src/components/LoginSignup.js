import React, { useState } from 'react';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold">{isLogin ? 'Login' : 'Sign Up'}</h2>
        </div>
        <form className="space-y-4">
          {!isLogin && (
            <div>
              <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="border border-gray-400 p-2 w-full rounded-md"
                placeholder="Enter your full name"
                required
              />
            </div>
          )}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-400 p-2 w-full rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-400 p-2 w-full rounded-md"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 w-full"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <div className="mt-6 text-center">
          <span className="text-gray-600">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
          </span>
          <a
            href="#"
            onClick={toggleForm}
            className="text-blue-500 hover:text-blue-600 transition-colors duration-300 ml-2"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;