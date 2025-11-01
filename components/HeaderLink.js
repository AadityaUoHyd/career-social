import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

function HeaderLink({ Icon, text, feed, active, avatar, hidden, href = "#" }) {
  const { data: session } = useSession();

  if (avatar) {
    return (
      <div className={`flex flex-col items-center ${hidden ? 'hidden md:flex' : 'flex'}`}>
        <button 
          onClick={() => signOut()} 
          className="flex flex-col items-center"
          aria-label="Sign out"
        >
          <div className={`flex flex-col items-center ${feed ? 'space-y-1' : ''}`}>
            {session?.user?.image ? (
              <div className="relative h-7 w-7 lg:-mb-1">
                <Image 
                  src={session.user.image} 
                  alt="User avatar"
                  fill
                  className="rounded-full object-cover"
                  sizes="28px"
                />
              </div>
            ) : (
              <Icon className="!h-7 !w-7 lg:!-mb-1" />
            )}
            <span className="text-sm">{text}</span>
          </div>
        </button>
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={`flex flex-col items-center justify-center ${
        feed
          ? "text-black/60 hover:text-black dark:text-white/75 dark:hover:text-white lg:-mb-1.5"
          : "text-gray-500 hover:text-gray-700"
      } ${active ? "!text-black dark:!text-white" : ""}`}
    >
      <div className={`flex flex-col items-center ${feed ? 'space-y-1' : ''}`}>
        <Icon className="!h-7 !w-7 lg:!-mb-1" />
        <span className="text-sm">{text}</span>
      </div>
      {active && (
        <span className="hidden lg:inline-flex h-0.5 w-[calc(100%+20px)] bg-black dark:bg-white rounded-t-full" />
      )}
    </Link>
  );
}

export default HeaderLink;