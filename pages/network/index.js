import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../components/Header';
import { motion } from 'framer-motion';

// Mock data for connections
const mockConnections = [
  {
    id: 1,
    name: 'Ravi Kumar',
    title: 'Software Engineer at Tech Corp',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    connected: true,
    mutualConnections: 12,
  },
  {
    id: 2,
    name: 'Shreya Mukherjee',
    title: 'Product Manager at Design Co',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    connected: false,
    mutualConnections: 8,
  },
  {
    id: 3,
    name: 'Deepak Reddy',
    title: 'UX Designer at Creative Labs',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    connected: true,
    mutualConnections: 5,
  },
  {
    id: 4,
    name: 'Smriti Kaur',
    title: 'Senior Developer at CodeCraft',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    connected: false,
    mutualConnections: 15,
  },
];

export default function NetworkPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('connections');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (status === 'loading') {
    return <div className="min-h-screen bg-gray-50 dark:bg-[#1D2226]"></div>;
  }

  if (!session) {
    router.push('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1D2226]">
      <Head>
        <title>My Network | Career Social</title>
      </Head>
      
      <main className="pt-4 pb-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#1D2226] rounded-lg shadow overflow-hidden">
          {/* Header */}
          <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Network</h1>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Manage your connections and grow your professional network
            </p>
          </div>
          
          {/* Tabs */}
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('connections')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'connections'
                    ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                Connections
              </button>
              <button
                onClick={() => setActiveTab('contacts')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'contacts'
                    ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                Contacts
              </button>
              <button
                onClick={() => setActiveTab('groups')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'groups'
                    ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                Groups
              </button>
            </nav>
          </div>
          
          {/* Content */}
          <div className="p-6">
            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mockConnections.map((connection) => (
                  <motion.div
                    key={connection.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-[#1D2226] rounded-lg shadow p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        className="h-12 w-12 rounded-full object-cover"
                        src={connection.avatar}
                        alt={connection.name}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          {connection.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                          {connection.title}
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-500">
                          {connection.mutualConnections} mutual connections
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      {connection.connected ? (
                        <button className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700">
                          Message
                        </button>
                      ) : (
                        <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md">
                          Connect
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
            
            {!isLoading && (
              <div className="mt-6 flex justify-center">
                <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700">
                  Load more
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
