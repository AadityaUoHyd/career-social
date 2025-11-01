import Head from 'next/head';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Header from '../components/Header';

export default function Discover() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  const categories = [
    { id: 1, name: 'Technology', count: 1245 },
    { id: 2, name: 'Business', count: 932 },
    { id: 3, name: 'Marketing', count: 876 },
    { id: 4, name: 'Design', count: 765 },
    { id: 5, name: 'Finance', count: 654 },
    { id: 6, name: 'Healthcare', count: 543 },
  ];

  const trending = [
    { id: 1, title: 'Remote Work Trends 2025', category: 'Business', likes: 1245 },
    { id: 2, title: 'AI in Software Development', category: 'Technology', likes: 987 },
    { id: 3, title: 'Personal Branding Guide', category: 'Marketing', likes: 876 },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Discover - Career Social</title>
        <meta name="description" content="Discover new opportunities and content" />
      </Head>
      
      <main className="max-w-5xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Discover</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Trending Topics</h2>
              <div className="space-y-4">
                {trending.map((item) => (
                  <div key={item.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div className="text-sm text-gray-500 mb-1">{item.category}</div>
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <span>❤️ {item.likes} likes</span>
                      <span className="mx-2">•</span>
                      <span>5 min read</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Browse Categories</h2>
              <div className="space-y-3">
                {categories.map((category) => (
                  <div key={category.id} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-md cursor-pointer">
                    <span className="font-medium">{category.name}</span>
                    <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 mt-6">
              <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 rounded-md">
                  <div className="font-medium">Tech Conference 2025</div>
                  <div className="text-sm text-gray-500">Oct 15, 2025 • Online</div>
                </div>
                <div className="p-3 bg-blue-50 rounded-md">
                  <div className="font-medium">Networking Mixer</div>
                  <div className="text-sm text-gray-500">Oct 20, 2025 • New York</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
