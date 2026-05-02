'use client'

import { useReveal } from '@/hooks/useReveal'
import Image from 'next/image'
import { FaQuoteLeft } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const pastorQuotes = [
    '"Prayer is not a ritual. It is the breath of the Spirit of God moving through a yielded vessel."',
    '"God did not call IMS to be comfortable. He called us to be dangerous — dangerous to darkness, dangerous to sickness, dangerous to every chain."',
    '"Every person who walks through our doors or joins our service online carries a destiny. Our job is to make sure hell doesn\'t steal it."',
]

const ministryHighlights = [
    { number: '6+', label: 'Years in Ministry' },
    { number: '1,000s', label: 'Lives Touched' },
    { number: '3', label: 'Services Weekly' },
    { number: 'Global', label: 'Online Reach' },
]

export default function PastorPage() {
    const heroRef = useReveal()
    const bioRef = useReveal()
    const quotesRef = useReveal()
    const highlightsRef = useReveal()
    const messageRef = useReveal()

    return (
        <main className="bg-navy text-cream overflow-hidden">
            {/* ─── PAGE HERO ───────────────────────────────────────────────────── */}
            <section className="relative pt-40 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-b from-navy-mid to-navy" />
                <div className="absolute inset-0 bg-radial-gold opacity-30 pointer-events-none" />

                <div ref={heroRef} className="reveal relative z-10 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Text side */}
                        <div>
                            <p className="text-xs tracking-[0.5em] uppercase text-gold/60 mb-4 font-body">Our Leader</p>
                            <h1 className="font-display text-5xl md:text-6xl font-bold text-cream leading-tight mb-3">
                                Pastor{' '}
                                <span className="shimmer-text block">
                                    Andrew Umoru
                                </span>
                            </h1>
                            <p className="text-sm tracking-[0.3em] text-cream/40 uppercase font-body mb-8">
                                Founder & Lead Minister — IMS
                            </p>
                            <div className="gold-divider mb-8" />
                            <p className="text-base text-cream/60 font-body font-300 leading-loose max-w-lg">
                                A man marked by fire and by faith. Pastor Andrew Umoru has walked with God through decades of prayer,
                                persecution, and proven miracles — emerging as a voice of deliverance for this generation.
                            </p>
                        </div>

                        {/* Image placeholder */}
                        <div className="relative flex justify-center lg:justify-end">
                            <div className="relative w-72 h-96 md:w-80 md:h-105">
                                {/* Decorative frame */}
                                <div className="absolute -top-3 -left-3 w-full h-full border border-gold/20" />
                                <div className="absolute -bottom-3 -right-3 w-full h-full border border-gold/10" />
                                {/* Image placeholder */}
                                <div className="relative w-full h-full bg-navy-light border border-white/10 flex flex-col items-center justify-center gap-3 overflow-hidden">
                                    {/* <div className="w-24 h-24 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                                        <span className="font-display text-4xl text-gold/60">P</span>
                                    </div>
                                    <p className="text-xs text-cream/20 tracking-widest uppercase font-body">{`Pastor's`} Photo</p> */}
                                    <Image
                                        src={'/pa.jpg'}
                                        alt='pa'
                                        height={200}
                                        width={200}
                                        className='h-full w-full object-cover'
                                    />
                                    {/* Subtle gradient at bottom */}
                                    <div className="absolute bottom-0 inset-x-0 h-1/3 bg-linear-to-t from-navy-light to-transparent" />
                                </div>
                                {/* Gold dot accent */}
                                <div className="absolute -bottom-6 left-6 flex gap-2">
                                    {[0, 1, 2].map((i) => (
                                        <div key={i} className="w-1.5 h-1.5 bg-gold/40 rounded-full" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── HIGHLIGHTS ──────────────────────────────────────────────────── */}
            <section className="py-14 px-6 bg-navy-light border-y border-gold/10">
                <div ref={highlightsRef} className="reveal max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {ministryHighlights.map((h, i) => (
                        <div key={i}>
                            <p className="font-display text-4xl md:text-5xl font-bold shimmer-text mb-2">{h.number}</p>
                            <p className="text-xs tracking-[0.3em] uppercase text-cream/40 font-body">{h.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ─── BIO ─────────────────────────────────────────────────────────── */}
            <section className="py-24 px-6 bg-navy">
                <div ref={bioRef} className="reveal max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Section header */}
                        <div className="lg:col-span-1">
                            <p className="text-xs tracking-[0.4em] uppercase text-gold/60 mb-3 font-body">His Story</p>
                            <h2 className="font-display text-4xl font-bold text-cream mb-4">The Calling</h2>
                            <div className="gold-divider" />
                        </div>

                        {/* Bio paragraphs */}
                        <div className="lg:col-span-2 space-y-5 text-sm text-cream/55 font-body font-300 leading-loose">
                            <p>
                                Pastor Andrew Umoru journey with God began at an early age when a divine encounter in prayer changed the
                                course of his life forever. What began as personal desperation before God grew into a burning
                                mandate — to see others experience the same freedom, healing, and power he found in Christ.
                            </p>
                            <p>
                                Trained in the school of the Spirit more than in the classroom, he carries a rare anointing for
                                deliverance and healing. Many who had been bound for years — by sickness, addiction, witchcraft, and
                                spiritual oppression — have been set free under his ministry. His approach is always deeply
                                Word-centered and Spirit-led.
                            </p>
                            <p>
                                In 2018, he founded International Miracle Service with the conviction that God wanted a ministry
                                that would operate without compromise — not a social club, but a place of genuine encounter. Under
                                his leadership, IMS has grown from a handful of intercessors to a ministry touching thousands across
                                Africa and beyond.
                            </p>
                            <p>
                                He is a husband, a father, and above all, a servant of God. His message is consistent:{' '}
                                <em className="text-gold/80 not-italic">{`"Jesus is the same yesterday, today, and forever — and what He did then, He is still doing now."`}</em>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── QUOTES / SAYINGS ────────────────────────────────────────────── */}
            <section className="py-24 px-6 bg-navy-mid relative overflow-hidden">
                <div className="absolute inset-0 bg-radial-gold opacity-30 pointer-events-none" />
                <div ref={quotesRef} className="reveal max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-14">
                        <p className="text-xs tracking-[0.4em] uppercase text-gold/60 mb-3 font-body">His Words</p>
                        <h2 className="font-display text-4xl font-bold text-cream">Sayings from the Pastor</h2>
                        <div className="gold-divider mx-auto mt-5" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {pastorQuotes.map((q, i) => (
                            <div
                                key={i}
                                className="card-lift bg-navy border border-gold/10 hover:border-gold/25 p-8 flex flex-col gap-6 transition-colors duration-300"
                            >
                                <FaQuoteLeft className="text-gold/30 text-3xl" />
                                <p className="font-display text-lg italic text-cream/75 leading-relaxed">{q}</p>
                                <div className="mt-auto">
                                    <div className="w-8 h-px bg-gold/40" />
                                    <p className="text-xs text-cream/30 font-body mt-3 tracking-wide">— Pastor Andrew Umoru</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── MESSAGE TO CONGREGATION ─────────────────────────────────────── */}
            <section className="py-24 px-6 bg-navy border-t border-gold/10">
                <div ref={messageRef} className="reveal max-w-2xl mx-auto text-center">
                    <p className="text-xs tracking-[0.4em] uppercase text-gold/60 mb-3 font-body">A Word</p>
                    <h2 className="font-display text-4xl font-bold text-cream mb-8">From the {`Pastor's`} Heart</h2>
                    <div className="bg-navy-light border border-gold/10 p-10 relative">
                        <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-gold/30" />
                        <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-gold/30" />
                        <FaQuoteLeft className="text-gold/20 text-4xl mx-auto mb-6" />
                        <p className="font-display text-xl italic text-cream/70 leading-loose">
                            {`"You did not stumble upon IMS by accident. God brought you here — because He has something He wants to
                            do in your life. Come with your burdens, your questions, your pain. We will seek His face together and
                            I promise you: He will answer."`}
                        </p>
                        <p className="text-sm text-gold/60 font-body mt-8 tracking-widest uppercase">— Pastor Andrew Umoru, Founder</p>
                    </div>

                    <div className="mt-10 flex justify-center">
                        <a
                            href="mailto:pastor@imsnigeria.org"
                            className="inline-flex items-center gap-2 text-sm text-cream/50 hover:text-gold transition-colors duration-300 font-body tracking-wide border-b border-cream/20 hover:border-gold pb-1"
                        >
                            <HiMail className="text-gold" />
                            Reach the Pastor
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}