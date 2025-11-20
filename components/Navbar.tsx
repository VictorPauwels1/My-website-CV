"use client";
import Link from "next/link";
import { type ReactNode } from "react";
import { useState } from "react";

type NavLinksProps = {
    href: string
    children: ReactNode
}

function NavLink(props: NavLinksProps) {
    return (
        <li className="hover:text-[#0fa319] text-white font-bold no-underline flex items-center justify-center h-24 px-8
         transition-all duration-300 text-[16pt] font-sans">
            <Link href={props.href}>{props.children}</Link>
        </li>
    )
}

export default function Navbar(){
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full h-24 flex items-center justify-between px-6 z-50 
        bg-linear-to-r from-[#0fa319] to-[#ddff00] shadow-xl">
        
        {/* Logo */}
        <img
        className="h-20"
        src="https://patro.be/wp-content/uploads/sites/5/2018/11/patro-logo-300x195.png"
        alt="Logo"
        />
        
        {/* boutton hamburger */}
        <button 
            className="text white font-bold text-4xl md:hidden"
            onClick={() => setOpen(!open)}
        >
            ☰
        </button>

        <ul className={`
          flex gap-6 transition-all duration-300 
          md:flex md:static md:flex-row
          absolute right-0 top-24 bg-[#0fa319] w-full md:w-auto 
          flex-col items-center md:bg-transparent
          ${open ? "flex" : "hidden md:flex"}
        `}>
                <NavLink href="/">Accueil</NavLink>
                <NavLink href="/cv">CV</NavLink>
                <NavLink href="/portfolio">Portfolio</NavLink>
                <NavLink href="/contact">Contact</NavLink>
                
        </ul>
        
            
        </nav>
    )
        
    
}