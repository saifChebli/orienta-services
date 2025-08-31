import React from 'react';
const Hero = () => {
  const content = {
      slogan: "Votre Passerelle vers les Opportunités Mondiales",
      subtitle: "Agence experte en recherche d'emploi à l'étranger, offrant un suivi personnalisé, accompagnement et conseils avec des stratégies efficaces pour développer votre carrière au-delà des frontières.",
      cta: "Contactez-nous",
      scrollText: "Faites défiler pour explorer"
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}

      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat gradient"
        // style={{
        //   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        // }}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          {content.slogan}
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          {content.subtitle}
        </p>
        
        <button
          onClick={scrollToContact}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          {content.cta}
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
        <div className="animate-bounce mb-2">
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
        <p className="text-sm opacity-75">{content.scrollText}</p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-600 opacity-20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400 opacity-20 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero; 