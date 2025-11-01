import Link from 'next/link';

export default function PolicyLayout({ title, children, lastUpdated = 'October 2025' }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1D2226] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
            {title}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Last updated: {lastUpdated}
          </p>
        </div>

        <div className="bg-white dark:bg-[#252A2E] rounded-lg shadow-md p-6 mb-8">
          {children}
        </div>

        <div className="text-center">
          <Link 
            href="/" 
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
