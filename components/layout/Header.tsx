"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { siteConfig } from "@/config";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed z-40 w-full top-5 flex justify-start px-6 pointer-events-none">
      <header className="flex justify-start pointer-events-auto">
        <Link href="/" className="group">
          <div
            className={`flex flex-col items-center justify-center p-2 transition-all duration-500 ${
              scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            <Image
              src={siteConfig.logo.main}
              alt={`Logo ${siteConfig.name}`}
              width={90}
              height={45}
              className="rounded-xl transition-all duration-500 group-hover:scale-105 drop-shadow-lg"
            />
          </div>
        </Link>
      </header>
    </div>
  );
}
