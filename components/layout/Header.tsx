"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { siteConfig } from "@/config";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed z-40 w-full top-5 flex justify-start px-10">
      <header className="flex justify-start">
        <Link href="/" className="group">
          <div
            className="flex flex-col items-center justify-center p-2 transition-all duration-500 bg-transparent"
            data-imperia-id="Header__logo__0"
            data-imperia-path="components/layout/Header.tsx"
          >
            <Image
              src={siteConfig.logo.main}
              alt={`Logo ${siteConfig.name}`}
              width={100}
              height={50}
              className={`rounded-xl transition-all duration-500 group-hover:scale-105 
                ${scrolled ? "" : "drop-shadow-lg"}`}
              style={
                scrolled
                  ? {
                    filter:
                      "drop-shadow(0 0 15px rgba(255,255,255,1)) drop-shadow(0 0 5px rgba(255,255,255,1))",
                  }
                  : {}
              }
            />
          </div>
        </Link>
      </header>
    </div>
  );
};

export default Header;
