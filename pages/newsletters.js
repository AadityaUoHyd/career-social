import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

const Newsletters = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-[#1D2226]">
        <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
          Loading...
        </p>
      </div>
    );
  }

  const categories = [
    { id: "all", name: "All" },
    { id: "technology", name: "Technology" },
    { id: "business", name: "Business" },
    { id: "career", name: "Career Growth" },
    { id: "leadership", name: "Leadership" },
    { id: "productivity", name: "Productivity" },
  ];

  const newsletters = [
  {
    id: 1,
    title: "The Daily Byte",
    description: "Daily tech news and insights delivered to your inbox.",
    category: "technology",
    subscribers: "125K",
    frequency: "Daily",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "Career Compass",
    description: "Weekly career advice and job search strategies.",
    category: "career",
    subscribers: "89K",
    frequency: "Weekly",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    featured: true,
  },
  {
    id: 3,
    title: "Business Brief",
    description: "Latest business trends and market analysis.",
    category: "business",
    subscribers: "210K",
    frequency: "Weekdays",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
  },
  {
    id: 4,
    title: "Productivity Hacks",
    description: "Tools and techniques to boost your productivity.",
    category: "productivity",
    subscribers: "76K",
    frequency: "Weekly",
    image: "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=800&q=80",
  },
  {
    id: 5,
    title: "Leadership Letters",
    description: "Insights for current and aspiring leaders.",
    category: "leadership",
    subscribers: "64K",
    frequency: "Bi-weekly",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  },
  {
    id: 6,
    title: "Startup Digest",
    description: "Latest news and resources for startup founders.",
    category: "business",
    subscribers: "92K",
    frequency: "Weekly",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
  },
];


  const filteredNewsletters = newsletters.filter((newsletter) => {
    const matchesSearch =
      newsletter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      newsletter.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || newsletter.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1D2226] transition-colors duration-300">
      <Head>
        <title>Newsletters - Career Social</title>
        <meta name="description" content="Subscribe to our curated newsletters" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
            Stay Updated with Our Newsletters
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get the latest insights, news, and updates delivered straight to your inbox.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="mb-10">
          <div className="relative max-w-xl mx-auto mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#252A2E] text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search newsletters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow"
                    : "bg-white dark:bg-[#252A2E] text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Newsletters */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Newsletters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsletters
              .filter((n) => n.featured)
              .map((newsletter) => (
                <div
                  key={newsletter.id}
                  className="bg-white dark:bg-[#252A2E] rounded-xl shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
                >
                  <div className="md:flex">
                    <div className="md:w-48 h-48 relative flex-shrink-0">
                      <Image
                        src={newsletter.image}
                        alt={newsletter.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 dark:bg-blue-900 dark:text-blue-100 rounded-full">
                            {newsletter.frequency}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {newsletter.subscribers} subscribers
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {newsletter.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {newsletter.description}
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700">
                          Subscribe
                        </button>
                        <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                          View Sample
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* All Newsletters */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {selectedCategory === "all"
                ? "All Newsletters"
                : `${categories.find((c) => c.id === selectedCategory)?.name} Newsletters`}
            </h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {filteredNewsletters.length}{" "}
              {filteredNewsletters.length === 1 ? "result" : "results"}
            </span>
          </div>

          {filteredNewsletters.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNewsletters.map((newsletter) => (
                <div
                  key={newsletter.id}
                  className="bg-white dark:bg-[#252A2E] rounded-lg shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
                >
                  <div className="h-40 relative">
                    <Image
                      src={newsletter.image}
                      alt={newsletter.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-center mb-2">
                      <span className="px-2 py-1 text-xs font-semibold text-blue-800 bg-blue-100 dark:bg-blue-900 dark:text-blue-100 rounded">
                        {newsletter.frequency}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {newsletter.subscribers} subscribers
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {newsletter.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      {newsletter.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <button className="px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-700">
                        Subscribe
                      </button>
                      <button className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
                        Preview
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white dark:bg-[#252A2E] rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                No newsletters found
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Try adjusting your search or filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Newsletters;
