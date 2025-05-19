import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Fade-in animations on scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    
    function checkFade() {
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('visible');
        }
      });
    }
    
    // Initial check
    checkFade();
    
    // Check on scroll
    window.addEventListener('scroll', checkFade);
    
    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', checkFade);
    };
  }, []);

  return (
    <>
      <Head>
        <title>KD the Lady Barber - Premium Barber Shop</title>
        <meta name="description" content="Premium grooming services in Denton, Texas. KD the Lady Barber offers quality haircuts, beard trims, and more, with over 3 years of experience." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="KD the Lady Barber - Premium Barber Shop" />
        <meta property="og:description" content="Premium grooming services in Denton, Texas. Quality haircuts, beard trims, and hot towel shaves." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thedentondapperdevil.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
}