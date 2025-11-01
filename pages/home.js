import Image from "next/image";
import HeaderLink from "../components/HeaderLink";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Head from "next/head";
import { getProviders, signIn } from "next-auth/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";


function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const stats = [
    { value: "10,000+", label: "Job Openings" },
    { value: "5,000+", label: "Companies Hiring" },
    { value: "1M+", label: "Active Users" },
    { value: "50+", label: "Industries" },
  ];

  const features = [
    {
      icon: <WorkIcon className="w-8 h-8" />,
      title: "Find Your Dream Job",
      description: "Discover thousands of job opportunities from top companies worldwide.",
    },
    {
      icon: <ConnectWithoutContactIcon className="w-8 h-8" />,
      title: "Grow Your Network",
      description: "Connect with professionals and expand your professional circle.",
    },
    {
      icon: <SchoolIcon className="w-8 h-8" />,
      title: "Learn New Skills",
      description: "Access courses and resources to enhance your career.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Head>
        <title>Career Social - Connect, Learn, and Grow</title>
        <meta name="description" content="Connect with professionals, find job opportunities, and grow your career" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-700 dark:text-blue-500 leading-tight">
              Welcome to Your <span className="text-blue-600 dark:text-blue-400">Professional</span> Community
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Connect with professionals, discover job opportunities, and take your career to the next level.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <WorkIcon className="text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Find your next opportunity</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Browse thousands of job listings</p>
                </div>
                <ArrowForwardIosRoundedIcon className="text-gray-400 ml-auto" />
              </div>
              
              <div className="flex items-center space-x-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <GroupIcon className="text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Connect with professionals</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Expand your professional network</p>
                </div>
                <ArrowForwardIosRoundedIcon className="text-gray-400 ml-auto" />
              </div>
              
              <div className="flex items-center space-x-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <SchoolIcon className="text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Learn new skills</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Access professional development resources</p>
                </div>
                <ArrowForwardIosRoundedIcon className="text-gray-400 ml-auto" />
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] lg:h-[600px]">
            <Image
              src={theme === 'dark' ? '/hero.png' : '/hero.png'}
              alt="Career Social Hero"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Everything you need to grow your career
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Join thousands of professionals who have advanced their careers with us
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="pt-8 pb-10 px-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white text-center">
                  {feature.title}
                </h3>
                <p className="mt-3 text-base text-gray-600 dark:text-gray-400 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 dark:bg-blue-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to take the next step in your career?
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            Join Career Social today and unlock new opportunities.
          </p>
          <div className="mt-8 flex justify-center gap-4">
  <Link
    href="/register"
    className="inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 
      text-base md:text-lg font-medium rounded-md 
      text-amber-700 bg-white border border-transparent 
      hover:bg-amber-50 dark:hover:bg-gray-100 transition-all duration-200"
  >
    Sign Up
  </Link>

  <Link
    href="/login"
    className="inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 
      text-base md:text-lg font-medium rounded-md 
      text-white bg-amber-600 border border-transparent 
      hover:bg-amber-700 dark:bg-amber-700 dark:hover:bg-amber-800 
      transition-all duration-200"
  >
    Login
  </Link>
</div>

        </div>
      </section>
    </div>
  );
}

export default Home;

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}