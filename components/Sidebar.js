import { Avatar } from "@mui/material";
import Image from "next/image";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";

function Sidebar() {
  const { data: session } = useSession();
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="space-y-2 min-w-max max-w-lg">
      {/* Top Section */}
      <div className="bg-white dark:bg-[#1D2226] rounded-lg overflow-hidden relative flex flex-col items-center text-center border border-gray-300 dark:border-none">
        <div className="relative w-full h-14 mb-4">
          <Image
            src="/sidebar.png"
            fill
            priority
            alt="Sidebar background"
            className="object-cover"
          />
        </div>

        <div className="w-full flex flex-col items-center">
          <Link href="/profile" className="flex flex-col items-center w-full">
            <Avatar
              src={session?.user?.image}
              className="!h-14 !w-14 !border-2 !cursor-pointer"
            />
            <div className="mt-2 py-2 text-center w-full">
              <h4 className="hover:underline decoration-purple-700 underline-offset-1 cursor-pointer">
                {session?.user?.name}
              </h4>
              <p className="text-black/60 dark:text-white/75 text-sm">
                {session?.user?.email}
              </p>
            </div>
          </Link>
        </div>

        

        <div className="hidden md:inline text-left dark:text-white/75 text-sm w-full px-4 pb-3">
          <div className="font-medium sidebarButton space-y-0.5">
            <div className="flex justify-between space-x-2">
              <h4>Who viewed your profile</h4>
              <span className="text-blue-500">520</span>
            </div>
            <div className="flex justify-between space-x-2">
              <h4>Views of your post</h4>
              <span className="text-blue-500">2,119</span>
            </div>
          </div>

          <div className="sidebarButton mt-2">
            <h4 className="leading-4 text-xs">
              Access exclusive tools & insights
            </h4>
            <Link href="/subscription">
              <h4 className="dark:text-white font-medium hover:underline cursor-pointer">
                <span className="w-3 h-3 bg-gradient-to-tr from-yellow-700 to-yellow-200 inline-block rounded-sm mr-1" />
                Try Premium for free
              </h4>
            </Link>
          </div>

          <div className="sidebarButton flex items-center space-x-1.5 mt-2">
            <BookmarkOutlinedIcon className="!-ml-1" />
            <h4 className="dark:text-white font-medium">My items</h4>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="hidden md:flex bg-white dark:bg-[#1D2226] text-black/70 dark:text-white/75 rounded-lg overflow-hidden flex-col space-y-2 pt-2.5 sticky top-20 border border-gray-300 dark:border-none px-3 pb-3">
        {/* Main Links */}
        <Link href="/people" className="sidebarLink hover:text-blue-600 dark:hover:text-blue-400">
          People
        </Link>
        <Link href="/newsletters" className="sidebarLink hover:text-blue-600 dark:hover:text-blue-400">
          Newsletters
        </Link>
        <Link href="/jobs" className="sidebarLink hover:text-blue-600 dark:hover:text-blue-400">
          Jobs
        </Link>
        <Link href="/discover" className="sidebarLink hover:text-blue-600 dark:hover:text-blue-400">
          Discover
        </Link>

        {/* Toggleable Section */}
        {showMore && (
          <>
            <p className="sidebarLink hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
              Groups
            </p>
            <p className="sidebarLink hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
              Events
            </p>
            <p className="sidebarLink hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
              Pages
            </p>
            <p className="sidebarLink hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
              Followed Hashtags
            </p>
          </>
        )}

        {/* Discover More Toggle */}
        <div
          className="sidebarButton text-center cursor-pointer hover:bg-gray-100 dark:hover:bg-[#2a2f33] transition-colors"
          onClick={() => setShowMore((prev) => !prev)}
        >
          <h4 className="dark:text-white font-medium text-sm">
            {showMore ? "Show Less" : "Discover More"}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
