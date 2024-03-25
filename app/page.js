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

     
    </>
  );
}
