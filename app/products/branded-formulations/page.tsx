'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function BrandedFormulationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Link href="/products" className="text-white hover:text-blue-200 mr-4">
              ← Back to Products
            </Link>
            <span className="text-blue-200">|</span>
            <span className="ml-4 text-blue-200">Branded Formulations</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">BRANDED FORMULATIONS</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Innovative branded pharmaceutical products with proven efficacy and safety profiles. 
            Our branded formulations are developed through extensive research and clinical trials to ensure optimal patient outcomes.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Excellence in Branded Pharmaceutical Solutions
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At NR Medicare, we are committed to developing innovative branded formulations that address critical healthcare needs. 
                Our portfolio includes prescription medicines across various therapeutic areas, each developed with precision and backed by 
                rigorous clinical research.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We leverage cutting-edge technology and scientific expertise to create formulations that enhance patient compliance 
                and therapeutic outcomes. Our branded products are manufactured in state-of-the-art facilities that comply with 
                international quality standards.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Through continuous innovation and investment in research, we strive to bring new and improved treatment options to 
                healthcare professionals and patients worldwide, contributing to better health outcomes and quality of life.
              </p>
              <Link 
                href="/products/branded-formulations/portfolio"
                className="inline-flex items-center text-blue-900 font-semibold text-lg hover:text-blue-700 transition-colors duration-300"
              >
                Know More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-blue-50 rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-800">R&D Excellence</h3>
                    <p className="text-gray-600 text-sm mt-1">Advanced research capabilities</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-800">Quality Assurance</h3>
                    <p className="text-gray-600 text-sm mt-1">International standards compliance</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-800">Innovation</h3>
                    <p className="text-gray-600 text-sm mt-1">Cutting-edge formulation technology</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-800">Global Reach</h3>
                    <p className="text-gray-600 text-sm mt-1">Worldwide distribution network</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Therapeutic Areas Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Therapeutic Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Cardiovascular</h3>
                <p className="text-gray-600 text-sm">Advanced treatments for heart health and hypertension management</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Diabetology</h3>
                <p className="text-gray-600 text-sm">Comprehensive diabetes management solutions and insulin therapies</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Gastroenterology</h3>
                <p className="text-gray-600 text-sm">Effective treatments for digestive disorders and gastrointestinal conditions</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Neurology</h3>
                <p className="text-gray-600 text-sm">Innovative treatments for neurological disorders and central nervous system conditions</p>
              </div>
            </div>
          </div>

          {/* Manufacturing Excellence Section */}
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Manufacturing Excellence</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">State-of-the-Art Facilities</h4>
                <p className="text-gray-600 text-sm">
                  Our manufacturing facilities are equipped with the latest technology and adhere to international 
                  quality standards including USFDA, EU-GMP, and WHO-GMP certifications.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Quality Control</h4>
                <p className="text-gray-600 text-sm">
                  Rigorous quality control processes at every stage ensure product consistency, safety, and efficacy 
                  meeting global regulatory requirements.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Supply Chain</h4>
                <p className="text-gray-600 text-sm">
                  Efficient supply chain management ensures timely delivery of our branded formulations to healthcare 
                  providers and patients across multiple markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
