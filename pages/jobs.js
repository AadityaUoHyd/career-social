import Head from 'next/head';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Jobs() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      location: 'Hyderabad, Telangana',
      type: 'Full-time',
      salary: '₹120,000 - ₹150,000',
      posted: '2 days ago',
      skills: ['React', 'TypeScript', 'Redux'],
      isSaved: false,
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      company: 'Creative Minds',
      location: 'Bangalore, Karnataka',
      type: 'Contract',
      salary: '₹80 - ₹100/hr',
      posted: '1 week ago',
      skills: ['Figma', 'Sketch', 'User Research'],
      isSaved: true,
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      company: 'CloudScale',
      location: 'Pune, Maharashtra',
      type: 'Full-time',
      salary: '₹120,000 - ₹150,000',
      posted: '3 days ago',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      isSaved: false,
    },
    {
      id: 4,
      title: 'Java Backend Engineer',
      company: 'Hitech Systems',
      location: 'Hyderabad, Telangana',
      type: 'Full-time',
      salary: '₹130,000 - ₹160,000',
      posted: '3 days ago',
      skills: ['Java', 'Spring Boot', 'JPA', 'Hibernate', 'MySQL'],
      isSaved: false,
    },
    {
      id: 5,
      title: 'Python Backend Engineer',
      company: 'Tech Innovations Inc.',
      location: 'Hyderabad, Telangana',
      type: 'Full-time',
      salary: '₹130,000 - ₹160,000',
      posted: '3 days ago',
      skills: ['Python', 'Django', 'Django Rest Framework', 'PostgreSQL'],
      isSaved: false,
    },
    {
      id: 6,
      title: 'MERN Stack Engineer',
      company: 'Tech Innovations Inc.',
      location: 'Bangalore, Karnataka',
      type: 'Full-time',
      salary: '₹130,000 - ₹160,000',
      posted: '4 days ago',
      skills: ['React', 'Node.js', 'Express', 'MongoDB'],
      isSaved: false,
    },
    {
      id: 7,
      title: 'Java Full Stack Engineer',
      company: 'Prerna Tech Solutions',
      location: 'Gurugram, Haryana',
      type: 'Full-time',
      salary: '₹130,000 - ₹160,000',
      posted: '4 days ago',
      skills: ['React', 'Java', 'Spring Boot', 'Hibernate', 'Microservices', 'PostgreSQL'],
      isSaved: false,
    },
    {
      id: 8,
      title: 'QA Engineer',
      company: 'Sai Technologies',
      location: 'Chennai, Tamil Nadu',
      type: 'Full-time',
      salary: '₹40,000 - ₹52,000',
      posted: '5 days ago',
      skills: ['TestNG', 'Postman', 'Selenium', 'JMeter'],
      isSaved: false,
    },
  ];

  const toggleSaveJob = (jobId) => {
    // In a real app, this would update the backend
    console.log(`Job ${jobId} save status toggled`);
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'all' || job.type.toLowerCase().includes(activeTab);
    return matchesSearch && matchesTab;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Jobs - Career Social</title>
        <meta name="description" content="Find your next career opportunity" />
      </Head>
      
      <main className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">Job Openings</h1>
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search jobs or companies..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
          {['All', 'Full-time', 'Part-time', 'Contract', 'Internship'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab === 'All' ? 'all' : tab.toLowerCase())}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                (activeTab === 'all' && tab === 'All') || 
                activeTab === tab.toLowerCase()
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
                    <p className="text-gray-700">{job.company} • {job.location}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {job.type}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {job.salary}
                      </span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <button 
                      onClick={() => toggleSaveJob(job.id)}
                      className="p-2 text-gray-400 hover:text-yellow-500"
                      aria-label={job.isSaved ? 'Unsave job' : 'Save job'}
                    >
                      {job.isSaved ? '⭐' : '☆'}
                    </button>
                    <span className="text-xs text-gray-500 mt-2">{job.posted}</span>
                    <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10 bg-white rounded-lg shadow">
              <p className="text-gray-500">No jobs found matching your criteria.</p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setActiveTab('all');
                }}
                className="mt-4 text-blue-600 hover:text-blue-800"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
