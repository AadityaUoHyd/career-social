import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const Profile = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-4">
      <Head>
        <title>My Profile | Career Social</title>
        <meta name="description" content="View and edit your profile" />
      </Head>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Profile Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative">
            <div className="absolute -bottom-16 left-6">
              <div className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 bg-white dark:bg-gray-700 overflow-hidden">
                {session?.user?.image ? (
                  <Image 
                    src={session.user.image} 
                    alt={session.user.name || 'Profile'} 
                    width={128} 
                    height={128}
                    className="object-cover h-full w-full"
                  />
                ) : (
                  <div className="h-full w-full bg-gray-300 flex items-center justify-center text-4xl text-gray-600">
                    {session?.user?.name?.[0] || 'U'}
                  </div>
                )}
              </div>
            </div>
            <div className="absolute bottom-4 right-6">
              <button className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-600">
                Edit Profile
              </button>
            </div>
          </div>
          
          <div className="pt-20 px-6 pb-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {session?.user?.name || 'User Name'}
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              {session?.user?.email || 'user@example.com'}
            </p>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Software Developer | Open to new opportunities
            </p>
            
            <div className="mt-4 flex space-x-4">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M12 18h.01" />
                </svg>
                <span>5+ years experience</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-6">
            {/* About Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">About</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Passionate software developer with experience in building scalable web applications. 
                Specialized in Java, Spring boot, Microservices, AWS, JavaScript, React, and Node.js. Love to learn new technologies and 
                contribute to open source projects in my free time.
              </p>
            </div>
            
            {/* Experience Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Experience</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Senior Software Engineer</h3>
                  <p className="text-blue-600 dark:text-blue-400">TechCorp Inc. • 2020 - Present</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    Leading a team of developers to build and maintain enterprise-level applications.
                    Implementing new features and optimizing performance.
                  </p>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <h3 className="font-medium text-gray-900 dark:text-white">Software Developer</h3>
                  <p className="text-blue-600 dark:text-blue-400">WebSolutions LLC • 2018 - 2020</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    Developed and maintained client websites and web applications.
                    Collaborated with designers and product managers to implement new features.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            {/* Skills Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Spring boot', 'Microservices', 'AWS', 'JavaScript', 'React', 'Node.js', 'TypeScript', 'GraphQL', 'Next.js', 'Docker', 'Kubernetes', 'CI/CD'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Education Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Education</h2>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Masters in Computer Science</h3>
                <p className="text-blue-600 dark:text-blue-400">University of Hyderabad • 2011 - 2014</p>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  Specialized in Artificial Intelligence and Machine Learning.
                </p>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h2>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="h-5 w-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {session?.user?.email || 'user@example.com'}
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="h-5 w-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 (999) 999-9999
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="h-5 w-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <a href="https://abchatterjee.netlify.app" className="text-blue-600 dark:text-blue-400 hover:underline">https://abchatterjee.netlify.app</a>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="h-5 w-5 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <a href="https://github.com/AadityaUoHyd" className="text-blue-600 dark:text-blue-400 hover:underline">github.com/AadityaUoHyd</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
