import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { ChevronRight, Star, Shield, Target, TrendingUp, CheckCircle, Users } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#2A0A5E] to-[#3A1A7E] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-3/5">
            <span className="inline-block bg-[#00F5FF]/20 text-[#00F5FF] text-sm font-medium px-3 py-1 rounded-full mb-6">
              The Future of Influencer Marketing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Connect Brands with the Perfect Influencers
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Our AI-powered platform matches businesses with influencers for authentic, high-performing partnerships that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/signup">
                <Button variant="secondary" size="lg">
                  Get Started Free
                  <ChevronRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  How It Works
                </Button>
              </Link>
            </div>
            <div className="mt-12 flex items-center space-x-4">
              <div className="flex -space-x-2">
                <img
                  className="w-10 h-10 rounded-full border-2 border-[#2A0A5E]"
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="User"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-[#2A0A5E]"
                  src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="User"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-[#2A0A5E]"
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="User"
                />
              </div>
              <p className="text-sm text-gray-300">
                <span className="font-semibold">2,500+</span> successful matches this month
              </p>
              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} className="text-[#00F5FF] fill-[#00F5FF]" />
                  ))}
                </div>
                <span className="ml-2 text-sm">4.9/5</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2A0A5E]">How ONI Match Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform makes it easy to find the perfect match, collaborate, and measure success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-[#2A0A5E]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="text-[#2A0A5E]" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#2A0A5E]">Create Your Profile</h3>
              <p className="text-gray-600">
                Set up your business or influencer profile with your details, audience information, and goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#2A0A5E]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Target className="text-[#2A0A5E]" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#2A0A5E]">Get Matched</h3>
              <p className="text-gray-600">
                Our algorithm finds your perfect partners based on niche, audience, and engagement metrics.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#2A0A5E]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-[#2A0A5E]" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#2A0A5E]">Track Results</h3>
              <p className="text-gray-600">
                Measure performance with real-time analytics and optimize your campaigns for better results.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/signup">
              <Button variant="primary" size="lg">
                Start for Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2A0A5E]">Why Choose ONI Match</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform offers the most advanced tools for influencer marketing success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-1">
              <Shield className="text-[#2A0A5E] mb-4" size={28} />
              <h3 className="text-xl font-semibold mb-3 text-[#2A0A5E]">Verified Profiles</h3>
              <p className="text-gray-600 mb-4">
                All influencers and businesses are verified to ensure authentic partnerships and prevent fraud.
              </p>
              <ul className="space-y-2">
                {['Identity verification', 'Audience authenticity checks', 'Performance history'].map((item, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-1">
              <Target className="text-[#2A0A5E] mb-4" size={28} />
              <h3 className="text-xl font-semibold mb-3 text-[#2A0A5E]">Smart Matching</h3>
              <p className="text-gray-600 mb-4">
                Our AI analyzes over 50 data points to find the perfect matches for your brand or influence.
              </p>
              <ul className="space-y-2">
                {['Audience demographics', 'Engagement patterns', 'Content style compatibility'].map((item, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-1">
              <Shield className="text-[#2A0A5E] mb-4" size={28} />
              <h3 className="text-xl font-semibold mb-3 text-[#2A0A5E]">Secure Payments</h3>
              <p className="text-gray-600 mb-4">
                Streamlined, secure payment processing with escrow protection for both parties.
              </p>
              <ul className="space-y-2">
                {['Milestone payments', 'Payment protection', 'Transparent fee structure'].map((item, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-1">
              <TrendingUp className="text-[#2A0A5E] mb-4" size={28} />
              <h3 className="text-xl font-semibold mb-3 text-[#2A0A5E]">Detailed Analytics</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive performance tracking with actionable insights to optimize your ROI.
              </p>
              <ul className="space-y-2">
                {['Real-time campaign tracking', 'Audience growth metrics', 'Conversion attribution'].map((item, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2A0A5E]">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how businesses and influencers are achieving remarkable results with ONI Match.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#2A0A5E]/5 to-[#00F5FF]/5 p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <img
                  className="w-12 h-12 rounded-full mr-4"
                  src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="Sarah Johnson"
                />
                <div>
                  <h4 className="font-semibold text-[#2A0A5E]">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">BeautyCo, CEO</p>
                </div>
              </div>
              <p className="italic text-gray-700 mb-4">
                "ONI Match helped us find the perfect influencers for our eco-friendly beauty line. Our sales increased by 43% and we gained over 10,000 new followers in just one month."
              </p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className="text-[#00F5FF] fill-[#00F5FF]" />
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#2A0A5E]/5 to-[#00F5FF]/5 p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <img
                  className="w-12 h-12 rounded-full mr-4"
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="Emma Davis"
                />
                <div>
                  <h4 className="font-semibold text-[#2A0A5E]">Emma Davis</h4>
                  <p className="text-sm text-gray-600">Fitness Influencer</p>
                </div>
              </div>
              <p className="italic text-gray-700 mb-4">
                "As an influencer, finding brands that align with my values was always challenging. ONI Match connects me with perfect partners and handles all the administrative work."
              </p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className="text-[#00F5FF] fill-[#00F5FF]" />
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#2A0A5E]/5 to-[#00F5FF]/5 p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <img
                  className="w-12 h-12 rounded-full mr-4"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="Alex Williams"
                />
                <div>
                  <h4 className="font-semibold text-[#2A0A5E]">Alex Williams</h4>
                  <p className="text-sm text-gray-600">FitGear, Marketing Director</p>
                </div>
              </div>
              <p className="italic text-gray-700 mb-4">
                "The analytics dashboard gives us real-time insights into our campaigns. We've been able to optimize our influencer strategy and achieve a 3.5x ROI."
              </p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className="text-[#00F5FF] fill-[#00F5FF]" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2A0A5E] to-[#3A1A7E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Influencer Marketing?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-300">
            Join ONI Match today and start creating authentic, high-performing partnerships.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/signup">
              <Button variant="secondary" size="lg">
                Create Free Account
              </Button>
            </Link>
            <Link to="/demo">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Request a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;