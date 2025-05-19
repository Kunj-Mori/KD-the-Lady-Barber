import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-navy-light text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-serif font-bold flex items-center">
              <span className="text-amber mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <circle cx="6" cy="6" r="3" />
                  <circle cx="6" cy="18" r="3" />
                  <line x1="20" y1="4" x2="8.12" y2="15.88" />
                  <line x1="14.47" y1="14.48" x2="20" y2="20" />
                  <line x1="8.12" y1="8.12" x2="12" y2="12" />
                </svg>
              </span>
              <span>KD the Lady Barber</span>
            </a>
            <p className="text-sm text-gray-400 mt-1">KD the Lady Barber</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} KD the Lady Barber. All rights reserved.</p>
            <p className="text-xs text-gray-500 mt-1">Premium Grooming in Denton, Texas</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;