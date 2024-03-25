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
  faCheckCircle,
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
              <button className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl focus:outline-none focus:shadow-outline items-center">
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

      {/* About Me Page */}
      <div>
        <div className="bg-gray-100">
          <h1 className="text-center text-5xl font-bold mb-2">About Me</h1>
          <p className="bg-gray-100 text-wrap text-lg text-center md:text-xl text-gray-700">
            My Introduction
          </p>
        </div>
        <div className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
            {/* Image Section */}
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <img
                src="https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile"
                className="rounded-lg shadow-lg"
              />
            </div>
            {/* Information Section */}
            <div className="lg:w-1/2 lg:ml-10 flex flex-col">
              {/* Small Boxes Section */}
              <div className="flex justify-between mb-6">
                {/* Box 1: Experience */}
                <div className="bg-white rounded-lg shadow-lg p-4 w-1/3 flex flex-col items-center">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="text-3xl text-gray-600 mb-2"
                  />
                  <h2 className="text-lg font-semibold mb-2">Experience</h2>
                  <p className="text-gray-700">1+ years</p>
                </div>
                {/* Box 2: Completed Projects */}
                <div className="bg-white rounded-lg shadow-lg p-4 w-1/3 mx-2 flex flex-col items-center">
                  <FontAwesomeIcon
                    icon={faTasks}
                    className="text-3xl text-gray-600 mb-2"
                  />
                  <h2 className="text-lg font-semibold mb-2">Completed</h2>
                  <p className="text-gray-700">1+ years</p>
                </div>
                {/* Box 3: Support */}
                <div className="bg-white rounded-lg shadow-lg p-4 w-1/3 flex flex-col items-center">
                  <FontAwesomeIcon
                    icon={faLifeRing}
                    className="text-3xl text-gray-600 mb-2"
                  />
                  <h2 className="text-lg font-semibold mb-2">Support</h2>
                  <p className="text-gray-700">1+ years</p>
                </div>
              </div>
              {/* Description Section */}
              <div className=" rounded-lg  p-6 mb-6">
                <p className="text-gray-700 text-lg mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  at lectus dignissim, ultrices est ut, laoreet est. Fusce
                  commodo mi eget felis pretium tempus.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl focus:outline-none focus:shadow-outline">
                  Download CV 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Page */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Title and Description */}
          <div className="text-center mb-10">
            <h1 className="text-center text-5xl font-bold mb-2">Skills</h1>
            <p className="text-lg text-gray-700">
              Unlocking the potential of web development, mastering both
              frontend elegance and backend robustness, to craft seamless
              digital experiences.
            </p>
          </div>
          {/* Big Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Frontend Card */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-semibold mb-4">
                Frontend Development
              </h2>
              <p className="text-gray-700 mb-4">Skills:</p>
              <ul className="list-none mb-4">
                <li className="flex items-center mb-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-blue-600 mr-2"
                  />{" "}
                  HTML
                  <p className="text-sm text-gray-500 ml-2">
                    HyperText Markup Language
                  </p>
                </li>
                <li className="flex items-center mb-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-blue-600 mr-2"
                  />{" "}
                  CSS
                  <p className="text-sm text-gray-500 ml-2">
                    Cascading Style Sheets
                  </p>
                </li>
                <li className="flex items-center mb-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-blue-600 mr-2"
                  />{" "}
                  JavaScript
                  <p className="text-sm text-gray-500 ml-2">JS</p>
                </li>
                <li className="flex items-center mb-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-blue-600 mr-2"
                  />{" "}
                  React
                  <p className="text-sm text-gray-500 ml-2">
                    JavaScript library for building user interfaces
                  </p>
                </li>
              </ul>
            </div>
            {/* Backend Card */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-semibold mb-4">
                Backend Development
              </h2>
              <p className="text-gray-700 mb-4">Skills:</p>
              <ul className="list-none mb-4">
                <li className="flex items-center mb-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-blue-600 mr-2"
                  />{" "}
                  Node.js
                  <p className="text-sm text-gray-500 ml-2">
                    JavaScript runtime built on Chrome's V8 JavaScript engine
                  </p>
                </li>
                <li className="flex items-center mb-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-blue-600 mr-2"
                  />{" "}
                  Express
                  <p className="text-sm text-gray-500 ml-2">
                    Web application framework for Node.js
                  </p>
                </li>
                <li className="flex items-center mb-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-blue-600 mr-2"
                  />{" "}
                  MongoDB
                  <p className="text-sm text-gray-500 ml-2">NoSQL database</p>
                </li>
                <li className="flex items-center mb-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-blue-600 mr-2"
                  />{" "}
                  SQL
                  <p className="text-sm text-gray-500 ml-2">
                    Structured Query Language
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
