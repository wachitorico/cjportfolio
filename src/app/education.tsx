"use client";
import { useState } from 'react';

export default function Education() {
  return (
    <div className="bg-navy text-blue-900 py-8">
      {/* Main Content */}
      <div className="container mx-auto px-4">
        
        {/* Education Section */}
        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">EDUCATION</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-end items-center">
              <h3 className="text-xl font-medium">COLLEGE</h3>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Holy Cross of Davao College</h4>
              <p className="text-sm">Bachelor of Science in Information Technology</p>
              <p className="text-sm opacity-75">2021-2025</p>
            </div>

            <div className="flex justify-end items-center">
              <h3 className="text-xl font-medium">HIGH SCHOOL</h3>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Holy Cross of Davao College</h4>
              <p className="text-sm">SHS - Science, Technology, Engineering, and Mathematics</p>
              <p className="text-sm opacity-75">2019-2021</p>
              
              <div className="mt-3">
                <h4 className="text-lg font-semibold">Holy Cross of Davao College</h4>
                <p className="text-sm">JHS</p>
                <p className="text-sm opacity-75">2015-2019</p>
              </div>
            </div>

            <div className="flex justify-end items-center">
              <h3 className="text-xl font-medium">ELEMENTARY</h3>
            </div>
            <div>
              <h4 className="text-lg font-semibold">V.L. Angliongto Sr. Elementary School</h4>
              <p className="text-sm">Grade 1 - 6</p>
              <p className="text-sm opacity-75">2008-2015</p>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-white bg-opacity-20 my-8"></div>
        
        {/* Experience Section */}
        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">EXPERIENCE</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-end items-center">
              <h3 className="text-xl font-medium">Holy Cross of Davao College</h3>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Alumni Affairs Scholar</h4>
              <p className="text-sm opacity-75">2021 - 2025</p>
            </div>

            <div className="flex justify-end items-center">
              <h3 className="text-xl font-medium">Freelance</h3>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Photography, videography, editing, and UI/UX design</h4>
              <p className="text-sm opacity-75">2020 - PRESENT</p>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-white bg-opacity-20 my-8"></div>
        
        {/* Achievements Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">ACHIEVEMENTS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-end items-center">
              <h3 className="text-xl font-medium">MCITS 2024</h3>
            </div>
            <div>
              <h4 className="text-lg font-semibold">1st Placed in Infographic</h4>
            </div>

            <div className="flex justify-end items-center">
              <h3 className="text-xl font-medium">Dean List</h3>
            </div>
            <div>
              <h4 className="text-lg font-semibold">2nd Year - Second Semester</h4>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}