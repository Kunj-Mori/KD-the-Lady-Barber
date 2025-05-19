import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  price, 
  duration 
}) => (
  <Card className="service-card h-full bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border-0 flex flex-col">
    <div className="h-40 bg-navy flex items-center justify-center">
      <span className="text-accent">
        {Icon}
      </span>
    </div>
    <CardContent className="p-6 flex-1 flex flex-col">
      <h3 className="font-serif font-bold text-lg md:text-xl mb-3 text-navy">{title}</h3>
      <p className="text-gray-600 text-sm md:text-base mb-4 flex-1">{description}</p>
      <div className="flex justify-between items-center mb-4">
        <span className="font-accent font-semibold text-burgundy text-lg">{price}</span>
        <span className="text-xs md:text-sm text-gray-500 font-medium">{duration}</span>
      </div>
      <Button 
        asChild
        className="w-full bg-burgundy hover:bg-burgundy-light text-white font-accent font-semibold py-2.5 transition-colors duration-300 mt-auto"
      >
        <a href="#book" className="flex items-center justify-center">Book Now</a>
      </Button>
    </CardContent>
  </Card>
);

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [displayedServices, setDisplayedServices] = useState([]);
  const ITEMS_PER_PAGE = 6;
  
  const services = [
    {
      title: "HAIRCUT",
      description: "Classic fade, taper, or haircut with a razor edge up",
      price: "$45.00",
      duration: "45 MINS",
      category: "Essential Services"
    },
    {
      title: "HAIRCUT & BEARD TRIM",
      description: "Classic fade, taper, or haircut with a razor edge up WITH a razor beard lineup and a beard trim and hot towel",
      price: "$55.00",
      duration: "1 HR",
      category: "Essential Services"
    },
    {
      title: "FULL SERVICE",
      description: "This service includes a shampoo, hot towel shave (or just a hot towel service), haircut, black mask and a facial massage",
      price: "$85.00",
      duration: "1 HR 15 MINS",
      category: "Premium Services"
    },
    {
      title: "BEARD TRIM",
      description: "Beard line up, trim, and razor edge ONLY - Includes hot towel",
      price: "$20.00",
      duration: "30 MINS",
      category: "Essential Services"
    },
    {
      title: "KIDS CUT",
      description: "Classic fade, taper, or haircut with a razor edge up for kids 12 & under",
      price: "$30.00",
      duration: "40 MINS",
      category: "Essential Services"
    },
    {
      title: "EDGE UP",
      description: "Razor edge up with a clean up around the ears and neck line up",
      price: "$15.00",
      duration: "30 MINS",
      category: "Essential Services"
    },
    {
      title: "DESIGN",
      description: "Design ONLY - simple design $5.00...",
      price: "$10.00",
      duration: "30 MINS",
      category: "Style Services"
    },
    {
      title: "UNDERCUT",
      description: "Back taper with a design",
      price: "$35.00",
      duration: "45 MINS",
      category: "Style Services"
    },
    {
      title: "BRAIDS",
      description: "Please DM @kd_thelady barber to book braid designs and box braids. Braids are $10 a braid for cornrows!",
      price: "Price varies",
      duration: "2 HRS",
      category: "Style Services"
    },
    {
      title: "PERM",
      description: "Please DM @kd_theladybarber to book",
      price: "Price varies",
      duration: "3 HRS 30 MINS",
      category: "Style Services"
    },
    {
      title: "SMP",
      description: "Scalp Micropigmentation treatment",
      price: "Price varies",
      duration: "5 HRS 45 MINS",
      category: "Special Services"
    },
    {
      title: "SMP CONSULTATION",
      description: "Consultation for Scalp Micropigmentation",
      price: "Price varies",
      duration: "45 MINS",
      category: "Special Services"
    },
    {
      title: "NOSE WAXING",
      description: "Waxing of the nose hair",
      price: "$10.00",
      duration: "15 MINS",
      category: "Grooming Services"
    },
    {
      title: "BROW WAXING",
      description: "Waxing on the eyebrows",
      price: "$10.00",
      duration: "15 MINS",
      category: "Grooming Services"
    },
    {
      title: "RAZOR FADE",
      description: "Fade with a razor zero at the bottom",
      price: "$50.00",
      duration: "1 HR",
      category: "Style Services"
    },
    {
      title: "RED LIGHT THERAPY SCALP TREATMENT",
      description: "Therapeutic scalp treatment using red light therapy",
      price: "$15.00",
      duration: "20 MINS",
      category: "Special Services"
    },
    {
      title: "TINSEL",
      description: "Hair tinsel application - please add colors in comments!",
      price: "$60.00",
      duration: "1 HR",
      category: "Style Services"
    },
    {
      title: "SHAMPOO",
      description: "Shampoo and head massage",
      price: "$8.00",
      duration: "10 MINS",
      category: "Essential Services"
    },
    {
      title: "HEAD SHAVE",
      description: "Complete head shave service",
      price: "$30.00",
      duration: "45 MINS",
      category: "Essential Services"
    }
  ];

  // Initialize displayed services on mount
  useEffect(() => {
    setDisplayedServices(services.slice(0, ITEMS_PER_PAGE));
  }, []); // Empty dependency array since services is defined within component

  // Handle search and pagination
  useEffect(() => {
    const filteredServices = services.filter(service => 
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const start = currentPage * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    setDisplayedServices(filteredServices.slice(start, end));
  }, [searchTerm, currentPage]);

  const handleSearch = (value) => {
    setSearchTerm(value);
    setCurrentPage(0);
  };

  // Calculate total pages based on filtered services
  const filteredServices = services.filter(service => 
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(filteredServices.length / ITEMS_PER_PAGE);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
    } else {
      setCurrentPage(0); // Loop back to first page
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    } else {
      setCurrentPage(totalPages - 1); // Loop to last page
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-cream relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 text-navy opacity-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <line x1="20" y1="4" x2="8.12" y2="15.88" />
          <line x1="14.47" y1="14.48" x2="20" y2="20" />
          <line x1="8.12" y1="8.12" x2="12" y2="12" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 text-navy opacity-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-3">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-amber mx-auto mb-4"></div>
          <p className="text-center text-navy-light max-w-2xl mx-auto text-base md:text-lg">
            Experience premium grooming services tailored to your style and preferences.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border-2 border-navy focus:outline-none focus:border-amber transition-colors duration-300 text-navy placeholder-gray-400"
            />
            <svg
              className="absolute right-3 top-3.5 text-navy"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>
        
        {/* Services Grid with Navigation */}
        <div className="relative">
          {displayedServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {displayedServices.map((service, index) => (
                <ServiceCard 
                  key={`${service.title}-${index}`}
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 md:w-16 md:h-16">
                      <circle cx="6" cy="6" r="3" />
                      <circle cx="6" cy="18" r="3" />
                      <line x1="20" y1="4" x2="8.12" y2="15.88" />
                      <line x1="14.47" y1="14.48" x2="20" y2="20" />
                      <line x1="8.12" y1="8.12" x2="12" y2="12" />
                    </svg>
                  }
                  title={service.title}
                  description={service.description}
                  price={service.price}
                  duration={service.duration}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-navy text-lg">No services found matching your search.</p>
            </div>
          )}

          {/* Navigation Arrows */}
          {filteredServices.length > ITEMS_PER_PAGE && (
            <div className="flex justify-center items-center space-x-6 mt-8">
              <button
                onClick={prevPage}
                className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center hover:bg-navy-light transition-colors duration-300 shadow-md"
                aria-label="Previous page"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <span className="text-navy font-medium text-lg">
                Page {currentPage + 1} of {totalPages}
              </span>

              <button
                onClick={nextPage}
                className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center hover:bg-navy-light transition-colors duration-300 shadow-md"
                aria-label="Next page"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          )}
        </div>
        
        {/* Testimonial */}
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-16 relative mt-20">
          <div className="absolute -top-5 left-10 text-5xl text-amber opacity-30 transform -rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
            </svg>
          </div>
          <div className="relative z-10">
            <p className="text-navy-light text-lg italic font-serif mb-4">
              "She gave him a fabulous haircut all while making him feel safe and happy!"
            </p>
            <div className="flex items-center">
              <div className="mr-4">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-amber">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="font-accent font-semibold">Satisfied Customer</h4>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-amber">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <Button 
            asChild
            className="bg-burgundy hover:bg-burgundy-light text-white font-accent font-semibold px-10 py-4 h-auto rounded-lg transition-colors duration-300 text-lg shadow-md hover:shadow-lg"
          >
            <a href="#book" className="flex items-center justify-center">Book Your Appointment</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;