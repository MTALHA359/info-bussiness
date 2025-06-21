'use client';
import { useState } from 'react';

export default function InvestmentPage() {
  const plans = [
    { title: "Starter Plan", amount: "$100", desc: "Basic entry-level investment." },
    { title: "Silver Plan", amount: "$500", desc: "Mid-tier monthly investment." },
    { title: "Gold Plan", amount: "$1000", desc: "Pro investors' choice." },
    { title: "Platinum Plan", amount: "$5000", desc: "Long-term high returns." },
  ];

  const history = [
    { type: 'Deposit', amount: '$1000', date: '2025-06-01' },
    { type: 'Withdrawal', amount: '$200', date: '2025-06-05' },
    { type: 'Deposit', amount: '$500', date: '2025-06-10' },
    { type: 'Withdrawal', amount: '$300', date: '2025-06-15' },
  ];

  return (
    <main className="bg-white min-h-screen p-6 space-y-16">

      {/* Section 1: Investment Plans */}
      <section>
        <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">📊 Investment Plans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="bg-orange-50 border border-orange-200 hover:opacity-90 hover:shadow-xl transition-all duration-300 p-6 rounded-xl text-center"
            >
              <h3 className="text-xl font-bold text-orange-700 mb-2">{plan.title}</h3>
              <p className="text-2xl font-semibold text-orange-500 mb-2">{plan.amount}</p>
              <p className="text-sm text-gray-700">{plan.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Deposit & Withdrawal History */}
      <section>
        <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">📜 Deposit & Withdrawal History</h2>
        <div className="bg-orange-50 p-6 rounded-xl shadow overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="bg-orange-200 text-orange-800">
                <th className="py-2 px-4">Type</th>
                <th className="py-2 px-4">Amount</th>
                <th className="py-2 px-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {history.map((h, i) => (
                <tr key={i} className="border-b hover:bg-orange-100">
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
