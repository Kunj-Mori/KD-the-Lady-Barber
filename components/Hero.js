import { useEffect, useRef } from 'react';
import { Button } from './ui/button';

const Hero = () => {
  const starsRef = useRef(null);

  useEffect(() => {
    // Star rating animation
    const stars = starsRef.current?.querySelectorAll('.star');
    if (stars) {
      stars.forEach((star, index) => {
        star.style.opacity = '0';
        setTimeout(() => {
          star.style.opacity = '1';
        }, 100 * (index + 1));
      });
    }
  }, []);

  return (
    <section id="home" className="pt-24 md:pt-0 bg-hero min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16 md:py-0">
        <div 
          className="max-w-3xl animated-fade-in"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 leading-tight">
            Sharp Cuts Deserve Sharp Websites
          </h1>
          <h2 className="text-xl md:text-2xl font-serif text-cream mb-8">
            Premium Grooming in Denton, Texas
          </h2>
          
          <div className="mb-8 flex items-center" ref={starsRef}>
            <div className="flex">
              <span className="star text-2xl mr-1 text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </span>
              <span className="star text-2xl mr-1 text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </span>
              <span className="star text-2xl mr-1 text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </span>
              <span className="star text-2xl mr-1 text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </span>
              <span className="star text-2xl text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </span>
            </div>
            <span className="ml-3 text-cream italic font-serif">5.0 Rating</span>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              asChild
              className="bg-amber hover:bg-amber-light text-navy font-accent font-semibold px-8 py-6 h-auto rounded"
            >
              <a href="#book">Book Appointment</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy font-accent font-semibold px-8 py-6 h-auto rounded"
            >
              <a href="#services">View Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;