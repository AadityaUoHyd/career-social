// pages/team.js
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import PolicyLayout from '../components/PolicyLayout';

const TeamPage = () => {
  return (
    <PolicyLayout>
      <NextSeo
        title="Our Team - Career Social"
        description="Meet the team behind Career Social, led by CEO Aaditya B Chatterjee"
      />
      
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Team</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:mr-6 mb-4 md:mb-0">
              <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-4xl font-bold text-gray-400">
                <Image 
                  src="https://avatars.githubusercontent.com/u/57300089?v=4" 
                  alt="Aaditya B Chatterjee"
                  width={128}
                  height={128}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Aaditya B Chatterjee</h2>
              <p className="text-lg text-blue-600 dark:text-blue-400 mb-2">Chief Executive Officer</p>
              <p className="text-gray-600 dark:text-gray-300">
                Aaditya is the founder and CEO of Career Social, leading our vision to connect professionals worldwide.
              </p>
              <div className="mt-4">
                <a
                  href="https://www.linkedin.com/in/aaditya-bachchu-chatterjee-0485933b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  <span>Connect on LinkedIn</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Join Our Team</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We&apos;re always looking for talented individuals to join our growing team. Check back soon for open positions.
          </p>
        </div>
      </div>
    </PolicyLayout>
  );
};

export default TeamPage;