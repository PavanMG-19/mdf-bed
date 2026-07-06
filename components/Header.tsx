"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "Infrastructure", href: "/infrastructure" },
    { name: "Faculty", href: "/faculty" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col shadow-sm">
      {/* Top Utility Bar */}
      {/*<div className="bg-primary text-neutral-light text-xs px-4 py-2 flex flex-col sm:flex-row justify-between items-center gap-2 border-b border-primary-light">
        <div className="flex items-center gap-4">
          <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-secondary-light transition-colors">
            <Phone size={12} className="text-secondary-light" />
            <span>+91 98765 43210</span>
          </a>
          <a href="mailto:info@mdfcollege.org" className="flex items-center gap-1.5 hover:text-secondary-light transition-colors">
            <Mail size={12} className="text-secondary-light" />
            <span>info@mdfcollege.org</span>
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-semibold text-secondary-light">Admissions Open 2026-28 Batch!</span>
          <Link href="/contact" className="ml-2 bg-secondary hover:bg-secondary-dark px-2.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider transition-colors text-white">
            Apply Now
          </Link>
        </div>
      </div>*/}

      {/* Main Navigation Bar */}
      <div className="bg-black dark:bg-primary-dark/95 backdrop-blur-md px-4 lg:px-8 py-4 flex justify-between items-center transition-all duration-300">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="group-hover:scale-105 transition-transform">
            <Image src="https://res.cloudinary.com/djmhlbhee/image/upload/v1780764706/mdf_logo_hqwzmy.png" alt="Logo" width={48} height={48} />
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-lg lg:text-xl tracking-tight text-primary dark:text-neutral-light leading-tight">
              MDF COLLEGE OF EDUCATION
            </span>
            <span className="font-sans text-[10px] lg:text-xs font-semibold tracking-wider text-secondary uppercase">
              SAGAR, KARNATAKA - 577401
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-3 py-2 rounded-md text-sm font-medium tracking-wide transition-all duration-200 ${isActive(link.href)
                ? "text-secondary font-semibold border-b-2 border-secondary rounded-none"
                : "text-neutral-dark/80 hover:text-secondary dark:text-neutral-light/80 hover:bg-slate-50 dark:hover:bg-primary-light"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-neutral-dark hover:bg-slate-100 dark:text-neutral-light dark:hover:bg-primary-light transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-4/5 max-w-sm bg-black dark:bg-primary-dark shadow-2xl p-6 flex flex-col gap-6 transform transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center border-b border-slate-100 dark:border-primary-light pb-4">
          <div className="flex flex-col">
            <span className="font-bold text-lg text-primary dark:text-neutral-light">MDF College of Education</span>
            <span className="text-[10px] text-secondary uppercase font-semibold">Sagar, Karnataka - 577401</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-primary-light"
          >
            <X size={20} className="text-neutral-dark dark:text-neutral-light" />
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${isActive(link.href)
                ? "bg-secondary/10 text-secondary font-semibold"
                : "text-neutral-dark hover:bg-slate-50 dark:text-neutral-light dark:hover:bg-primary-light"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="mt-auto border-t border-slate-100 dark:border-primary-light pt-6 flex flex-col gap-4">
          <div className="text-xs text-neutral-dark/60 dark:text-neutral-light/60 flex flex-col gap-2">
            <p className="flex items-center gap-2"><Phone size={14} /> +91 98765 43210</p>
            <p className="flex items-center gap-2"><Mail size={14} /> info@mdfcollege.org</p>
          </div>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-primary hover:bg-primary-light text-white dark:bg-secondary dark:hover:bg-secondary-dark py-3 rounded-xl font-bold transition-colors shadow-md"
          >
            Admissions Enquiry
          </Link>
        </div>
      </div>
    </header>
  );
}
