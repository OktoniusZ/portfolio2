"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBriefcase,
  faTasks,
  faLifeRing,
} from "@fortawesome/free-solid-svg-icons"; // Importing required FontAwesome icons

import Image from "next/image";
import React, { useState } from "react";
import { PathParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      {/* Navigation Bar */}
      <nav className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <a href="#" className="text-gray-800 text-xl font-bold">
              Logo
            </a>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-800">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              className="text-gray-800 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {showMenu && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="text-gray-800 block">
                Home
              </a>
              <a href="#" className="text-gray-800 block">
                About
              </a>
              <a href="#" className="text-gray-800 block">
                Services
              </a>
              <a href="#" className="text-gray-800 block">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Landing Page */}
      <div className="bg-gray-100 min-h-screen flex flex-col lg:flex-row">
        <div className="bg-gray-100 flex-grow px-8 py-16 flex flex-col items-center justify-center lg:w-3/4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 text-center md:text-left md:mr-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-2">
                Oktonius Zevanya Simanungkalit
              </h1>
              <div className="flex items-center mb-6">
                {" "}
                {/* Container for line and text */}
                <hr className="border-t-2 border-gray-400 w-12 mr-4" />{" "}
                {/* Horizontal line with shorter width */}
                <h3 className="text-2xl md:text-3xl text-gray-600">
                  web developer
                </h3>{" "}
                {/* Job role */}
              </div>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Love collaborating to achieve common goals, a proactive
                problem-solver dedicated to continuous learning and growth,
                always seeking new opportunities to make a positive impact.
              </p>
              <div className="flex space-x-4 mb-4">
                {" "}
                {/* Container for social media icons */}
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-blue-500 hover:text-blue-700 text-4xl md:text-5xl"
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-pink-500 hover:text-pink-700 text-4xl md:text-5xl"
                />
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-gray-500 hover:text-gray-700 text-4xl md:text-5xl"
                />
              </div>
              <button className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline items-center">
                Explore Now
                <FontAwesomeIcon
                  icon={faTelegramPlane}
                  className="ml-2"
                  size="lg"
                />{" "}
                {/* Increased icon size */}
              </button>
            </div>
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1578632749014-ca77efd052eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Big Image"
                className="hidden md:block w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="md:hidden flex justify-center items-center py-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline flex items-center">
            Explore Now
            <FontAwesomeIcon
              icon={faTelegramPlane}
              className="ml-2"
              size="lg"
            />{" "}
            {/* Increased icon size */}
          </button>
        </div>
      </div>

      
    </>
  );
}
