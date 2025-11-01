import Head from "next/head";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";
import Header from "../components/Header";

export default function People() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p className="text-lg font-medium text-gray-600">Loading...</p>
      </div>
    );
  }

  const people = [
    {
      id: 1,
      name: "Suresh Sharma",
      title: "Senior Software Engineer",
      company: "Tech Corp",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Mukesh Mishra",
      title: "Product Manager",
      company: "Innovate Inc",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 3,
      name: "Chandu Das",
      title: "UX Designer",
      company: "Design Hub",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    {
      id: 4,
      name: "Shreya Mukherjee",
      title: "Data Scientist",
      company: "Data Insights",
      image: "https://randomuser.me/api/portraits/women/62.jpg",
    },
    {
      id: 5,
      name: "Rahul Kumar",
      title: "DevOps Engineer",
      company: "Cloud Solutions",
      image: "https://randomuser.me/api/portraits/men/28.jpg",
    },
    {
      id: 6,
      name: "Nisha Verma",
      title: "Frontend Developer",
      company: "Creative Studio",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1D2226] transition-colors duration-300">
      <Head>
        <title>People - Career Social</title>
        <meta name="description" content="Connect with professionals" />
      </Head>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
          People You May Know
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((person) => (
            <div
              key={person.id}
              className="bg-white dark:bg-[#252A2E] rounded-lg shadow-sm p-6 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="relative h-14 w-14">
                  <Image
                    src={person.image}
                    alt={person.name}
                    className="rounded-full object-cover"
                    fill
                    sizes="56px"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {person.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {person.title}
                  </p>
                  <p className="text-xs text-gray-400">{person.company}</p>
                </div>
              </div>
              <div className="mt-5">
                <button className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
