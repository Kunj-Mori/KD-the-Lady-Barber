import React from 'react';

const BusinessHours = () => {
  const hours = [
    { day: 'Monday', hours: '10:00 am - 6:00 pm' },
    { day: 'Tuesday', hours: '10:00 am - 6:00 pm' },
    { day: 'Wednesday', hours: '10:00 am - 6:00 pm' },
    { day: 'Thursday', hours: '10:00 am - 7:00 pm' },
    { day: 'Friday', hours: '11:30 am - 7:00 pm' },
    { day: 'Saturday', hours: '9:00 am - 4:00 pm' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <div className="bg-navy-light/30 rounded-2xl p-6 backdrop-blur-sm shadow-lg border border-white/5">
      <h3 className="font-accent font-semibold text-2xl mb-6 text-amber">
        Hours of Operation
      </h3>
      <div className="space-y-4">
        {hours.map((schedule, index) => (
          <div
            key={index}
            className={`flex justify-between items-center ${
              schedule.day === 'Sunday' ? 'text-amber font-semibold' : 'text-cream'
            } ${index !== hours.length - 1 ? 'border-b border-white/10 pb-3' : ''}`}
          >
            <span className="font-medium text-lg">{schedule.day}</span>
            <span className="font-medium text-lg tracking-wide">{schedule.hours}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="bg-navy text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-x-12">
          {/* Contact Information */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 fade-in">
            <h2 className="text-3xl font-serif font-bold mb-6">Visit Us</h2>

            {/* Location */}
            <div className="flex items-start mb-6">
              <div className="text-amber text-xl mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h3 className="font-accent font-semibold text-lg mb-1">Our Location</h3>
                <p className="text-cream">1511 Malone St, Denton, TX 76201, United States</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start mb-6">
              <div className="text-amber text-xl mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <h3 className="font-accent font-semibold text-lg mb-1">Phone</h3>
                <a href="tel:+19402183113" className="text-cream hover:text-amber transition-colors duration-300">
                  +1 (940) 218-3113
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mb-8">
              <BusinessHours />
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-accent font-semibold text-lg mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Facebook */}
                <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-amber flex items-center justify-center text-navy hover:bg-amber-light transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12a10 10 0 1 0-11.6 9.87v-6.99h-2.15V12h2.15V9.8c0-2.14 1.27-3.33 3.22-3.33.93 0 1.91.17 1.91.17v2.1h-1.08c-1.06 0-1.39.66-1.39 1.34V12h2.37l-.38 2.88h-1.99v6.99A10 10 0 0 0 22 12Z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-amber flex items-center justify-center text-navy hover:bg-amber-light transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10Zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm4.5-.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" />
                  </svg>
                </a>

                {/* Twitter */}
                <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-amber flex items-center justify-center text-navy hover:bg-amber-light transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.58 8.58 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.12 4c-2.36 0-4.28 1.92-4.28 4.28 0 .34.04.67.11.98A12.13 12.13 0 0 1 3.15 5.1a4.28 4.28 0 0 0 1.32 5.71A4.3 4.3 0 0 1 2.8 10v.05c0 2.03 1.45 3.73 3.37 4.11a4.32 4.32 0 0 1-1.93.07 4.29 4.29 0 0 0 4 2.97A8.6 8.6 0 0 1 2 19.53 12.14 12.14 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.34 8.34 0 0 0 22.46 6Z" />
                  </svg>
                </a>

                {/* Yelp */}
                <a href="#" aria-label="Yelp" className="w-10 h-10 rounded-full bg-amber flex items-center justify-center text-navy hover:bg-amber-light transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.09 10.2L11.2 8.62l-.2-5.65a.67.67 0 0 0-.56-.64l-.12-.01a.67.67 0 0 0-.67.67v5.63l-2.93 1.56a.67.67 0 0 0-.15 1.09l4.42 3.87-1.88 4.98a.67.67 0 0 0 1.12.72l3.55-3.53 3.36 2.41a.67.67 0 0 0 1.02-.39.67.67 0 0 0-.25-.7l-3.87-3.07 1.32-3.79a.67.67 0 0 0-.46-.88Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full lg:w-1/2 fade-in" id="book">
            <div className="h-64 md:h-full bg-gray-300 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3342.9005564029277!2d-97.13301368482163!3d33.094797880879954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c4bd650766d51%3A0x1c9e77ad4f4c6d8a!2s1511%20Malone%20St%2C%20Denton%2C%20TX%2076201!5e0!3m2!1sen!2sus!4v1623443483322!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="The Denton Dapper Devil Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
