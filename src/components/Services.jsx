import React from 'react';
import { 
  GlobeAltIcon, 
  UserGroupIcon, 
  BriefcaseIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const Services = () => {
  const content = {
      title: "Nos Services",
      subtitle: "Solutions Complètes pour Votre Succès Mondial",
      services: [
        {
          icon: GlobeAltIcon,
          title: "Assistance Voyage",
          description: "Support de voyage complet incluant les demandes de visa, réservation d'hébergement et orientation culturelle pour les missions internationales.",
          features: [
            "Support Visa & Immigration",
            "Planification & Réservation",
            "Orientation Culturelle",
            "Support 24/7"
          ]
        },
        {
          icon: UserGroupIcon,
          title: "Services de Recrutement",
          description: "Services d'acquisition et de placement de talents, connectant les professionnels qualifiés aux opportunités mondiales.",
          features: [
            "Acquisition de Talents",
            "Sélection de Candidats",
            "Coordination d'Entretiens",
            "Support de Placement"
          ]
        },
        {
          icon: BriefcaseIcon,
          title: "Conseil Professionnel",
          description: "Services de conseil stratégique et de développement professionnel pour améliorer votre présence sur le marché mondial.",
          features: [
            "Stratégie d'Entreprise",
            "Support d'Entrée Marché",
            "Formation Professionnelle",
            "Guidance Conformité"
          ]
        }
      ]
    
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.services.map((service, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 group-hover:underline">
                En Savoir Plus →
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Prêt à Commencer ?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
     
               'Laissez-nous vous aider à naviguer dans vos opportunités mondiales avec nos services professionnels complets.'
              
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Commencer Aujourd\'hui
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 