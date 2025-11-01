import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../components/Header';
import { motion, AnimatePresence } from 'framer-motion';

// Mock data for conversations
const mockConversations = [
  {
    id: 1,
    name: 'Suresh Kumar',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    lastMessage: 'Hey, how are you doing?',
    time: '10:30 AM',
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: 'Shreya Mukherjee',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    lastMessage: 'Can we reschedule our meeting?',
    time: 'Yesterday',
    unread: 0,
    online: false,
  },
  {
    id: 3,
    name: 'Aatish Mathur',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    lastMessage: 'I\'ve sent you the design files',
    time: 'Yesterday',
    unread: 0,
    online: true,
  },
  {
    id: 4,
    name: 'Sonali Sharma',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    lastMessage: 'Thanks for your help!',
    time: 'Monday',
    unread: 0,
    online: false,
  },
];

// Mock messages for the selected conversation
const mockMessages = {
  1: [
    { id: 1, text: 'Hey there!', sent: false, time: '10:00 AM' },
    { id: 2, text: 'Hi! How are you?', sent: true, time: '10:05 AM' },
    { id: 3, text: 'I\'m doing great, thanks for asking! How about you?', sent: false, time: '10:10 AM' },
    { id: 4, text: 'Pretty good! Just working on some projects.', sent: true, time: '10:15 AM' },
    { id: 5, text: 'That sounds interesting! What kind of projects?', sent: false, time: '10:20 AM' },
    { id: 6, text: 'Mostly web development stuff. Building a new portfolio.', sent: true, time: '10:25 AM' },
    { id: 7, text: 'Hey, how are you doing?', sent: false, time: '10:30 AM' },
  ],
  2: [
    { id: 1, text: 'Hi Shreya, about tomorrow\'s meeting...', sent: true, time: '9:00 AM' },
    { id: 2, text: 'Yes, what about it?', sent: false, time: '9:15 AM' },
    { id: 3, text: 'Can we reschedule our meeting?', sent: false, time: '9:16 AM' },
  ],
};

export default function MessagingPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Set first conversation as selected by default on mobile
    if (typeof window !== 'undefined' && window.innerWidth < 768 && mockConversations.length > 0) {
      setSelectedConversation(mockConversations[0]);
    }
  }, []);

  if (status === 'loading') {
    return <div className="min-h-screen bg-gray-50 dark:bg-[#1D2226]"></div>;
  }

  if (!session) {
    router.push('/login');
    return null;
  }

  const filteredConversations = mockConversations.filter(conv => 
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    // In a real app, this would send the message to a server
    console.log('Message sent:', newMessage);
    setNewMessage('');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1D2226]">
      <Head>
        <title>Messaging | Career Social</title>
      </Head>
      
      <main className="pt-4 pb-16 max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="bg-white dark:bg-[#1D2226] rounded-lg shadow overflow-hidden h-[calc(100vh-8rem)] flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-80 lg:w-96 border-r border-gray-200 dark:border-gray-700 flex flex-col">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Messages</h2>
              <div className="mt-2 relative">
                <input
                  type="text"
                  placeholder="Search messages"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute left-3 top-2.5 text-gray-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              {isLoading ? (
                <div className="flex justify-center items-center h-full">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredConversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      className={`p-4 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer flex items-center ${
                        selectedConversation?.id === conversation.id ? 'bg-blue-50 dark:bg-blue-900/30' : ''
                      }`}
                      onClick={() => setSelectedConversation(conversation)}
                    >
                      <div className="relative">
                        <img
                          className="h-12 w-12 rounded-full object-cover"
                          src={conversation.avatar}
                          alt={conversation.name}
                        />
                        {conversation.online && (
                          <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                        )}
                      </div>
                      <div className="ml-3 flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                            {conversation.name}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {conversation.time}
                          </p>
                        </div>
                        <div className="flex justify-between items-center mt-0.5">
                          <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                            {conversation.lastMessage}
                          </p>
                          {conversation.unread > 0 && (
                            <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                              {conversation.unread}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Chat area */}
          <div className="flex-1 flex flex-col border-t md:border-t-0 border-gray-200 dark:border-gray-700">
            {selectedConversation ? (
              <>
                <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center">
                  <button 
                    className="md:hidden mr-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    onClick={() => setSelectedConversation(null)}
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src={selectedConversation.avatar}
                    alt={selectedConversation.name}
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {selectedConversation.name}
                    </p>
                    <p className="text-xs text-green-500">
                      {selectedConversation.online ? 'Online' : 'Offline'}
                    </p>
                  </div>
                  <div className="ml-auto flex space-x-2">
                    <button className="p-1.5 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </button>
                    <button className="p-1.5 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                    <button className="p-1.5 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-800/50">
                  <AnimatePresence>
                    {mockMessages[selectedConversation.id]?.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`flex ${message.sent ? 'justify-end' : 'justify-start'} mb-4`}
                      >
                        <div
                          className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-lg ${
                            message.sent
                              ? 'bg-blue-600 text-white rounded-tr-none'
                              : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-tl-none'
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                          <p className="text-xs mt-1 text-right opacity-70">
                            {message.time}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
                
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <form onSubmit={handleSendMessage} className="flex items-center">
                    <button type="button" className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                      </svg>
                    </button>
                    <input
                      type="text"
                      placeholder="Type a message"
                      className="flex-1 mx-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="p-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      disabled={!newMessage.trim()}
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </form>
                </div>
              </>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full mb-4">
                  <svg className="h-12 w-12 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">No conversation selected</h3>
                <p className="text-gray-500 dark:text-gray-400 max-w-md">
                  Select a conversation from the sidebar or start a new one to begin messaging.
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md">
                  New Message
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
