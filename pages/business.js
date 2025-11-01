// pages/business.js
import { NextSeo } from 'next-seo';
import PolicyLayout from '../components/PolicyLayout';
import { 
  BriefcaseIcon, 
  UserGroupIcon, 
  MegaphoneIcon, 
  StarIcon, 
  AcademicCapIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Sell with LinkedIn',
    description: 'Unlock sales opportunities and grow your business with our professional network.',
    icon: BriefcaseIcon,
    cta: 'Start selling',
    link: '#sell'
  },
  {
    name: 'Share that you’re hiring',
    description: 'Reach qualified candidates in your network and beyond with our hiring solutions.',
    icon: UserGroupIcon,
    cta: 'Post a job',
    link: '#hiring'
  },
  {
    name: 'Advertise on LinkedIn',
    description: 'Acquire customers and grow your business with targeted advertising.',
    icon: MegaphoneIcon,
    cta: 'Advertise now',
    link: '#advertise'
  },
  {
    name: 'Get started with Premium',
    description: 'Expand and leverage your professional network with premium features.',
    icon: StarIcon,
    cta: 'Try Premium',
    link: '#premium'
  },
  {
    name: 'Learn with LinkedIn',
    description: 'Courses to develop your employees and grow their skills.',
    icon: AcademicCapIcon,
    cta: 'Explore learning',
    link: '#learning'
  }
];

const BusinessPage = () => {
  return (
    <PolicyLayout title="Business Solutions">
      <NextSeo
        title="Business Solutions - Career Social"
        description="Grow your business with Career Social's professional tools and services"
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Grow your business with Career Social</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Connect with professionals, find talent, and grow your business with our suite of business solutions.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div 
                key={feature.name}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  </div>
                  <h3 className="ml-4 text-lg font-medium text-gray-900 dark:text-white">{feature.name}</h3>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-300">{feature.description}</p>
                <div className="mt-6">
                  <a
                    href={feature.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                  >
                    {feature.cta}
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to grow your business?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of businesses already using Career Social to connect with professionals and grow their network.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact-sales"
              className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Contact Sales
            </a>
            <a
              href="#learn-more"
              className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </PolicyLayout>
  );
};

export default BusinessPage;