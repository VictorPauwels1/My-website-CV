"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { useState } from "react";

type NavLinksProps = {
    href: string;
    children: ReactNode;
};

function NavLink({ href, children }: NavLinksProps) {
    return (
        <li
            className="hover:text-[#0bdff3] text-white font-bold no-underline
                       flex items-center justify-center
                       h-12 md:h-24 px-6 md:px-8
                       transition-all duration-300 text-[14pt] md:text-[16pt] font-sans"
        >
            <Link href={href}>{children}</Link>
        </li>
    );
}

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav
            className="fixed top-0 left-0 w-full h-24 flex items-center justify-between px-6 z-50
                       bg-gradient-to-r from-[#0bdff3] to-[#310879] shadow-xl"
        >
            {/* Logo */}
            <img className="h-20" src="/images/logo2.png" alt="Logo" />

            {/* Bouton hamburger */}
            <button
                className="text-white font-bold text-4xl md:hidden"
                onClick={() => setOpen(!open)}
            >
                ☰
            </button>

            {/* Menu */}
            <ul
                className={`
                    flex flex-col md:flex-row
                    absolute md:static right-0 top-24
                    bg-[#310879] md:bg-transparent
                    w-full md:w-auto
                    items-center
                    gap-2 md:gap-1
                    py-3 md:py-1
                    transition-all duration-300
                    ${open ? "flex" : "hidden md:flex"}
                `}
            >
                <NavLink href="/">Accueil</NavLink>
                <NavLink href="/cv">CV</NavLink>
                <NavLink href="/portfolio">Portfolio</NavLink>
                <NavLink href="/contact">Contact</NavLink>
            </ul>
        </nav>
    );
}
