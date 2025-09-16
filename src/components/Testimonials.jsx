import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const content = {
      title: "Avis de nos clients",
      subtitle: "Approuvé par des experts et partenaires du monde entier",
      testimonials: [
        {
          name: "Riahi Najiba",
          company: "Global Tech Solutions",
          text: "Que Dieu te bénisse ma sœur, un excellent travail, en plus avec une éducation et une haute moralité. Mille mercis, vraiment. Une confiance sincère.",
          rating: 5
        },
        {
          name: "Dhekra Rhouma ",
          company: "International Consulting Group",
          text: "Mille mercis à vous, avec beaucoup de patience et de confiance, que tout se passe bien pour vous et que vos affaires soient toujours réglées.",
          rating: 5
        },
        {
          name: "Hedi Bekri",
          company: "Corporation Multinationale",
          text: "Un service au top, avec beaucoup de patience et surtout des conseils utiles.",
          rating: 5
        },
        {
          name: "Bà Bïnà",
          company: "Corporation Multinationale",
          text: "Bravo pour ton travail, que Dieu te bénisse et merci beaucoup. Je recommande vraiment à toute personne de travailler avec toi, sincèrement bravo.",
          rating: 5
        },
        {
          name: "Sonia Saidani",
          company: "Corporation Multinationale",
          text: "C’est la première fois que je traite avec des gens qui te respectent, qui se réjouissent pour toi, qui te comprennent et qui te considèrent avec délicatesse. Que Dieu vous bénisse.",
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
    <section id="testimonials" className="py-20 bg-gray-50">
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
          {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="h-12 md:h-16 opacity-60 hover:opacity-100 transition-opacity duration-200"
                />
              </div>
            ))}
          </div> */}
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