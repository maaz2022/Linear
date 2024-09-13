'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const homePage = () => {
  const [isCentered, setIsCentered] = useState(false); // Image expand/collapse
  const toggleImageCenter = () => {
    setIsCentered(!isCentered);
  };
  return (
    <section className="relative flex justify-center items-center min-h-screen overflow-hidden">
      {/* Image section */}
      <div
        className={`absolute flex w-full max-w-7xl transition-all duration-700 ease-in-out ${
          isCentered ? 'opacity-0 -translate-x-[100%]' : 'opacity-100 translate-x-0'
        }`}
      >
        <div className="w-1/2 flex flex-col space-y-10">
          <h1 className="text-8xl font-extrabold text-[#032668]">
            Maaz <br />
            Nazeer
          </h1>
          <p className="text-[#032668] font-thin text-2xl mt-4 leading-loose">
            I am a website developer, based in Pakistan. I like to feed my cat in my spare time and build web projects that matter.
          </p>
          <div className="flex space-x-2">
            <a
              href="/MuhammadMaaz.pdf"
              download
              className="group relative inline-block px-6 py-4 border-2 border-[#032668] text-[#032668] text-[13px] font-semibold overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Download CV
              </span>
              <span className="absolute inset-0 bg-[#032668] scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </a>

            <Link
              href='/Discover'
              className="group relative inline-block px-8 py-4 border-2 border-[#032668] text-[#032668] text-[13px] font-semibold ml-2 overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Discover
              </span>
              <span className="absolute inset-0 bg-[#032668] scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </Link>
          </div>
        </div>

        <div className="w-1/2 flex justify-center items-center">
          <Image
            onClick={toggleImageCenter}
            src="/Itachi-Uchiha-Naruto.avif"
            alt="Profile Picture"
            width={600}
            height={600}
            className={`max-w-full h-auto object-cover rounded-lg shadow-3d transition-transform duration-700 ease-in-out ${
              isCentered ? 'scale-150 fixed left-0 top-0 z-50 w-screen h-screen' : 'rotate-3d rotate-3d-hover'
            }`}
          />
        </div>
      </div>

      {/* Render the content based on the active section */}


      {/* Full-screen Image Modal */}
      {isCentered && (
        <div
          className={`fixed inset-0 z-50 flex justify-center items-center bg-white transition-opacity duration-700 ease-in-out ${
            isCentered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative">
            <Image
              src="/Itachi-Uchiha-Naruto.avif"
              alt="Profile Picture"
              width={800}
              height={800}
              className="max-w-full h-auto object-cover rounded-lg transition-transform duration-700 ease-in-out"
            />
            <h1 className="absolute text-blue-800 bg-white px-4 py-1 rounded-full text-[13px] top-4 left-4">
              Muhammad Maaz
            </h1>
            <h1 className="absolute text-white px-4 py-1 rounded-full text-[13px] top-12 left-2">
              Full Stack Developer
            </h1>

            <button
              onClick={toggleImageCenter}
              className="absolute top-4 right-4 bg-[#032668] text-white text-lg px-4 py-2 rounded-full shadow-lg hover:bg-[#032f68] transition-colors duration-300"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default homePage
