import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy text-center mb-2">
            Traditional Craft, Modern Style
          </h2>
          <div className="w-24 h-1 bg-amber mx-auto mb-12"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* About Image */}
          <div className="w-full md:w-1/2 fade-in">
            <img 
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
              alt="Denton Dapper Devil Barber Shop Interior" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          {/* About Text */}
          <div className="w-full md:w-1/2 fade-in">
            <div className="relative">
              <span className="absolute -top-6 -left-6 text-6xl text-accent opacity-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
                  <circle cx="6" cy="6" r="3" />
                  <circle cx="6" cy="18" r="3" />
                  <line x1="20" y1="4" x2="8.12" y2="15.88" />
                  <line x1="14.47" y1="14.48" x2="20" y2="20" />
                  <line x1="8.12" y1="8.12" x2="12" y2="12" />
                </svg>
              </span>
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold text-navy-light mb-4">
                  Where Style Meets Tradition
                </h3>
                <p className="mb-4 text-navy-light leading-relaxed">
                  For over 3 years, KD the Lady Barber has been Denton's premier destination for classic cuts and modern styles. Founded by KD the Lady Barber, our shop combines traditional barbering techniques with contemporary style.
                </p>
                <p className="mb-4 text-navy-light leading-relaxed">
                  We pride ourselves on attention to detail, personalized service, and creating a welcoming atmosphere for everyone who walks through our doors.
                </p>
                <p className="mb-6 text-navy-light leading-relaxed">
                  Whether you're looking for a classic cut, a modern style, or something entirely your own, our expert barbers have the skills and experience to deliver exceptional results.
                </p>
                
                <div className="flex items-center space-x-6 mt-8">
                  <div className="text-center">
                    <span className="block text-accent text-4xl mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 mx-auto">
                        <circle cx="12" cy="8" r="7" />
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                      </svg>
                    </span>
                    <span className="block font-accent font-semibold">Premium Quality</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-accent text-4xl mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 mx-auto">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </span>
                    <span className="block font-accent font-semibold">3+ Years</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-accent text-4xl mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 mx-auto">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </span>
                    <span className="block font-accent font-semibold">5-Star Service</span>
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