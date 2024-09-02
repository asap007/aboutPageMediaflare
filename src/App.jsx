// src/AboutPage.jsx
import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

const AboutPage = () => {
  const services = [
    {
      title: 'Digital Marketing',
      description: 'Boost your online presence and reach your target audience with our comprehensive digital marketing strategies.',
      icon: '📈',
    },
    {
      title: 'Web Development',
      description: 'We create stunning, responsive websites that are optimized for performance and user experience.',
      icon: '💻',
    },
    {
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive organic traffic to your website with our SEO services.',
      icon: '🔍',
    },
    {
      title: 'Social Media Management',
      description: 'Engage with your audience and grow your brand on social media platforms with our expert management services.',
      icon: '📱',
    },
    {
      title: 'Content Creation',
      description: 'Craft compelling content that resonates with your audience and strengthens your brand’s voice.',
      icon: '✍️',
    },
    {
      title: 'Brand Strategy',
      description: 'Develop a strong brand identity and strategy that sets you apart from the competition.',
      icon: '🎨',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 text-gray-200 font-serif">
      {/* Header with Logo */}
      <header className="flex justify-center items-center py-8 bg-gradient-to-r from-gray-800 to-gray-700 shadow-md">
        <img src="/images/mediaflarelogo.png" alt="Agency Logo" className="h-36 w-auto filter drop-shadow-lg" />
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-700 py-4 text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-white">Welcome to Mediaflare</h1>
        <p className="text-xl text-gray-300">
          Elevating your brand through innovative digital solutions.
        </p>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-100">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-4">
                <FaPhone className="text-indigo-500 text-3xl" />
                <div>
                  <h3 className="text-xl font-medium text-gray-200">Phone</h3>
                  <p>Vaibhav Agrawal: <a href="tel:+916260074553" className="text-indigo-400 hover:underline">+91 6260074553</a></p>
                  <p>Aditya Singh: <a href="tel:+919753803084" className="text-indigo-400 hover:underline">+91 9753803084</a></p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-indigo-500 text-3xl" />
                <div>
                  <h3 className="text-xl font-medium text-gray-200">Email</h3>
                  <a href="mailto:info@mediaflare.tech" className="text-indigo-400 hover:underline">info@mediaflare.tech</a>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-4">
                <FaGlobe className="text-indigo-500 text-3xl" />
                <div>
                  <h3 className="text-xl font-medium text-gray-200">Website</h3>
                  <a href="https://www.mediaflare.tech" className="text-indigo-400 hover:underline">www.mediaflare.tech</a>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-indigo-500 text-3xl" />
                <div>
                  <h3 className="text-xl font-medium text-gray-200">Address</h3>
                  <p className='text-indigo-500'>First Floor, Seema Vila, Near Fortune Signature,</p>
                  <p className='text-indigo-500'>Bawadiya Kalan, Bhopal, Madhya Pradesh 462026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Services</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-700 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-center mb-4 text-4xl">
                  <span role="img" aria-label={service.title}>{service.icon}</span>
                </div>
                <h3 className="text-2xl font-semibold text-indigo-400 mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm">© 2024 MediaFlare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
