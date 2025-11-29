"use client";

import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? "backdrop-blur-xl bg-background/90 border-b border-border shadow-lg"
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
          </div>
          <a href="#hero" className="text-xl font-bold text-foreground">
            FlowChat<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">WA</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-foreground/70">
          {["Features", "Pricing", "Testimonials", "Contact Us"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="relative group font-medium hover:text-foreground transition-all duration-300"
              >
                {item}

                {/* Hover underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-indigo-400 to-emerald-400 transition-all duration-300"></span>
              </a>
            )
          )}
        </nav>

        {/* Desktop CTA and Theme Toggle */}
        <div className="flex items-center gap-3">
          
          <Button
            size="sm"
            className="hidden md:flex bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full px-6 py-5 font-semibold shadow-lg hover:opacity-90 hover:shadow-xl transition-all duration-300"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
          className="md:hidden text-foreground"
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-card border-t border-border py-4 px-6 space-y-4 text-foreground/80 text-sm flex flex-col items-center">
          {["Features", "Pricing", "Testimonials", "Contact Us"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block hover:text-foreground transition-colors font-medium"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            )
          )}
          <ThemeToggle />
          <Button className="w-fit bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full shadow-md">
            Start Trial
          </Button>
        </div>
      </div>
    </header>
  );
}
