import React, { useState } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        {/* Header with toggle button */}
        <header className="flex justify-between items-center p-6 shadow-md bg-white dark:bg-gray-800">
          <h1 className="text-xl font-semibold">My Profile</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </header>

        {/* Profile Section */}
        <main className="flex items-center justify-center p-6">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 max-w-md w-full">
            <div className="flex flex-col items-center text-center">
              <img
                className="w-20 h-24 rounded-full border-4 border-gray-300 dark:border-gray-600"
                src="https://aadityadav.netlify.app/static/media/HEROIMAGE.6612d6650b0137e65dfa.png"
                alt="Profile"
              />
              <h2 className="mt-4 text-2xl font-semibold">John Doe</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Software Engineer @ Tech Company
              </p>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-300 font-medium">Email:</span>
                <span>johndoe@example.com</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-300 font-medium">Location:</span>
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-300 font-medium">Member Since:</span>
                <span>Jan 2022</span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition">
                Edit Profile
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
