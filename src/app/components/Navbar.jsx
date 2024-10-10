"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [shuffledText, setShuffledText] = useState("BUILD OR BURY");

  useEffect(() => {
    const originalText = "BUILD OR BURY";
    let intervalId;

    const shuffleText = () => {
      const shuffled = originalText
        .split('')
        .map(char => char === ' ' ? ' ' : String.fromCharCode(65 + Math.floor(Math.random() * 26)))
        .join('');
      setShuffledText(shuffled);
    };

    const startShuffling = () => {
      intervalId = setInterval(shuffleText, 50);
      setTimeout(() => {
        clearInterval(intervalId);
        setShuffledText(originalText);
      }, 1000);
    };

    startShuffling();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-center mx-auto px-4 py-2">
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="text-2xl md:text-3xl text-white font-semibold font-pacifico"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          {shuffledText}
        </Link>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
