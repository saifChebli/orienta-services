import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const content = {
      title: "Ce que Disent Nos Clients",
      subtitle: "Approuvé par des professionnels et organisations du monde entier",
      testimonials: [
        {
          name: "Sarah Johnson",
          position: "Directrice RH",
          company: "Global Tech Solutions",
          text: "Orienta Pro Service nous a aidés à rationaliser notre processus de recrutement international. Leur expertise en demandes de visa et intégration culturelle était inestimable.",
          rating: 5
        },
        {
          name: "Michael Chen",
          position: "Directeur Développement Commercial",
          company: "International Consulting Group",
          text: "Les services de conseil professionnel fournis par Orienta Pro Service ont considérablement amélioré notre stratégie d'entrée sur de nouveaux marchés.",
          rating: 5
        },
        {
          name: "Emma Rodriguez",
          position: "Coordinatrice Voyage",
          company: "Corporation Multinationale",
          text: "Leurs services d'assistance voyage sont exceptionnels. Ils ont géré tous nos arrangements de voyage internationaux avec précision et soin.",
          rating: 5
        }
      ]
    
  };

  const clientLogos = [
    "https://via.placeholder.com/120x60/2563eb/ffffff?text=Client+1",
    "https://via.placeholder.com/120x60/1e40af/ffffff?text=Client+2",
    "https://via.placeholder.com/120x60/1d4ed8/ffffff?text=Client+3",
    "https://via.placeholder.com/120x60/2563eb/ffffff?text=Client+4",
    "https://via.placeholder.com/120x60/1e40af/ffffff?text=Client+5",
    "https://via.placeholder.com/120x60/1d4ed8/ffffff?text=Client+6"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => 
        (prev + 1) % content.testimonials.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [content]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      (prev + 1) % content.testimonials.length
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? content.testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content.title}
          </h2>
          <p className="text-xl text-gray-600">
            {content.subtitle}
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(content.testimonials[currentTestimonial].rating)].map((_, i) => (
                  <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                "{content.testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Author */}
              <div className="mb-6">
                <div className="text-lg font-semibold text-gray-900">
                  {content.testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-600">
                  {content.testimonials[currentTestimonial].position}
                </div>
                <div className="text-blue-600 font-medium">
                  {content.testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {content.testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Approuvé par des Entreprises Leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="h-12 md:h-16 opacity-60 hover:opacity-100 transition-opacity duration-200"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">
              Satisfaction Client
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">
              Placements Réussis
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">
              Pays Servis
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 