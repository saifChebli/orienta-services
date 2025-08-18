import React from 'react';

const About = () => {
  const content = {
      title: "À Propos",
      subtitle: "Votre Partenaire de Confiance pour le Succès Mondial",
      description: "Orienta Pro Service Company est un fournisseur leader de services professionnels complets, spécialisé dans l'assistance voyage, les solutions de recrutement et le conseil en entreprise. Avec des années d'expérience et un réseau mondial, nous aidons les particuliers et les organisations à naviguer dans les opportunités internationales avec confiance et expertise.",
      mission: "Notre mission est de combler les écarts culturels et professionnels, en fournissant des solutions transparentes qui permettent à nos clients de prospérer sur le marché mondial.",
      values: [
        {
          title: "Excellence",
          description: "Nous maintenons les plus hauts standards dans tous nos services"
        },
        {
          title: "Confiance",
          description: "Construire des relations durables grâce à la transparence et la fiabilité"
        },
        {
          title: "Innovation",
          description: "Évoluer continuellement pour répondre aux demandes mondiales changeantes"
        }
      ]
  };

  return (
    <section id="about-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Professional team meeting"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
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