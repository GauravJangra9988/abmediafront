import React from 'react';
import { FiClock, FiDollarSign } from 'react-icons/fi';
import { MdNetworkWifi } from 'react-icons/md';
import { BsBook } from 'react-icons/bs';

const advantages = [
  {
    icon: <FiClock size={50} className="text-[#ffc107]" />,
    title: 'Save Time',
    description: 'No more switching for packages or plans.',
  },
  {
    icon: <FiDollarSign size={50} className="text-[#ffc107]" />,
    title: 'Save Money',
    description: 'Compare, negotiate, and choose the best.',
  },
  {
    icon: <MdNetworkWifi size={50} className="text-[#ffc107]" />,
    title: 'Trusted Network',
    description: 'A Trusted Network of 7000+ Travel Agents.',
  },
  {
    icon: <BsBook size={50} className="text-[#ffc107]" />,
    title: 'Multiple Options',
    description: 'Itineraries & Travel Tips from Trusted Agents.',
  },
];

export const Advantages = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-20 bg-[#77c8c9] text-white text-center">
      <h3 className="text-4xl font-bold mb-2">Our Advantages</h3>
      <p className="text-sm text-white mb-8 max-w-xl">
        You can rely on our experience and the quality of services we provide.
        <br />
        Here are other reasons to book tours at Treat Holidays
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-10">
        {advantages.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-white p-6 rounded-full mb-4 flex items-center justify-center">
              {item.icon}
            </div>
            <h4 className="text-xl font-bold text-white">{item.title}</h4>
            <p className="text-white mt-2 text-sm max-w-xs">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
