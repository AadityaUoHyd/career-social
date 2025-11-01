import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

const Subscription = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-[#1D2226]">
        <p className="text-lg font-medium text-gray-600 dark:text-gray-300">Loading...</p>
      </div>
    );
  }

  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      features: [
        "Basic job search",
        "5 profile views per month",
        "Basic messaging",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "₹500",
      period: "per month",
      features: [
        "Unlimited job applications",
        "Unlimited profile views",
        "Advanced search filters",
        "Priority support",
        "Resume review"
      ],
      popular: true
    },
    {
      name: "Business",
      price: "₹1500",
      period: "per month",
      features: [
        "Everything in Premium",
        "Company profile",
        "Talent search access",
        "Analytics dashboard",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1D2226] transition-colors duration-300">
      <Head>
        <title>Subscription Plans - Career Social</title>
        <meta name="description" content="Choose the right plan for your career growth" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Choose the right plan for you
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Join thousands of professionals who are growing their careers with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#252A2E] shadow-sm ${
                plan.popular ? "ring-2 ring-blue-500" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-base font-medium">
                    {plan.period && ` / ${plan.period}`}
                  </span>
                </p>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg 
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                    plan.popular 
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                  }`}
                >
                  {plan.name === "Free" ? "Get Started" : "Choose Plan"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Need help choosing the right plan?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            Our team is here to help you find the perfect plan for your needs.
            Contact us for a personalized recommendation.
          </p>
          <button className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-blue-600 dark:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Contact Sales
          </button>
        </div>
      </main>
    </div>
  );
};

export default Subscription;
