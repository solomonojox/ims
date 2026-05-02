import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaYoutube, FaWhatsapp } from 'react-icons/fa'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'

export default function Footer() {
    return (
        <footer className="bg-navy border-t border-gold/10">
            <div className="max-w-6xl mx-auto px-6 py-14">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <div>
                        <div className="mb-4">
                            <Image
                                src={'/ims.png'}
                                alt='ims'
                                height={50}
                                width={50}
                                className='bg-white p-1 rounded-sm'
                            />
                            <span className="font-display text-3xl font-bold text-gold tracking-widest">IMS</span>
                            <p className="text-[10px] tracking-[0.3em] text-cream/40 uppercase mt-1">
                                International Miracle Service
                            </p>
                        </div>
                        <p className="text-sm text-cream/50 leading-relaxed font-body font-300 max-w-xs">
                            A prayer and deliverance ministry committed to salvation, holiness, healing, and total deliverance.
                        </p>
                        <div className="flex gap-4 mt-6">
                            {[
                                { icon: <FaFacebook />, href: 'https://www.facebook.com/internationalmiracleservice' },
                                { icon: <FaYoutube />, href: '#' },
                                { icon: <FaWhatsapp />, href: '#' },
                            ].map((s, i) => (
                                <a
                                    key={i}
                                    href={s.href}
                                    className="w-8 h-8 flex items-center justify-center border border-gold/20 text-gold/60 hover:border-gold hover:text-gold transition-all duration-300 text-sm"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xs tracking-[0.3em] uppercase text-gold/80 mb-5 font-body font-500">Quick Links</h4>
                        <nav className="flex flex-col gap-3">
                            {[
                                { href: '/', label: 'Home' },
                                { href: '/about', label: 'About IMS' },
                                { href: '/our-pastor', label: 'Our Pastor' },
                                { href: '/gallery', label: 'Gallery' },
                            ].map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm text-cream/50 hover:text-gold transition-colors duration-300 font-body font-300 tracking-wide"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xs tracking-[0.3em] uppercase text-gold/80 mb-5 font-body font-500">Contact</h4>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-3 text-sm text-cream/50 font-body font-300">
                                <HiLocationMarker className="text-gold mt-0.5 shrink-0" />
                                <span>Paradise Event Arena, No. 261, Murtala Mohammed Way, Alagomeji Bustop, Ebute-Metta, Lagos Nigeria<br /></span>
                            </div>
                            <a href="mailto:info@imsnigeria.org" className="flex items-center gap-3 text-sm text-cream/50 hover:text-gold transition-colors font-body font-300">
                                <HiMail className="text-gold shrink-0" />
                                ilajemiracleservice@gmail.com
                            </a>
                            <a href="tel:+2349153878743" className="flex items-center gap-3 text-sm text-cream/50 hover:text-gold transition-colors font-body font-300">
                                <HiPhone className="text-gold shrink-0" />
                                +234 915 387 8743
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-gold/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-cream/25 font-body tracking-wide">
                        © {new Date().getFullYear()} International Miracle Service. All rights reserved.
                    </p>
                    <p className="text-xs text-cream/25 tracking-wide italic font-display">
                        {`"For with God, nothing shall be impossible."`} — Luke 1:37
                    </p>
                </div>
            </div>
        </footer>
    )
}