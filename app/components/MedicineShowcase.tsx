import Image from 'next/image';
import Link from 'next/link';

const medicines = [
  {
    id: 1,
    name: "CardioGuard Plus",
    category: "Cardiovascular Health",
    description: "Advanced formula for heart health and blood pressure support",
    dosage: "One tablet daily with meals",
    price: "$45.99",
    image: "/medicine1.jpg"
  },
  {
    id: 2,
    name: "ImmunoShield",
    category: "Immune System",
    description: "Powerful immune system booster with vitamin C and zinc",
    dosage: "Two capsules daily",
    price: "$32.99",
    image: "/medicine2.jpg"
  },
  {
    id: 3,
    name: "NeuroCalm",
    category: "Neurological Support",
    description: "Natural anxiety and stress relief supplement",
    dosage: "One capsule twice daily",
    price: "$38.99",
    image: "/medicine3.jpg"
  },
  {
    id: 4,
    name: "JointFlex Pro",
    category: "Musculoskeletal",
    description: "Comprehensive joint support with glucosamine and chondroitin",
    dosage: "Two tablets daily with food",
    price: "$42.99",
    image: "/medicine4.jpg"
  },
  {
    id: 5,
    name: "DigestiWell",
    category: "Digestive Health",
    description: "Probiotic blend for optimal gut health and digestion",
    dosage: "One capsule before meals",
    price: "$28.99",
    image: "/medicine5.jpg"
  },
  {
    id: 6,
    name: "VitaMax Complete",
    category: "Multivitamins",
    description: "Complete daily multivitamin with essential nutrients",
    dosage: "One tablet daily",
    price: "$24.99",
    image: "/medicine6.jpg"
  }
];

export default function MedicineShowcase() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Premium Medicines</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of pharmaceutical products manufactured with the highest standards of quality and care
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {medicines.map((medicine) => (
            <div key={medicine.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <p className="text-blue-600 font-medium">{medicine.name}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {medicine.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{medicine.name}</h3>
                <p className="text-gray-600 mb-4">{medicine.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Dosage: {medicine.dosage}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">{medicine.price}</span>
                  <Link href={`/medicines/${medicine.id}`} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
