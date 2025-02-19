import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import Stats from '../components/Stats';
import CorporateRestructuring from '../components/CorpRestructuring';
import ClientSection from '../components/ClientSection';
import BlogSection from '../components/BlogSection';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Stats />
      <CorporateRestructuring />
      <ClientSection />
      <BlogSection />
    </div>
  );
};

export default HomePage;