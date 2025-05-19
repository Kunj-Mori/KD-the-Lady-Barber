import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from './ui/sheet';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-navy text-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#home" className="text-xl md:text-2xl font-serif font-bold flex items-center">
          <span className="text-amber mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <circle cx="6" cy="6" r="3" />
              <circle cx="6" cy="18" r="3" />
              <line x1="20" y1="4" x2="8.12" y2="15.88" />
              <line x1="14.47" y1="14.48" x2="20" y2="20" />
              <line x1="8.12" y1="8.12" x2="12" y2="12" />
            </svg>
          </span>
          <span>KD the Lady Barber</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="hover:text-amber-light transition-colors duration-300 font-accent text-sm">Home</a>
          <a href="#about" className="hover:text-amber-light transition-colors duration-300 font-accent text-sm">About</a>
          <a href="#services" className="hover:text-amber-light transition-colors duration-300 font-accent text-sm">Services</a>
          <a href="#contact" className="hover:text-amber-light transition-colors duration-300 font-accent text-sm">Contact</a>
          <Button
            asChild
            className="bg-burgundy hover:bg-burgundy-light text-white px-5 py-2 rounded font-accent font-semibold text-sm transition-colors duration-300"
          >
            <a href="#book">Book Now</a>
          </Button>
        </nav>
        
        {/* Mobile Menu */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open Menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-navy border-navy w-64 px-0">
            <div className="px-5 flex flex-col h-full">
              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-serif font-bold text-amber">Menu</span>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-4">
                <SheetClose asChild>
                  <a 
                    href="#home" 
                    className="hover:text-amber-light transition-colors duration-300 font-accent px-5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a 
                    href="#about" 
                    className="hover:text-amber-light transition-colors duration-300 font-accent px-5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a 
                    href="#services" 
                    className="hover:text-amber-light transition-colors duration-300 font-accent px-5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a 
                    href="#contact" 
                    className="hover:text-amber-light transition-colors duration-300 font-accent px-5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </a>
                </SheetClose>
              </nav>
              <div className="mt-auto px-5 pb-6">
                <SheetClose asChild>
                  <Button
                    asChild
                    className="w-full bg-burgundy hover:bg-burgundy-light text-white py-3 rounded text-center font-accent font-semibold transition-colors duration-300"
                  >
                    <a href="#book" onClick={() => setIsMenuOpen(false)}>Book Now</a>
                  </Button>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;