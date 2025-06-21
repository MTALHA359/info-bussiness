'use client';
import { Coffee, Monitor, Wifi, ShieldCheck, ParkingSquare, UsersRound, PhoneCall, Building } from 'lucide-react';

export default function FacilitiesPage() {
  const facilities = [
    {
      icon: <Wifi size={28} />,
      title: "High-Speed Wi-Fi",
      desc: "Reliable internet access with strong security protocols.",
      img: "https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg",
    },
    {
      icon: <Monitor size={28} />,
      title: "Smart Workstations",
      desc: "Dual-monitor desks with ergonomic chairs.",
      img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "24/7 Security",
      desc: "Surveillance, secure entry, and safety protocols.",
      img: "https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg",
    },
    {
      icon: <UsersRound size={28} />,
      title: "Meeting Rooms",
      desc: "Spacious & private rooms with screenshare & video.",
      img: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg",
    },
    {
      icon: <Coffee size={28} />,
      title: "Cafeteria & Lounge",
      desc: "Snacks, drinks, and chill zones for all employees.",
      img: "https://images.pexels.com/photos/5538396/pexels-photo-5538396.jpeg",
    },
    {
      icon: <ParkingSquare size={28} />,
      title: "Parking Area",
      desc: "Covered staff parking with visitor access zones.",
      img: "https://images.pexels.com/photos/1756957/pexels-photo-1756957.jpeg",
    },
    {
      icon: <PhoneCall size={28} />,
      title: "Support Center",
      desc: "IT & admin support available on-site full time.",
      img: "https://images.pexels.com/photos/8867436/pexels-photo-8867436.jpeg",
    },
    {
      icon: <Building size={28} />,
      title: "Open Workspaces",
      desc: "Spacious, light-filled environments that boost creativity.",
      img: "https://images.pexels.com/photos/374023/pexels-photo-374023.jpeg",
    },
  ];

  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
          alt="Office Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            🏢 Welcome to Our Office Facilities
          </h1>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 px-6 bg-orange-50">
        <h2 className="text-3xl font-bold text-orange-700 text-center mb-12">Explore Our Amenities</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {facilities.map((f, i) => (
            <div
              key={i}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform transition duration-300 hover:-translate-y-1"
            >
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={f.img}
                  alt={f.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center space-x-2 text-orange-600 mb-2">
                  {f.icon}
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                </div>
                <p className="text-sm text-gray-700">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
