import React from 'react';
import aboutImage from '../assets/about-image.jpg';
import visaOriveta from '../assets/visa-oriventa.png'

const About = () => {
  const content = {
      title: "À Propos de nous",
      subtitle: "Votre Partenaire de Confiance pour le Succès Mondial",
      description: "Oriventa Pro Service Company meilleure agence professionnelle spécialisée dans la recherche d’emploi à l’étranger. Notre mission est de vous accompagner et encadrer avec orientation professionnelle à chaque étape : étude personnalisée de chaque  profil , création d’un dossier complet  conforme aux normes  internationales, Recherche active d'opportunités et candidatures ciblées, Mise en relation directe avec les entreprises , les employeurs , cabinet de recrutement et partenaires internationaux. Préparation aux entretiens et coaching personnalisé avec un suivi stratégique jusqu’à votre intégration.",
      mission: "Notre objectif est de vous accompagner dans vos démarches vers votre carrière idéale.",
      values: [
        {
          title: "Fiabilité et professionnalisme",
          description: "Transparence et sérieux à chaque étape, avec accompagnement personnalisé et orientation stratégique"
        },
        {
          title: "Expertise internationale",
          description: "Connaissance approfondie des marchés de l'emploi à l'étranger"
        },
        {
          title: "Réseau solide",
          description: "Relations directes avec employeurs , cabinets de recrutement et partenaires fiables "
        }
      ]
  };

  return (
    <section id="a-propos de nous" className="py-4 bg-gray-50">
      <div className='-mt-24 max-w-7xl mx-auto flex justify-center items-center'>

        <img src={visaOriveta} className="object-cover" width={420} alt="" />
      </div>

      <div className="-mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {content.title}
              </h2>
              <p className="text-xl text-blue-600 font-semibold mb-6">
                {content.subtitle}
              </p>

            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              {content.description}
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              {content.mission}
            </p>

            {/* Values */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Nos Valeurs
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {content.values.map((value, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h4 className="text-lg font-semibold text-blue-600 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">

            <div className="relative z-10">
              <img
                src={aboutImage}
                alt="Professional team meeting"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 opacity-20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 opacity-20 rounded-full blur-xl"></div>
            
            {/* Stats */}
            <div className="absolute bottom-6 left-6 bg-white bg-opacity-90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">
                  Clients Satisfaits
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">
                    Pays
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 