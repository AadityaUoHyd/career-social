import { NextSeo } from 'next-seo';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1D2226] py-12 px-4 sm:px-6 lg:px-8">
      <NextSeo
        title="About Us - Career Social"
        description="Learn more about Career Social and our mission to connect professionals worldwide."
      />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            About Career Social
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Connecting professionals, empowering careers
          </p>
        </div>

        <div className="bg-white dark:bg-[#252A2E] rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            At Career Social, we believe in creating meaningful professional connections that help individuals 
            grow their careers and businesses find top talent. Our platform is designed to bridge the gap 
            between professionals and opportunities in the modern workplace.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 mt-8">Our Story</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Founded in 2023, Career Social was born out of a simple idea: professional networking should be 
            more than just collecting connections. We&apos;re building a platform where professionals can share 
            knowledge, discover opportunities, and build relationships that matter.
          </p>
        </div>

        <div className="text-center mt-8">
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
