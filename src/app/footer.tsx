import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 border-t border-white/20">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Left side - Logo and name */}
        <div className="flex items-center mb-4 md:mb-0">
          <div className="mr-3">
            {/* Replace with your actual logo - can be an SVG or image */}
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-900 font-bold text-xl">
              C
            </div>
          </div>
          <div>
            <h3 className="font-bold text-xl">Cris Jhon B. Cantos</h3>
            <p className="text-sm text-white/70">© 2025 All Rights Reserved</p>
          </div>
        </div>
        
        {/* Right side - Description */}
        <div className="max-w-md text-center md:text-right">
          <p className="text-sm">
            Crafting digital experiences with creativity and purpose. 
            Passionate about design, development, and creating memorable interactive experiences.
          </p>
        </div>
      </div>
    </footer>
  );
}