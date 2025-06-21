'use client';

import { useEffect, useState } from 'react';
import { FaCheckCircle, FaCode, FaPalette, FaRocket } from 'react-icons/fa';

export default function AboutPage() {
  const [counter, setCounter] = useState({ projects: 0, clients: 0, awards: 0 });

  useEffect(() => {
    const animateCounter = (key, target) => {
      let count = 0;
      const step = target / 50;
      const interval = setInterval(() => {
        count += step;
        if (count >= target) {
          count = target;
          clearInterval(interval);
        }
        setCounter(prev => ({ ...prev, [key]: Math.floor(count) }));
      }, 20);
    };

    animateCounter('projects', 120);
    animateCounter('clients', 80);
    animateCounter('awards', 15);
  }, []);

  return (
    <>
      {/* ── Hero Section ── */}
      <section className="min-h-screen bg-white text-gray-800 px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="w-full">
            <img
              src="https://images.pexels.com/photos/7876046/pexels-photo-7876046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="About"
              className="rounded-xl shadow-xl w-full"
            />
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-orange-500 font-bold uppercase mb-2">About Us</h3>
            <h2 className="text-4xl font-bold mb-4 leading-snug">
              Creative Agency with a Passion for Innovation
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              We’re a digital agency focused on helping brands grow online. We blend design, technology, and strategy to deliver impactful results.
            </p>

            <div className="space-y-4 mb-8">
              <FeatureItem text="Modern & Responsive Design" />
              <FeatureItem text="Custom Code & Scalability" />
              <FeatureItem text="Expert Consultation & Support" />
            </div>

            {/* Counters */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <CounterBox label="Projects" value={counter.projects} />
              <CounterBox label="Clients" value={counter.clients} />
              <CounterBox label="Awards" value={counter.awards} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Section ── */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Our Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <Service icon={<FaCode />} title="Web Development" desc="Scalable, fast applications built with modern tech." />
            <Service icon={<FaPalette />} title="UI/UX Design" desc="Creative, user-centered interfaces that wow users." />
            <Service icon={<FaRocket />} title="Brand Strategy" desc="Position your brand with clarity and power." />
          </div>
        </div>
      </section>

      {/* ── Team Section ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <TeamCard name="Sarah Johnson" role="Creative Director" image="https://images.pexels.com/photos/7793142/pexels-photo-7793142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <TeamCard name="Mike Anderson" role="Lead Developer" image="https://images.pexels.com/photos/7681568/pexels-photo-7681568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <TeamCard name="Emma Smith" role="UI/UX Designer" image="https://images.pexels.com/photos/7794008/pexels-photo-7794008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </div>
        </div>
      </section>
    </>
  );
}

// ── Components ──

function FeatureItem({ text }) {
  return (
    <div className="flex items-center">
      <FaCheckCircle className="text-orange-500 mr-3" />
      <span className="text-gray-700">{text}</span>
    </div>
  );
}

function CounterBox({ value, label }) {
  return (
    <div>
      <h4 className="text-3xl font-bold text-orange-500">{value}+</h4>
      <p className="text-gray-600">{label}</p>
    </div>
  );
}

function Service({ icon, title, desc }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
      <div className="text-orange-500 text-4xl mb-4">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

function TeamCard({ name, role, image }) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow text-center hover:shadow-md transition">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
      />
      <h4 className="text-xl font-bold text-gray-800">{name}</h4>
      <p className="text-gray-500">{role}</p>
    </div>
  );
}
