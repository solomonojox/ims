'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiMenu, HiX } from 'react-icons/hi'
import Image from 'next/image'

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/our-pastor', label: 'Our Pastor' },
    { href: '/gallery', label: 'Gallery' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-navy/95 backdrop-blur-md border-b border-gold/10 py-3'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex flex- gap-2 items-center group">
                    <Image
                        src={'/ims.png'}
                        alt='ims'
                        height={40}
                        width={40}
                        className='bg-white p-1 rounded-sm'
                    />
                    {/* <span className="font-display text-2xl font-bold tracking-widest text-gold leading-none">
                        IMS
                    </span> */}
                    <span className="text-[9px] font-body font-500 tracking-[0.3em] text-cream/50 uppercase mt-0.5 hidden lg:flex">
                        Intl. Miracle Service
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`nav-link text-sm tracking-widest uppercase font-body font-400 transition-colors duration-300 ${pathname === link.href
                                ? 'text-gold active'
                                : 'text-cream/70 hover:text-cream'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="#schedule"
                        className="ml-2 text-sm tracking-widest uppercase font-body font-500 px-5 py-2 border border-gold/60 text-gold hover:bg-gold hover:text-navy transition-all duration-300"
                    >
                        Join Us
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-gold text-2xl"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-500 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <nav className="bg-navy-mid/98 backdrop-blur-md border-t border-gold/10 px-6 py-6 flex flex-col gap-5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className={`text-sm tracking-widest uppercase font-body transition-colors duration-300 ${pathname === link.href ? 'text-gold' : 'text-cream/70'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="#schedule"
                        onClick={() => setMenuOpen(false)}
                        className="text-sm tracking-widest uppercase font-body font-500 px-5 py-2.5 border border-gold/60 text-gold text-center hover:bg-gold hover:text-navy transition-all duration-300 mt-2"
                    >
                        Join Us
                    </Link>
                </nav>
            </div>
        </header>
    )
}