import React from 'react';
import BottomPage from './BottomPage';
import NavBar from './NavBar';
import TopPage from './TopPage';

const LoginPage = () => {
  return (
    <div
      style={{
        background: "url('https://as2.ftcdn.net/v2/jpg/03/73/16/85/1000_F_373168575_jg2k6kn0kfacCNOoU9vyExQ2Lf8DiQuH.jpg') no-repeat center center fixed",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        backgroundSize: "cover",
      }}>
      <TopPage />
      <NavBar />
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-md w-full p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Log In</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input type="email" id="email" name="email" className="border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 rounded-md w-full py-2 px-3" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
              <input type="password" id="password" name="password" className="border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 rounded-md w-full py-2 px-3" />
            </div>
            <div className="flex items-center justify-between">
              <button type="submit" className="bg-indigo-500 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Log In</button>
              <a href="#" className="text-indigo-500 font-medium hover:text-indigo-600">Forgot Password?</a>
            </div>
          </form>
        </div>
      </div>
      <BottomPage />
    </div>

  );
};

export default LoginPage;
