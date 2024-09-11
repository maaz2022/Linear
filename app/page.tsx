'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, FolderHeart, Lightbulb, Phone, User } from "lucide-react";

export default function Home() {
  const [isCentered, setIsCentered] = useState(false);

  const toggleImageCenter = () => {
    setIsCentered(!isCentered);
  };

  return (
    <section className="relative flex justify-center items-center min-h-screen overflow-hidden">
      {/* Main Content */}
      <div
        className={`absolute flex w-full max-w-7xl transition-transform duration-700 ease-in-out ${
          isCentered ? "translate-x-[-100%] opacity-0" : "translate-x-0 opacity-100"
        }`}
      >
        <div className="w-1/2 flex flex-col space-y-10">
          <h1 className="text-8xl font-extrabold text-[#032668]">
            Maaz <br />Nazeer
          </h1>
          <p className="text-[#032668] font-thin text-2xl mt-4 leading-loose">
            I am a website developer, based in Pakistan. I like to feed my cat in my spare time and build web projects that matter.
          </p>
          <div className="flex space-x-2">
            <a
              href="/MuhammadMaaz.pdf" download
              className="group relative inline-block px-6 py-4 border-2 border-[#032668] text-[#032668] text-[13px] font-semibold overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Download CV
              </span>
              <span className="absolute inset-0 bg-[#032668] scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </a>

            <button
              onClick={toggleImageCenter}
              className="group relative inline-block px-8 py-4 border-2 border-[#032668] text-[#032668] text-[13px] font-semibold ml-2 overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Discover
              </span>
              <span className="absolute inset-0 bg-[#032668] scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </button>
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
              isCentered
                ? "scale-150 fixed left-0 top-0 z-50 w-screen h-screen" // Expands and centers image
                : "rotate-3d rotate-3d-hover" // Normal rotation state
            }`}
          />
        </div>
      </div>

      {/* Full-Screen Image with Close Button */}
      {isCentered && (
        <div className={`fixed inset-0 z-50 flex justify-center items-center bg-white transition-opacity duration-700 ease-in-out ${isCentered ? "opacity-80" : "opacity-0"}`}>
          <div className="relative">
  <Image
    src="/Itachi-Uchiha-Naruto.avif"
    alt="Profile Picture"
    width={800}
    height={800}
    className="max-w-full h-auto object-cover rounded-lg transition-transform duration-700 ease-in-out"
  />
  <h1 className="absolute text-blue-800 bg-white px-4 py-1 rounded-full text-[13px] top-4 left-4">Muhammad Maaz</h1>
  <h1 className="absolute text-white px-4 py-1 rounded-full text-[13px] top-12 left-2">Full Stack Developer</h1>
  
  {/* Icon Section */}
  <div className="absolute bottom-4 left-4 flex space-x-12 text-white">
    <Link href="/" className="flex flex-col items-center text-[10px]">
      <User className="p-1" size={40} />
      About Me
    </Link>
    <Link href="/" className="flex flex-col items-center text-[10px]">
      <FolderHeart className="p-1" size={40} />
      Resume
    </Link>
    <Link href="/" className="flex flex-col items-center text-[10px]">
      <Lightbulb className="p-1" size={40} />
      Portfolio
    </Link>
    <Link href="/" className="flex flex-col items-center text-[10px]">
      <BookOpen className="p-1" size={40} />
      Blog
    </Link>
    <Link href="/" className="flex flex-col items-center text-[10px]">
      <Phone className="p-1" size={40} />
      Contact
    </Link>
  </div>
</div>

            <button
              onClick={toggleImageCenter}
              className="absolute top-[10%] right-[20%] bg-[#032668] text-white text-lg px-4 py-2 rounded-full shadow-lg hover:bg-[#032f68] transition-colors duration-300"
            >
              ×
            </button>
        </div>
      )}
    </section>
  );
}
