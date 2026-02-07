'use client';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const images = [
    { src: '/home.png', title: 'Quality Healthcare', subtitle: 'Delivering excellence in pharmaceutical manufacturing' },
    { src: '/home2.jpg', title: 'Global Reach', subtitle: 'Serving patients worldwide with innovative solutions' },
    { src: '/home3.jpg', title: 'Research & Innovation', subtitle: 'Pioneering breakthrough treatments and technologies' },
    { src: '/home4.jpg', title: 'Patient Care', subtitle: 'Committed to better health outcomes for everyone' }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-slide images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Fixed Chat Widgets */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
        {/* WhatsApp Button */}
        <a href="https://wa.me/9663664548" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white w-12 h-12 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center border border-black">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497 0-.198-.05-.463-.223-.66-.173-.197-.847-.847-1.011-.966-.149-.099-.348-.149-.547-.149-.199 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.572-.083 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
        
        {/* Chat Box */}
        <div className={`${isChatOpen ? 'w-80 h-auto rounded-lg' : 'w-12 h-12 rounded-full'} bg-black shadow-2xl p-4 flex items-center justify-center transition-all duration-300`}>
          <svg 
            className={`w-6 h-6 text-white ${isChatOpen ? 'hidden' : 'block'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            onClick={() => setIsChatOpen(!isChatOpen)}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          
          {/* Expanded Chat Content */}
          {isChatOpen && (
            <div className="w-full">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-white">Chat with us</h3>
                <button 
                  className="text-gray-400 hover:text-white"
                  onClick={() => setIsChatOpen(false)}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="bg-gray-800 rounded-lg p-3 mb-3 h-32 overflow-y-auto">
                <div className="text-sm text-gray-300">
                  <p className="mb-2">👋 Welcome to NR Medicare!</p>
                  <p>How can we help you today?</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <input 
                  type="text" 
                  placeholder="Type your message..." 
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400 text-sm"
                />
                <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <main>
        {/* Hero Section with Image */}
        <section className="relative text-black py-20" style={{ backgroundImage: 'url(/backhome.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 font-sans text-black">
                  NR Medicare
                </h1>
                <p className="text-xl mb-8 text-black font-sans font-medium leading-relaxed">
                  NR Medicare is a pharmaceutical manufacturing company committed to delivering high-quality, affordable, and reliable medicines that support better health outcomes. With a strong focus on quality, compliance, and innovation, company specializes in development and manufacturing of a wide range of pharmaceutical formulations designed to meet evolving needs of healthcare professionals and individuals.
                </p>
              </div>
              <div className="relative">
                {/* Image Gallery with Arrows */}
                <div className="relative rounded-lg shadow-2xl overflow-hidden">
                  <img 
                    src={images[currentImage].src} 
                    alt={`NR Medicare Image ${currentImage + 1}`} 
                    className="w-full h-96 object-cover opacity-80"
                  />
                  
                  {/* Text Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{images[currentImage].title}</h3>
                      <p className="text-lg opacity-90">{images[currentImage].subtitle}</p>
                    </div>
                  </div>
                  
                  {/* Left Arrow */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  {/* Right Arrow */}
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === currentImage 
                            ? 'bg-white w-8' 
                            : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose NR Medicare
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We combine advanced technology with medical expertise to deliver exceptional healthcare solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Quality Excellence</h3>
                <p className="text-gray-600">ISO certified manufacturing with strict quality control</p>
              </div>
              
              <div className="text-center bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-green-600 mb-2">Innovation</h3>
                <p className="text-gray-600">Cutting-edge research and development in healthcare</p>
              </div>
              
              <div className="text-center bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-purple-600 mb-2">Global Reach</h3>
                <p className="text-gray-600">Serving patients and providers worldwide</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                <div className="text-gray-600">Research Projects</div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
                <div className="text-gray-600">Years</div>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-red-600 mb-2">99%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Join us in our mission to deliver quality pharmaceutical solutions worldwide. Partner with NR Medicare for excellence in medicine manufacturing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/products'}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold shadow-lg transition-all duration-200 hover:scale-105"
              >
                Learn more
              </button>
              <button 
                onClick={() => window.location.href = '/contact'}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Contact us
              </button>
            </div>
          </div>
        </section>
       
      </main>
      
      <Footer />
    </div>
  );
}
