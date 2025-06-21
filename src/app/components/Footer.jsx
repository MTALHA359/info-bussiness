'use client';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-orange-700 border-t border-orange-100">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2 text-orange-600">🏢 SK-TECHNOLOGY801</h2>
          <p className="text-sm text-gray-700">Empowering businesses with smart digital solutions.</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-orange-600">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-orange-500">Home</a></li>
            <li><a href="/facilities" className="hover:text-orange-500">Facilities</a></li>
            <li><a href="/investment" className="hover:text-orange-500">Investment</a></li>
            <li><a href="/contact" className="hover:text-orange-500">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-orange-600">Contact Us</h3>
          <ul className="text-sm space-y-2 text-gray-700">
            <li className="flex items-center space-x-2">
              <MapPin size={16} className="text-orange-600" />
              <span>123 Main Street, Lahore</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={16} className="text-orange-600" />
              <span>+92 300 1234567</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={16} className="text-orange-600" />
              <span>contact@youroffice.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-orange-50 py-4 text-center text-sm text-orange-700 border-t border-orange-100">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}
