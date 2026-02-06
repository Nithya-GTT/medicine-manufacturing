'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/navigation';

export default function ProductsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Products Overview Section */}
      <div className="relative bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase text-blue-600 tracking-wider mb-2">OVERVIEW</p>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Meeting unmet patient needs</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Biocon is addressing global medical needs through a portfolio of differentiated and high quality, life-saving biotherapeutics.
            We have used innovative science to bring competition for some of the world's most expensive medicines through our
            generics and biosimilars, thus enabling affordable access to advanced therapies for millions of patients with chronic
            conditions across the globe. At the same time, we are ensuring that a larger number of patients are able to access generic
            versions of drugs like statins and immunosupressants by supplying our high quality APIs to drug makers worldwide.
          </p>
        </div>
      </div>

      {/* Product Categories Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Generics Card */}
            <div 
              onClick={() => router.push('/products/generics')}
              className="bg-orange-600 rounded-lg shadow-lg p-8 flex flex-col justify-between transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              <div>
                <svg className="w-16 h-16 text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <h3 className="text-2xl font-bold text-white mb-2">GENERICS</h3>
                <p className="text-white opacity-90">
                  High-quality generic medicines that make healthcare affordable and accessible to millions worldwide.
                </p>
              </div>
              <div className="text-white text-2xl font-bold mt-4">{'>>'}</div>
            </div>

            {/* Biosimilars Card */}
            <div 
              onClick={() => router.push('/products/biosimilars')}
              className="bg-green-600 rounded-lg shadow-lg p-8 flex flex-col justify-between transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              <div>
                <svg className="w-16 h-16 text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
                <h3 className="text-2xl font-bold text-white mb-2">BIOSIMILARS</h3>
                <p className="text-white opacity-90">
                  Advanced biologic medicines that provide affordable alternatives to expensive branded biologics.
                </p>
              </div>
              <div className="text-white text-2xl font-bold mt-4">{'>>'}</div>
            </div>

            {/* Branded Formulation Card */}
            <div 
              onClick={() => router.push('/products/branded-formulations')}
              className="bg-blue-900 rounded-lg shadow-lg p-8 flex flex-col justify-between transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              <div>
                <svg className="w-16 h-16 text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <h3 className="text-2xl font-bold text-white mb-2">BRANDED FORMULATION</h3>
                <p className="text-white opacity-90">
                  Innovative branded pharmaceutical products with proven efficacy and safety profiles.
                </p>
              </div>
              <div className="text-white text-2xl font-bold mt-4">{'>>'}</div>
            </div>

            {/* Novel Biologics Card */}
            <div 
              onClick={() => router.push('/products/novel-biologics')}
              className="bg-purple-600 rounded-lg shadow-lg p-8 flex flex-col justify-between transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              <div>
                <svg className="w-16 h-16 text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="text-2xl font-bold text-white mb-2">NOVEL BIOLOGICS</h3>
                <p className="text-white opacity-90">
                  Cutting-edge biologic therapies developed through innovative research and advanced technology.
                </p>
              </div>
              <div className="text-white text-2xl font-bold mt-4">{'>>'}</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
