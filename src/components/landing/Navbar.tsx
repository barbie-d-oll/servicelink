"use client";

import Link from "next/link";
import {useState} from "react";
import { Menu } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Opportunities", href: "#opportunities" },
  { label: "Companies", href: "#companies" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [Open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <Link
          href="/"
          className="text-3xl font-extrabold text-green-600"
        >
          Service<span className="text-slate-800">Link</span>
        </Link>
         {/* Desktop */}

        <nav className="hidden items-center gap-8 lg:flex">

          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-medium text-slate-700 transition duration-300 hover:text-green-600"
            >
              {link.label}
            </a>
          ))}

        </nav>
         {/* Right Buttons */}

        <div className="hidden items-center gap-4 lg:flex">

          <button
            className="
            rounded-lg
            border
            border-green-600
            px-5
            py-2.5
            font-medium
            text-green-600
            transition
            duration-300
            hover:bg-green-50
            hover:opacity-90
            "
          >
            Login
          </button>

          <button
            className="
            rounded-lg
            bg-green-600
            px-5
            py-2.5
            font-medium
            text-white
            transition
            duration-300
            hover:bg-green-700
            hover:opacity-90
            "
          >
            Get Started
          </button>

        </div>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!Open)}
          className="lg:hidden"
        >
          <Menu size={30} />
        </button>

      </div>

      {Open && (
        <div className="border-t bg-white lg:hidden">

          <div className="flex flex-col p-6">

            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="py-3 font-medium hover:text-green-600"
              >
                {link.label}
              </a>
            ))}

            <button className="mt-5 rounded-lg border border-green-600 py-3 text-green-600">
              Login
            </button>

            <button className="mt-3 rounded-lg bg-green-600 py-3 text-white">
              Get Started
            </button>

          </div>

        </div>
      )}
    </header>
  );
}
