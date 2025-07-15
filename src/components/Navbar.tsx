import { Link } from 'react-router-dom';
import { Network, UserCircle, LogIn, LogOut, MessageCircle, Sparkles, Menu, X } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { auth } from '@/lib/firebase';
import { Button } from './ui/Button';
import RequestNotifications from './RequestNotifications';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 shadow-lg backdrop-blur-md"
    >
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-3 sm:space-x-8">
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <Network className="h-7 w-7 text-white group-hover:text-gray-300 transition-colors" />
              </motion.div>
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-gray-300 transition-colors">
                Connect2Code
              </span>
            </Link>
            {/* Desktop nav links (hidden on mobile) */}
            <div className="hidden sm:flex items-center space-x-2 md:space-x-4">
              {user && (
                <>
                  <Link to="/teams">
                    <Button className="bg-transparent hover:bg-white hover:text-purple-900 px-5 py-2 font-semibold rounded-lg transition-all">
                      Find Teams
                    </Button>
                  </Link>
                  <Link to="/profile">
                    <Button className="bg-transparent hover:bg-white hover:text-purple-900 px-5 py-2 font-semibold rounded-lg transition-all">
                      Profile
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
          {/* Desktop right side (hidden on mobile) */}
          <div className="hidden sm:flex items-center space-x-2 md:space-x-4">
            {user ? (
              <>
                <Link to="/team-chat">
                  <Button className="bg-transparent hover:bg-white hover:text-purple-900 px-5 py-2 font-semibold rounded-lg transition-all">
                    Chats
                  </Button>
                </Link>
                <RequestNotifications />
                <Button
                  onClick={() => auth.signOut()}
                  className="bg-white text-purple-900 hover:bg-gray-200 px-5 py-2 font-semibold rounded-lg transition-all"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button className="bg-white text-purple-900 hover:bg-gray-200 px-5 py-2 font-semibold rounded-lg transition-all">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
          {/* Hamburger menu for mobile */}
          <div className="sm:hidden flex items-center">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </Button>
          </div>
        </div>
        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="sm:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 flex flex-col">
                {user ? (
                  <>
                    <Link to="/teams" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start">
                        <Sparkles className="h-5 w-5 text-white mr-2" />
                        Find Teams
                      </Button>
                    </Link>
                    <Link to="/profile" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start">
                        <UserCircle className="h-5 w-5 text-white mr-2" />
                        Profile
                      </Button>
                    </Link>
                    <Link to="/team-chat" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start">
                        <MessageCircle className="h-5 w-5 text-white mr-2" />
                        Chats
                      </Button>
                    </Link>
                    <div className="w-full flex justify-start">
                      <RequestNotifications />
                    </div>
                    <Button
                      onClick={() => { setIsOpen(false); auth.signOut(); }}
                      variant="outline"
                      className="w-full justify-start bg-white text-purple-900 hover:bg-gray-200"
                    >
                      <LogOut className="h-5 w-5 mr-2" />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    <Button className="w-full justify-start bg-white text-purple-900 hover:bg-gray-200">
                      <LogIn className="h-5 w-5 mr-2" />
                      Sign In
                    </Button>
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
