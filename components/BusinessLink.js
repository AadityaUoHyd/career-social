"use client";

import Link from "next/link";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { usePathname } from 'next/navigation';

function BusinessLink() {
  const pathname = usePathname();
  const isActive = pathname === '/business';

  return (
    <Link
      href="/business"
      className={`flex flex-col items-center justify-center ${
        isActive 
          ? "!text-black dark:!text-white" 
          : "text-black/60 hover:text-black dark:text-white/75 dark:hover:text-white"
      }`}
    >
      <div className="flex flex-col items-center">
        <AppsOutlinedIcon className="!h-7 !w-7 lg:!-mb-1" />
        <span className="text-sm">Business</span>
      </div>
      {isActive && (
        <span className="hidden lg:inline-flex h-1 w-full bg-black dark:bg-white rounded-t"></span>
      )}
    </Link>
  );
}

export default BusinessLink;
