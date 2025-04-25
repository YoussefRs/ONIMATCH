import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2A0A5E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-[#00F5FF] bg-clip-text text-transparent mr-1">ONI</span>
              <span className="text-[#00F5FF]">Match</span>
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Connecting innovative brands with influential creators to build authentic partnerships.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-300 hover:text-[#00F5FF] transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#00F5FF] transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#00F5FF] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">For Businesses</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-300 hover:text-[#00F5FF] text-sm">
                  Find Influencers
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-[#00F5FF] text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-[#00F5FF] text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-[#00F5FF] text-sm">
                  ROI Calculator
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">For Influencers</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-300 hover:text-[#00F5FF] text-sm">
                  Find Opportunities
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-[#00F5FF] text-sm">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-[#00F5FF] text-sm">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-[#00F5FF] text-sm">
                  Community
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-300 hover:text-[#00F5FF] text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-[#00F5FF] text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-[#00F5FF] text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-[#00F5FF] text-sm">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#3A1A7E] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-300">© 2025 ONI Match. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-sm text-gray-300 hover:text-[#00F5FF]">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm text-gray-300 hover:text-[#00F5FF]">
              Terms of Service
            </Link>
            <Link to="#" className="text-sm text-gray-300 hover:text-[#00F5FF]">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;