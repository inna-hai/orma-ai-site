import React from 'react';
import { siteSettings } from '@/data/staticData';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Layout({ children }) {
  return (
    <div dir="rtl" className="min-h-screen flex flex-col font-sans antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
      
      <Header />
      
      <main className="flex-1">
        {children}
      </main>
      
      <Footer settings={siteSettings} />
    </div>
  );
}
