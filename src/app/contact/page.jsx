'use client';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
          alt="Contact Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            📞 Get in Touch With Us
          </h1>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-6 bg-orange-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <MapPin className="mx-auto text-orange-600 mb-2" size={32} />
            <h3 className="text-lg font-bold text-orange-700">Our Office</h3>
            <p className="text-sm text-gray-700">123 Main Street, Lahore, Pakistan</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <Mail className="mx-auto text-orange-600 mb-2" size={32} />
            <h3 className="text-lg font-bold text-orange-700">Email Us</h3>
            <p className="text-sm text-gray-700">contact@youroffice.com</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <Phone className="mx-auto text-orange-600 mb-2" size={32} />
            <h3 className="text-lg font-bold text-orange-700">Call Us</h3>
            <p className="text-sm text-gray-700">+92 300 1234567</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-orange-700 mb-6 text-center">📬 Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-orange-500 focus:border-orange-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-orange-500 focus:border-orange-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="4"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-orange-500 focus:border-orange-500"
                placeholder="Type your message..."
              />
            </div>
            <button
              type="submit"
              className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
