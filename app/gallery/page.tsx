'use client'

/* eslint-disable react-hooks/exhaustive-deps */
import { useReveal } from '@/hooks/useReveal'
import { useState, useEffect } from 'react'
import { HiX, HiArrowLeft, HiArrowRight } from 'react-icons/hi'

// ─── Gallery data (replace src with real image paths) ─────────────────────────
const galleryItems = [
    {
        id: 1,
        category: 'Wednesday Service',
        title: 'Morning Glory Service',
        desc: 'The congregation in fervent worship during a Wednesday morning service. The atmosphere was electric with the presence of God.',
        placeholder: 'W1',
        aspect: 'landscape',
    },
    {
        id: 2,
        category: 'Deliverance',
        title: 'Night of Freedom',
        desc: 'A powerful deliverance session where several testimonies of liberation were recorded. Lives were permanently transformed.',
        placeholder: 'D1',
        aspect: 'portrait',
    },
    {
        id: 3,
        category: 'Virtual Service',
        title: 'Friday Night Online',
        desc: 'A screenshot of our virtual Friday service, with participants joining from Lagos, London, and Houston all at once.',
        placeholder: 'V1',
        aspect: 'landscape',
    },
    {
        id: 4,
        category: 'Wednesday Service',
        title: 'Healing Atmosphere',
        desc: 'Hands raised in collective faith as the pastor ministers healing prayers. Several attendees testified of immediate relief.',
        placeholder: 'W2',
        aspect: 'landscape',
    },
    {
        id: 5,
        category: 'Prayer',
        title: 'Intercession Hour',
        desc: 'A dedicated intercession team gathered before the service to pray over the space and the people who would enter.',
        placeholder: 'P1',
        aspect: 'portrait',
    },
    {
        id: 6,
        category: 'Virtual Service',
        title: 'Sunday Night Fire',
        desc: 'Our Sunday virtual service drew over 300 participants online. God moved mightily as the Word was ministered.',
        placeholder: 'V2',
        aspect: 'landscape',
    },
    {
        id: 7,
        category: 'Deliverance',
        title: 'Breaking Every Chain',
        desc: 'Pastor ministering to individuals during a deliverance service. What the devil meant for bondage, God turned to freedom.',
        placeholder: 'D2',
        aspect: 'landscape',
    },
    {
        id: 8,
        category: 'Prayer',
        title: 'Prayer Warriors',
        desc: 'The IMS prayer team — the backbone of the ministry. These intercessors pray before, during, and after every service.',
        placeholder: 'P2',
        aspect: 'portrait',
    },
    {
        id: 9,
        category: 'Wednesday Service',
        title: 'Communion Service',
        desc: 'A solemn and powerful communion service where the congregation partook of the Lord\'s table in remembrance and faith.',
        placeholder: 'W3',
        aspect: 'landscape',
    },
]

const categories = ['All', 'Wednesday Service', 'Virtual Service', 'Deliverance', 'Prayer']

// Placeholder card colours for demo
const placeholderColors: Record<string, string> = {
    W1: '#1a2235', W2: '#1a2235', W3: '#1a2235',
    D1: '#160f1f', D2: '#160f1f',
    V1: '#0f1a20', V2: '#0f1a20',
    P1: '#0f1a16', P2: '#0f1a16',
}

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState('All')
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
    const heroRef = useReveal()
    const gridRef = useReveal()

    const filtered = activeCategory === 'All'
        ? galleryItems
        : galleryItems.filter((g) => g.category === activeCategory)

    const openLightbox = (index: number) => setLightboxIndex(index)
    const closeLightbox = () => setLightboxIndex(null)
    const prevItem = () => setLightboxIndex((p) => (p !== null ? (p - 1 + filtered.length) % filtered.length : null))
    const nextItem = () => setLightboxIndex((p) => (p !== null ? (p + 1) % filtered.length : null))

    // Keyboard navigation
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (lightboxIndex === null) return
            if (e.key === 'Escape') closeLightbox()
            if (e.key === 'ArrowLeft') prevItem()
            if (e.key === 'ArrowRight') nextItem()
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [lightboxIndex])

    const currentItem = lightboxIndex !== null ? filtered[lightboxIndex] : null

    return (
        <main className="bg-navy text-cream overflow-hidden">
            {/* ─── HERO ──────────────────────────────────────────────────────── */}
            <section className="relative pt-40 pb-20 px-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-b from-navy-mid to-navy" />
                <div className="absolute inset-0 bg-radial-gold opacity-30 pointer-events-none" />
                <div ref={heroRef} className="reveal relative z-10 max-w-2xl mx-auto">
                    <p className="text-xs tracking-[0.5em] uppercase text-gold/60 mb-4 font-body">His Works Among Us</p>
                    <h1 className="font-display text-5xl md:text-7xl font-bold text-cream mb-6">
                        Gallery
                    </h1>
                    <div className="gold-divider mx-auto mb-8" />
                    <p className="text-sm text-cream/50 font-body font-300 leading-relaxed">
                        A glimpse into the lives changed, the services held, and the miracles that continue to unfold in our midst.
                        Every image tells a story of {`God's`} faithfulness.
                    </p>
                </div>
            </section>

            {/* ─── FILTER TABS ───────────────────────────────────────────────── */}
            <section className="py-10 px-6 bg-navy-mid border-y border-gold/10">
                <div className="max-w-6xl mx-auto flex flex-wrap gap-3 justify-center">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`text-xs tracking-[0.25em] uppercase px-5 py-2.5 font-body font-500 transition-all duration-300 cursor-pointer ${activeCategory === cat
                                    ? 'bg-gold text-navy'
                                    : 'border border-cream/15 text-cream/50 hover:border-gold/40 hover:text-cream/80'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* ─── GRID ──────────────────────────────────────────────────────── */}
            <section className="py-16 px-6 bg-navy">
                <div ref={gridRef} className="reveal max-w-6xl mx-auto">
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
                        {filtered.map((item, i) => (
                            <div
                                key={item.id}
                                onClick={() => openLightbox(i)}
                                className="break-inside-avoid cursor-pointer group relative overflow-hidden"
                            >
                                {/* Image placeholder (replace div with next/image in production) */}
                                <div
                                    className={`w-full ${item.aspect === 'portrait' ? 'h-80' : 'h-52'} relative overflow-hidden border border-white/5 group-hover:border-gold/20 transition-colors duration-300`}
                                    style={{ background: placeholderColors[item.placeholder] || '#1a2235' }}
                                >
                                    {/* Placeholder content */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                                        <span className="font-display text-5xl font-bold text-gold/10">{item.placeholder}</span>
                                        <span className="text-[10px] tracking-widest uppercase text-cream/15 font-body">Image</span>
                                    </div>

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center gap-3 p-5 text-center">
                                        <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-body border border-gold/30 px-3 py-1">
                                            {item.category}
                                        </span>
                                        <h3 className="font-display text-lg font-bold text-cream">{item.title}</h3>
                                        <p className="text-xs text-cream/55 font-body font-300 leading-relaxed">{item.desc}</p>
                                        <div className="w-6 h-px bg-gold/50 mt-1" />
                                        <span className="text-xs text-gold/60 font-body tracking-wide">Click to expand</span>
                                    </div>
                                </div>

                                {/* Caption below */}
                                <div className="py-3 px-1 flex items-start justify-between">
                                    <div>
                                        <p className="text-sm font-body font-400 text-cream/70 leading-snug">{item.title}</p>
                                        <p className="text-xs text-cream/30 font-body mt-0.5 tracking-wide">{item.category}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── LIGHTBOX ──────────────────────────────────────────────────── */}
            {lightboxIndex !== null && currentItem && (
                <div
                    className="fixed inset-0 z-50 bg-navy/97 backdrop-blur-md flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    <div
                        className="relative max-w-3xl w-full bg-navy-light border border-gold/15"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Image */}
                        <div
                            className="w-full h-72 md:h-96 relative flex items-center justify-center"
                            style={{ background: placeholderColors[currentItem.placeholder] || '#1a2235' }}
                        >
                            <span className="font-display text-8xl font-bold text-gold/10">{currentItem.placeholder}</span>
                        </div>

                        {/* Info */}
                        <div className="p-8">
                            <span className="text-[10px] tracking-[0.3em] uppercase text-gold/60 font-body border border-gold/20 px-3 py-1">
                                {currentItem.category}
                            </span>
                            <h3 className="font-display text-2xl font-bold text-cream mt-4 mb-3">{currentItem.title}</h3>
                            <p className="text-sm text-cream/55 font-body font-300 leading-relaxed">{currentItem.desc}</p>
                        </div>

                        {/* Controls */}
                        <div className="absolute top-4 right-4 flex gap-2">
                            <button
                                onClick={prevItem}
                                className="w-9 h-9 border border-cream/15 text-cream/60 hover:border-gold hover:text-gold transition-all duration-300 flex items-center justify-center"
                            >
                                <HiArrowLeft />
                            </button>
                            <button
                                onClick={nextItem}
                                className="w-9 h-9 border border-cream/15 text-cream/60 hover:border-gold hover:text-gold transition-all duration-300 flex items-center justify-center"
                            >
                                <HiArrowRight />
                            </button>
                            <button
                                onClick={closeLightbox}
                                className="w-9 h-9 border border-cream/15 text-cream/60 hover:border-red-400 hover:text-red-400 transition-all duration-300 flex items-center justify-center"
                            >
                                <HiX />
                            </button>
                        </div>

                        {/* Counter */}
                        <div className="absolute bottom-4 right-8 text-xs text-cream/25 font-body tracking-wide">
                            {lightboxIndex + 1} / {filtered.length}
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}