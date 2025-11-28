// pages/404.js
import Link from "next/link";
import { FaGhost } from "react-icons/fa"; // Changed icon to a more relevant 'ghost' or similar

const NotFound = () => {
  return (
    // The main container now uses min-h-screen but removes the distracting gradient.
    // It implies a clean, white/light-mode background by default.
    <div className="flex items-center justify-center min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 p-4">
      
      {/* --- Main Content Card --- */}
      <div className="text-center p-10 max-w-lg w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 transition duration-500">
        
        {/* --- Icon and Error Code --- */}
        <div className="flex flex-col items-center mb-6">
          <FaGhost className="text-7xl mb-4 text-[#80b1fb] dark:text-indigo-400 animate-pulse" />
          <p className="text-sm font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400">Error Code</p>
          <h1 className="text-8xl font-extrabold text-gray-900 dark:text-gray-100 mt-1">404</h1>
        </div>

        {/* --- Title and Description --- */}
        <h2 className="text-3xl font-bold mb-3 text-red-500 dark:text-red-400">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          The requested page seems to have vanished into the digital abyss.
          <br className="hidden sm:block" /> Don't worry, we'll guide you back.
        </p>
        
        {/* --- Call-to-Action (CTA) --- */}
        <Link
          href="/"
          className="inline-block px-8 py-3 text-lg font-semibold text-white bg-[#80b1fb] rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Return to Homepage
        </Link>
        
        {/* --- Optional Helper Link (e.g., Support) --- */}
        {/* <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          Or, if you think this is an error, try checking our
          <a href="/sitemap" className="ml-1 text-[#80b1fb] hover:text-indigo-600 font-medium transition duration-300">
            Site Map
          </a>.
        </p> */}

      </div>
    </div>
  );
};

export default NotFound;