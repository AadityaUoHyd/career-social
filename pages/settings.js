import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const Settings = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('account');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    notifications: {
      email: true,
      push: true,
      newsletter: true
    },
    theme: 'system'
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    } else if (status === 'authenticated') {
      setFormData(prev => ({
        ...prev,
        name: session.user?.name || '',
        email: session.user?.email || ''
      }));
    }
  }, [status, router, session]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: type === 'checkbox' ? checked : value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Settings saved successfully!');
  };

  if (status === 'loading') {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-4">
      <Head>
        <title>Settings | Career Social</title>
        <meta name="description" content="Account settings" />
      </Head>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="md:flex md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Manage your account settings and preferences
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
          <div className="md:flex">
            {/* Sidebar Navigation */}
            <div className="md:w-1/4 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
              <nav className="p-4 space-y-1">
                <button
                  onClick={() => setActiveTab('account')}
                  className={`w-full text-left px-4 py-2 text-sm font-medium rounded-md ${
                    activeTab === 'account'
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                      : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  Account
                </button>
                <button
                  onClick={() => setActiveTab('password')}
                  className={`w-full text-left px-4 py-2 text-sm font-medium rounded-md ${
                    activeTab === 'password'
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                      : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  Password
                </button>
                <button
                  onClick={() => setActiveTab('notifications')}
                  className={`w-full text-left px-4 py-2 text-sm font-medium rounded-md ${
                    activeTab === 'notifications'
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                      : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  Notifications
                </button>
                <button
                  onClick={() => setActiveTab('appearance')}
                  className={`w-full text-left px-4 py-2 text-sm font-medium rounded-md ${
                    activeTab === 'appearance'
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                      : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  Appearance
                </button>
                <button
                  onClick={() => setActiveTab('billing')}
                  className={`w-full text-left px-4 py-2 text-sm font-medium rounded-md ${
                    activeTab === 'billing'
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                      : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  Billing
                </button>
              </nav>
            </div>

            {/* Main Content */}
            <div className="md:w-3/4 p-6">
              {activeTab === 'account' && (
                <div>
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white">Account Information</h2>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Update your account information and email address.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="h-16 w-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                        {session?.user?.image ? (
                          <Image 
                            src={session.user.image} 
                            alt={session.user.name || 'Profile'} 
                            width={64} 
                            height={64}
                            className="object-cover h-full w-full"
                          />
                        ) : (
                          <span className="text-2xl text-gray-600 dark:text-gray-300">
                            {session?.user?.name?.[0] || 'U'}
                          </span>
                        )}
                      </div>
                      <div>
                        <button
                          type="button"
                          className="px-3 py-1.5 text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          Change
                        </button>
                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">JPG, GIF or PNG. Max 2MB</p>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Full name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm"
                      />
                    </div>

                    <div className="flex justify-end pt-4">
                      <button
                        type="submit"
                        className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {activeTab === 'password' && (
                <div>
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white">Change Password</h2>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Update your password associated with your account.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                    <div>
                      <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Current password
                      </label>
                      <input
                        type="password"
                        name="currentPassword"
                        id="currentPassword"
                        value={formData.currentPassword}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        New password
                      </label>
                      <input
                        type="password"
                        name="newPassword"
                        id="newPassword"
                        value={formData.newPassword}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Confirm new password
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm"
                        required
                      />
                    </div>

                    <div className="flex justify-end pt-4">
                      <button
                        type="submit"
                        className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Update password
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div>
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white">Email Notifications</h2>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Manage how you receive notifications.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="email-notifications"
                          name="notifications.email"
                          type="checkbox"
                          checked={formData.notifications.email}
                          onChange={handleChange}
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="email-notifications" className="font-medium text-gray-700 dark:text-gray-300">
                          Email notifications
                        </label>
                        <p className="text-gray-500 dark:text-gray-400">Get notified about account updates, new features, and more.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="push-notifications"
                          name="notifications.push"
                          type="checkbox"
                          checked={formData.notifications.push}
                          onChange={handleChange}
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="push-notifications" className="font-medium text-gray-700 dark:text-gray-300">
                          Push notifications
                        </label>
                        <p className="text-gray-500 dark:text-gray-400">Get push notifications on your device.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="newsletter"
                          name="notifications.newsletter"
                          type="checkbox"
                          checked={formData.notifications.newsletter}
                          onChange={handleChange}
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="newsletter" className="font-medium text-gray-700 dark:text-gray-300">
                          Newsletter
                        </label>
                        <p className="text-gray-500 dark:text-gray-400">Receive our monthly newsletter with updates and news.</p>
                      </div>
                    </div>

                    <div className="flex justify-end pt-4">
                      <button
                        type="submit"
                        className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Save preferences
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {activeTab === 'appearance' && (
                <div>
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white">Appearance</h2>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Customize how the app looks on your device.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Theme
                      </label>
                      <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
                        <label className="relative block cursor-pointer">
                          <input
                            type="radio"
                            name="theme"
                            value="light"
                            checked={formData.theme === 'light'}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <div className={`p-4 rounded-lg border-2 ${
                            formData.theme === 'light' 
                              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                              : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                          }`}>
                            <div className="flex items-center">
                              <div className="h-4 w-4 rounded-full border-2 border-gray-900 mr-2"></div>
                              <span className="text-sm font-medium text-gray-900 dark:text-white">Light</span>
                            </div>
                            <div className="mt-2 h-20 bg-white rounded border border-gray-200 dark:border-gray-600"></div>
                          </div>
                        </label>
                        
                        <label className="relative block cursor-pointer">
                          <input
                            type="radio"
                            name="theme"
                            value="dark"
                            checked={formData.theme === 'dark'}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <div className={`p-4 rounded-lg border-2 ${
                            formData.theme === 'dark' 
                              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                              : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                          }`}>
                            <div className="flex items-center">
                              <div className="h-4 w-4 rounded-full border-2 border-gray-900 bg-gray-900 mr-2"></div>
                              <span className="text-sm font-medium text-gray-900 dark:text-white">Dark</span>
                            </div>
                            <div className="mt-2 h-20 bg-gray-900 rounded border border-gray-200 dark:border-gray-600"></div>
                          </div>
                        </label>
                        
                        <label className="relative block cursor-pointer">
                          <input
                            type="radio"
                            name="theme"
                            value="system"
                            checked={formData.theme === 'system'}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <div className={`p-4 rounded-lg border-2 ${
                            formData.theme === 'system' 
                              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                              : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                          }`}>
                            <div className="flex items-center">
                              <div className="h-4 w-4 rounded-full border-2 border-gray-900 bg-white dark:bg-gray-900 mr-2">
                                <div className="h-3 w-3 mx-auto my-0.5 border-l border-t border-gray-900 transform rotate-45"></div>
                              </div>
                              <span className="text-sm font-medium text-gray-900 dark:text-white">System</span>
                            </div>
                            <div className="mt-2 h-20 bg-gradient-to-r from-white to-gray-900 dark:from-gray-900 dark:to-gray-800 rounded border border-gray-200 dark:border-gray-600"></div>
                          </div>
                        </label>
                      </div>
                    </div>

                    <div className="flex justify-end pt-4">
                      <button
                        type="submit"
                        className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Save appearance
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {activeTab === 'billing' && (
                <div>
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white">Billing Information</h2>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Manage your subscription and payment methods.
                  </p>
                  
                  <div className="mt-6 bg-white dark:bg-gray-700 shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                      <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Current Plan</h3>
                      <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
                        You're currently on the <span className="font-medium">Free</span> plan.
                      </p>
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-600 px-4 py-5 sm:px-6">
                      <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Plan</dt>
                          <dd className="mt-1 text-sm text-gray-900 dark:text-white">Free</dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Price</dt>
                          <dd className="mt-1 text-sm text-gray-900 dark:text-white">₹ 0/month</dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Status</dt>
                          <dd className="mt-1">
                            <span className="px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-200">
                              Active
                            </span>
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Next Billing Date</dt>
                          <dd className="mt-1 text-sm text-gray-900 dark:text-white">-</dd>
                        </div>
                      </dl>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3 sm:px-6 text-right">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Upgrade Plan
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Payment Methods</h3>
                    <div className="mt-4 bg-white dark:bg-gray-700 shadow overflow-hidden sm:rounded-lg">
                      <div className="px-4 py-5 sm:p-6">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          You haven't added any payment methods yet.
                        </p>
                        <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            Add Payment Method
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
