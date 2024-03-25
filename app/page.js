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
     
    </>
  );
}
