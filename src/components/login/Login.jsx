import React from "react";
import { FaPlus } from "react-icons/fa6";

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen bg-loginBackground">
      <main className="flex flex-col md:flex-row flex-grow items-center justify-center gap-8 md:gap-24 p-4">
        <div className="flex flex-col text-center md:text-left justify-center mb-8 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold text-facebook mb-4">
            facebook
          </h1>
          <p className="text-lg md:text-2xl">
            Connect with friends and the world{" "}
            <br className="hidden md:block" />
            around you on Facebook.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full md:w-96 h-auto p-6 bg-white rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Email or phone number"
            id="username"
            className="border border-gray-300 p-3 w-full mb-4 rounded-md focus:outline-none"
            required
            minLength={3}
            maxLength={15}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="border border-gray-300 p-3 w-full mb-4 rounded-md focus:outline-none"
            required
            minLength={8}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md w-full">
            Log In
          </button>
          <a href="#" className="text-blue-600 mt-4 hover:underline">
            Forgot Password?
          </a>
          <hr className="my-4 w-full border-gray-300" />
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md w-full">
            Create New Account
          </button>
        </div>
      </main>
      <footer className="bg-white py-6 mt-8 md:mt-0">
        <div className="flex justify-center">
          <div className="w-4/5 md:w-1/2 flex items-center text-left border-b border-gray-300 pb-3">
            <div className="flex flex-wrap gap-4 text-xs text-gray-500 justify-center md:justify-start">
              <a href="#">English (US)</a>
              <a href="#">Español</a>
              <a href="#">Français (France)</a>
              <a href="#">中文(简体)</a>
              <a href="#">العربية</a>
              <a href="#">Português (Brasil)</a>
              <a href="#">Italiano</a>
              <a href="#">한국어</a>
              <a href="#">Deutsch</a>
              <a href="#">हिन्दी</a>
              <a href="#">日本語</a>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-4/5 md:w-1/2 flex items-center text-left pt-3">
            <div className="flex gap-3 text-xs text-gray-500 flex-wrap justify-center md:justify-start">
              <a href="#">Sign Up</a>
              <a href="#">Log In</a>
              <a href="#">Messenger</a>
              <a href="#">Facebook Lite</a>
              <a href="#">Video</a>
              <a href="#">Places</a>
              <a href="#">Games</a>
              <a href="#">Marketplace</a>
              <a href="#">Meta Pay</a>
              <a href="#">Meta Store</a>
              <a href="#">Meta Quest</a>
              <a href="#">Meta AI</a>
              <a href="#">Instagram</a>
              <a href="#">Threads</a>
              <a href="#">Fundraisers</a>
              <a href="#">Services</a>
              <a href="#">Voting Information Center</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Consumer Health Privacy</a>
              <a href="#">Privacy Center</a>
              <a href="#">Groups</a>
              <a href="#">About</a>
              <a href="#">Create Ad</a>
              <a href="#">Create Page</a>
              <a href="#">Developers</a>
              <a href="#">Careers</a>
              <a href="#">Cookies</a>
              <a href="#">Ad Choices</a>
              <a href="#">Terms</a>
              <a href="#">Help</a>
              <a href="#">Contact Uploading & Non-Users</a>
              <a href="#">Settings</a>
              <a href="#">Activity Log</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
