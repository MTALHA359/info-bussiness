
'use client';
import { useState } from 'react';
import { Wallet, TrendingUp, ShieldCheck, PieChart } from 'lucide-react';

export default function HomePage() {
  const features = [
    { icon: <Wallet size={32} />, title: "Wallet" },
    { icon: <TrendingUp size={32} />, title: "Growth" },
    { icon: <ShieldCheck size={32} />, title: "Security" },
    { icon: <PieChart size={32} />, title: "Analytics" },
  ];

  const investments = [
    { title: "Real Estate", desc: "High ROI property assets." },
    { title: "Crypto Fund", desc: "Bitcoin & Altcoin growth." },
    { title: "Stock Market", desc: "Top performing stocks." },
    { title: "Startups", desc: "Tech startup investment." },
  ];

  // ✅ Your Pexels image and two others as examples
  const images = [
           "https://images.pexels.com/photos/8122068/pexels-photo-8122068.jpeg",
    "https://images.pexels.com/photos/3184634/pexels-photo-3184634.jpeg",
    "https://images.pexels.com/photos/4968384/pexels-photo-4968384.jpeg"

  ];

  const [carouselIndex, setCarouselIndex] = useState(0);

  const history = [
    { type: 'Deposit', amount: '$1000', date: '2025-06-01' },
    { type: 'Withdrawal', amount: '$200', date: '2025-06-05' },
    { type: 'Deposit', amount: '$500', date: '2025-06-10' },
    { type: 'Withdrawal', amount: '$300', date: '2025-06-15' },
  ];

  return (
    <main className="bg-gray-100 min-h-screen p-6 space-y-20">

      {/* Section 1: Feature Cards */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center">💼 Platform Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:scale-105 transition-all text-center">
              <div className="text-blue-500 mb-2 flex justify-center">{item.icon}</div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Business Investment Cards */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center">📈 Business Investment Opportunities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {investments.map((item, i) => (
            <div key={i} className="bg-blue-100 p-6 rounded-xl shadow hover:bg-blue-200 transition">
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Carousel */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center">🎯 Platform Showcase</h2>
        <div className="relative flex flex-col md:flex-row bg-black rounded-xl overflow-hidden">
          <div className="md:w-1/2">
            <img
              src={images[carouselIndex]}
              alt={`carousel-${carouselIndex}`}
              className="w-full h-64 md:h-full object-cover transition-all duration-700"
            />
          </div>
          <div className="md:w-1/2 p-8 text-white flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4">Smart Investment Platform</h3>
            <p className="text-lg">Build your portfolio with expert insights and data-driven strategies.</p>
          </div>
          <button
            onClick={() => setCarouselIndex((carouselIndex + 1) % images.length)}
            className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-200 transition"
          >
            Next
          </button>
        </div>
      </section>

      {/* Section 4: Deposit & Withdrawal History */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center">📜 Deposit & Withdrawal History</h2>
        <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-2 px-4">Type</th>
                <th className="py-2 px-4">Amount</th>
                <th className="py-2 px-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {history.map((h, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{h.type}</td>
                  <td className="py-2 px-4">{h.amount}</td>
                  <td className="py-2 px-4">{h.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </main>
  );
}
