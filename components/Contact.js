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
    <section id="contact" className="bg-navy text-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Map Section */}
          <div className="h-[500px] rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3342.9005564029277!2d-97.13301368482163!3d33.094797880879954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c4bd650766d51%3A0x1c9e77ad4f4c6d8a!2s1511%20Malone%20St%2C%20Denton%2C%20TX%2076201!5e0!3m2!1sen!2sus!4v1623443483322!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="KD The Barber Location"
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Contact Info Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Location & Hours</h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">KD The Barber</h3>
              <p className="text-lg mb-1">1511 Malone St</p>
              <p className="text-lg mb-3">Denton, Texas 76201</p>

              <a
                href="tel:+19402183113"
                className="text-amber hover:text-amber-light transition-all duration-300 text-lg block mb-2"
              >
                (940) 218-3113
              </a>

              <a
                href="mailto:kdthebarber3@gmail.com"
                className="text-amber hover:text-amber-light transition-all duration-300 text-lg block mb-4"
              >
                kdthebarber3@gmail.com
              </a>

              <a
                href="https://maps.google.com/?q=1511+Malone+St,+Denton,+TX+76201"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber hover:text-amber-light transition-all duration-300 text-lg inline-flex items-center"
              >
                Get directions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 ml-2"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            <BusinessHours />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
