import Image from "next/image";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HeaderLink from "./HeaderLink";
import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import ExploreIcon from "@mui/icons-material/Explore";
import { Avatar } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router';
import Link from 'next/link';
import BusinessLink from "./BusinessLink";

// Custom hook to handle clicks outside of a component
function useOutsideAlerter(ref, setShowDropdown) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setShowDropdown]);
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

function Header() {
  const [mounted, setMounted] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const { data: session } = useSession();
  const router = useRouter();
  const isAuthPage = ['/login', '/register'].includes(router.pathname);
  const dropdownRef = useRef(null);
  
  useOutsideAlerter(dropdownRef, setShowDropdown);

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  // Don't show header on auth pages
  if (isAuthPage) return null;

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-[#1D2226] flex items-center justify-between py-1.5 px-3 sm:px-4 border-b border-gray-200 dark:border-gray-700">
  {/* Left - Logo */}
  <div className="flex items-center space-x-2 sm:space-x-3 w-full max-w-3xl">
    <div className="flex-shrink-0 flex items-center">
      <Link href="/" className="flex items-center">
        <div className="relative w-7 h-7 sm:w-8 sm:h-8">
          <Image 
            src="/logo.png" 
            alt="Career Social Logo" 
            fill 
            className="object-contain" 
            sizes="(max-width: 640px) 28px, 32px"
          />
        </div>
        <p className="ml-1.5 sm:ml-2 text-base sm:text-lg font-bold text-blue-700 dark:text-blue-400 whitespace-nowrap">
          Career Social
        </p>
      </Link>
    </div>

    {/* Search - Only show on medium screens and up when logged in */}
    {session && (
      <div className="hidden md:flex items-center space-x-2 dark:bg-gray-700 py-1.5 px-3 rounded flex-1 max-w-md">
        <SearchRoundedIcon className="text-gray-500 text-lg" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent text-sm focus:outline-none placeholder-black/70 dark:placeholder-white/75 w-full"
        />
      </div>
    )}
  </div>

  {/* Right - Navigation */}
  <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">
    {session ? (
      // Logged in navigation
      <>
        <div className="hidden sm:flex items-center space-x-1 sm:space-x-2 md:space-x-4">
          <HeaderLink Icon={HomeRoundedIcon} text="Home" feed active={router.pathname === '/'} href="/" />
          <HeaderLink Icon={GroupIcon} text="Network" feed active={router.pathname === '/network'} href="/network" />
          <HeaderLink Icon={BusinessCenterIcon} text="Jobs" feed active={router.pathname === '/jobs'} href="/jobs" />
          <HeaderLink Icon={ChatIcon} text="Messaging" feed active={router.pathname === '/messaging'} href="/messaging" />
          <HeaderLink Icon={NotificationsIcon} text="Notifications" feed active={router.pathname === '/notifications'} href="/notifications" />
        </div>
        
        {/* Mobile menu button */}
        <div className="sm:hidden">
          <button 
            onClick={() => setShowDropdown(!showDropdown)}
            className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop profile dropdown */}
        <div className="hidden sm:block relative" ref={dropdownRef}>
          <button 
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center space-x-1 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Avatar 
              src={session?.user?.image} 
              className="h-8 w-8 rounded-full"
              alt="Profile"
            />
          </button>
          
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50">
              <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                Profile
              </Link>
              <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                Settings
              </Link>
              <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
              <button 
                onClick={() => signOut({ callbackUrl: '/login' })}
                className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/50"
              >
                Sign out
              </button>
            </div>
          )}
        </div>
        
        <div className="hidden sm:block">
          <BusinessLink />
        </div>
      </>
    ) : (
      // Logged out navigation
      <>
        <Link 
          href="/login"
          className="py-4 text-blue-700 font-semibold rounded-full border border-blue-700 px-3 sm:px-5 py-1 sm:py-1.5 text-sm sm:text-base transition-all hover:border-2"
        >
          Sign in
        </Link>
      </>
    )}

    {/* Dark mode toggle */}
    {mounted && (
      <div
        className={`bg-gray-600 flex items-center px-0.5 rounded-full h-6 w-12 cursor-pointer flex-shrink-0 relative ${
          resolvedTheme === "dark" ? "justify-end" : "justify-start"
        }`}
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        aria-label="Toggle dark mode"
      >
        <span className="absolute left-0 text-xs">🌜</span>
        <motion.div
          className="w-5 h-5 bg-white rounded-full z-40"
          layout
          transition={spring}
        />
        <span className="absolute right-0.5 text-xs">🌞</span>
      </div>
    )}
  </div>

  {/* Mobile menu */}
  {showDropdown && session && (
    <div className="sm:hidden absolute top-16 right-0 left-0 bg-white dark:bg-[#1D2226] shadow-lg py-2 z-50">
      <Link href="/profile" className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
        Profile
      </Link>
      <Link href="/settings" className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
        Settings
      </Link>
      <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
      <button 
        onClick={() => signOut({ callbackUrl: '/login' })}
        className="w-full text-left px-4 py-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/50"
      >
        Sign out
      </button>
    </div>
  )}
</header>
  );
}

export default Header;
