"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-bg/80 border-b border-border">
      <nav className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className="text-accent"
          >
            <rect
              x="2"
              y="2"
              width="24"
              height="24"
              rx="5"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M8 8l6 6-6 6M15 20h5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-lg font-bold tracking-tight text-text-primary">
            VSClone
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            How It Works
          </a>
          <a
            href="#testimonials"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Testimonials
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="#download"
            className="px-5 py-2 text-sm font-medium rounded-full bg-accent text-white hover:bg-accent/90 transition-colors"
          >
            Download
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-text-secondary hover:text-text-primary"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {mobileOpen ? (
              <path
                d="M6 6l12 12M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-bg/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4">
          <a
            href="#features"
            className="text-sm text-text-secondary hover:text-text-primary"
            onClick={() => setMobileOpen(false)}
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-text-secondary hover:text-text-primary"
            onClick={() => setMobileOpen(false)}
          >
            How It Works
          </a>
          <a
            href="#testimonials"
            className="text-sm text-text-secondary hover:text-text-primary"
            onClick={() => setMobileOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#download"
            className="px-5 py-2 text-sm font-medium rounded-full bg-accent text-white text-center"
            onClick={() => setMobileOpen(false)}
          >
            Download
          </a>
        </div>
      )}
    </header>
  );
}
