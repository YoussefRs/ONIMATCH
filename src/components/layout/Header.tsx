import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Button from "../ui/Button";
import Avatar from "../ui/Avatar";
import { Bell } from "lucide-react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NotificationsPanel } from "../NotificationsPanel";

const Header: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#2A0A5E] to-[#3A1A7E] text-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-[#00F5FF] bg-clip-text text-transparent mr-1">
                ONI
              </span>
              <span className="text-[#00F5FF]">Match</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {currentUser && (
              <>
                <Link
                  to="/dashboard"
                  className={`text-sm font-medium transition-colors duration-200 hover:text-[#00F5FF] ${
                    isActive("/dashboard") ? "text-[#00F5FF]" : "text-white"
                  }`}
                >
                  Dashboard
                </Link>
                {currentUser.role === "business" && (
                  <Link
                    to="/find-influencers"
                    className={`text-sm font-medium transition-colors duration-200 hover:text-[#00F5FF] ${
                      isActive("/find-influencers")
                        ? "text-[#00F5FF]"
                        : "text-white"
                    }`}
                  >
                    Find Influencers
                  </Link>
                )}
                {currentUser.role === "influencer" && (
                  <Link
                    to="/opportunities"
                    className={`text-sm font-medium transition-colors duration-200 hover:text-[#00F5FF] ${
                      isActive("/opportunities")
                        ? "text-[#00F5FF]"
                        : "text-white"
                    }`}
                  >
                    Opportunities
                  </Link>
                )}
                <Link
                  to="/matches"
                  className={`text-sm font-medium transition-colors duration-200 hover:text-[#00F5FF] ${
                    isActive("/matches") ? "text-[#00F5FF]" : "text-white"
                  }`}
                >
                  Matches
                </Link>
                <Link
                  to="/analytics"
                  className={`text-sm font-medium transition-colors duration-200 hover:text-[#00F5FF] ${
                    isActive("/analytics") ? "text-[#00F5FF]" : "text-white"
                  }`}
                >
                  Analytics
                </Link>
                <div className="relative">
                  <button
                    onClick={toggleProfile}
                    className="flex items-center text-sm font-medium focus:outline-none"
                  >
                    <Avatar
                      src={currentUser.avatar}
                      alt={currentUser.name}
                      size="sm"
                      fallback={currentUser.name}
                      className="mr-2"
                    />
                    <span className="mr-1">{currentUser.name}</span>
                    <ChevronDown size={16} />
                  </button>

                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        Your Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
                {currentUser.role === "influencer" && (
                  <>
                    <Button
                      className="relative"
                      onClick={() => setIsNotificationsOpen(true)}
                    >
                      <Bell className="h-5 w-5" />
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        2
                      </span>
                    </Button>
                  </>
                )}
              </>
            )}

            {!currentUser && (
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#00F5FF] text-[#00F5FF] hover:bg-[#00F5FF]/20"
                  >
                    Log in
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="secondary" size="sm">
                    Sign up
                  </Button>
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#00F5FF] focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#2A0A5E]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {currentUser ? (
              <>
                <div className="px-4 py-3 border-b border-[#3A1A7E]">
                  <div className="flex items-center">
                    <Avatar
                      src={currentUser.avatar}
                      alt={currentUser.name}
                      size="sm"
                      fallback={currentUser.name}
                      className="mr-2"
                    />
                    <div>
                      <div className="text-sm font-medium text-white">
                        {currentUser.name}
                      </div>
                      <div className="text-xs text-gray-300">
                        {currentUser.email}
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  to="/dashboard"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive("/dashboard")
                      ? "bg-[#3A1A7E] text-[#00F5FF]"
                      : "text-white hover:bg-[#3A1A7E] hover:text-[#00F5FF]"
                  }`}
                  onClick={toggleMenu}
                >
                  Dashboard
                </Link>
                {currentUser.role === "business" && (
                  <Link
                    to="/find-influencers"
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      isActive("/find-influencers")
                        ? "bg-[#3A1A7E] text-[#00F5FF]"
                        : "text-white hover:bg-[#3A1A7E] hover:text-[#00F5FF]"
                    }`}
                    onClick={toggleMenu}
                  >
                    Find Influencers
                  </Link>
                )}
                {currentUser.role === "influencer" && (
                  <Link
                    to="/opportunities"
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      isActive("/opportunities")
                        ? "bg-[#3A1A7E] text-[#00F5FF]"
                        : "text-white hover:bg-[#3A1A7E] hover:text-[#00F5FF]"
                    }`}
                    onClick={toggleMenu}
                  >
                    Opportunities
                  </Link>
                )}
                <Link
                  to="/matches"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive("/matches")
                      ? "bg-[#3A1A7E] text-[#00F5FF]"
                      : "text-white hover:bg-[#3A1A7E] hover:text-[#00F5FF]"
                  }`}
                  onClick={toggleMenu}
                >
                  Matches
                </Link>
                <Link
                  to="/analytics"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive("/analytics")
                      ? "bg-[#3A1A7E] text-[#00F5FF]"
                      : "text-white hover:bg-[#3A1A7E] hover:text-[#00F5FF]"
                  }`}
                  onClick={toggleMenu}
                >
                  Analytics
                </Link>
                <Link
                  to="/profile"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive("/profile")
                      ? "bg-[#3A1A7E] text-[#00F5FF]"
                      : "text-white hover:bg-[#3A1A7E] hover:text-[#00F5FF]"
                  }`}
                  onClick={toggleMenu}
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#3A1A7E] hover:text-[#00F5FF]"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#3A1A7E] hover:text-[#00F5FF]"
                  onClick={toggleMenu}
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#3A1A7E] hover:text-[#00F5FF]"
                  onClick={toggleMenu}
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      )}

      <NotificationsPanel
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        influencerId="inf1"
      />
    </header>
  );
};

export default Header;
