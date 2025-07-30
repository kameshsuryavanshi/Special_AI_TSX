import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';

// For components that don't take any props, you can use React.FC<object> or React.FC<{}>
// or simply React.FC if you prefer, though explicitly showing the empty props is clearer.
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <div className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1 w-5 h-5 flex-shrink-0">
                <HiLocationMarker />
              </span>
              <div>
                <p>405 Northfield Ave Ste 201,</p>
                <p>West Orange, NJ 07078</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-yellow-400 w-5 h-5 flex-shrink-0">
                <MdEmail />
              </span>
              <a
                href="mailto:info@dumroo.ai"
                className="hover:text-yellow-400 transition-colors"
              >
                info@dumroo.ai
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="https://dumroo.ai/about" className="hover:text-yellow-400">About Us</a></li>
              <li><a href="https://dumroo.ai/news" className="hover:text-yellow-400">News</a></li>
              <li><a href="https://dumroo.ai/blog" className="hover:text-yellow-400">Blog</a></li>
              <li><a href="https://dumroo.ai/gallery" className="hover:text-yellow-400">Gallery</a></li>
              <li><a href="https://dumroo.ai/contact" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://dumroo.ai/academy" className="hover:text-yellow-400">Dumroo Academy</a></li>
              <li><a href="https://pioneers.dumroo.ai/" className="hover:text-yellow-400">Pioneer Teachers</a></li>
              <li><a href="https://dumroo.ai/privacy" className="hover:text-yellow-400">Privacy Policy</a></li>
              <li><a href="https://qtiknlfjwgcshfrcqznk.supabase.co/storage/v1/object/sign/companyassets/Terms%20of%20Service%20v1.0.pdf" className="hover:text-yellow-400">Terms of Service</a></li>
              <li><a href="https://dumroo.ai/help" className="hover:text-yellow-400">Help Center</a></li>
            </ul>
          </div>

          {/* Connect & Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.facebook.com/people/Dumrooai-AI-Ecosystem-for-Education/61571653776425/" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png" alt="Facebook" className="h-6 w-6 object-contain hover:scale-105 transition-transform" />
              </a>
              <a href="https://www.instagram.com/dumroo.ai/" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="h-6 w-6 object-contain hover:scale-105 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/company/dumroo-ai-ecosystem-for-education" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="h-6 w-6 object-contain hover:scale-105 transition-transform" />
              </a>
              <a href="https://x.com/Damroo_AI" target="_blank" rel="noopener noreferrer">
                <img src="https://freelogopng.com/images/all_img/1690643591twitter-x-logo-png.png" alt="X" className="h-6 w-6 object-contain hover:scale-105 transition-transform" />
              </a>
            </div>
            <div>
              <h4 className="mb-2 text-sm">Subscribe to Our Newsletter</h4>
              <form className="w-full flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none w-full"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#EBB35C] text-white font-semibold rounded w-full sm:w-auto"
                >
                  Subscribe
                </button>
              </form>
            </div>

          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
          <p>© 2025 Dumroo.ai. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="https://dumroo.ai/privacy" className="hover:text-yellow-400">Privacy Policy</a>
            <a href="https://qtiknlfjwgcshfrcqznk.supabase.co/storage/v1/object/sign/companyassets/Terms%20of%20Service%20v1.0.pdf" className="hover:text-yellow-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;