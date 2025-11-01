import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "About", href: "/about" },
    { name: "Accessibility", href: "/accessibility" },
    { name: "User Agreement", href: "/user-agreement" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cookie Policy", href: "/cookie-policy" },
    { name: "Copyright Policy", href: "/copyright" },
    { name: "Brand Policy", href: "/brand-policy" },
    { name: "Guest Controls", href: "/guest-controls" },
    { name: "Community Guidelines", href: "/community-guidelines" },
  ];

  return (
    <footer className="bg-white dark:bg-[#1D2226] border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Links Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
            {footerLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 text-sm transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Copyright + Developer Credit */}
          <div className="text-center md:text-right space-y-1">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {currentYear} <span className="font-semibold">Career Social</span>. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Developed with ❤️ by{" "}
              <Link
                href="https://www.linkedin.com/in/aadityabchatterjee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Aaditya B Chatterjee
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
