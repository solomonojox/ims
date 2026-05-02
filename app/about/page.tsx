'use client'

import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'
import { FaFire, FaCross, FaPray, FaHeart } from 'react-icons/fa'
import { useReveal } from '@/hooks/useReveal'

const milestones = [
    {
        year: '2018',
        title: 'The Beginning',
        desc: 'IMS was born from a small prayer group of five people who gathered weekly to intercede for their community. God\'s presence was undeniable from the very first night.',
    },
    {
        year: '2019',
        title: 'First Healings',
        desc: 'Word spread as God began confirming the ministry with signs and wonders — the lame walked, the sick recovered. The group grew to over forty regular attendees.',
    },
    {
        year: '2021',
        title: 'Physical Meeting Grounds',
        desc: 'IMS secured its first physical venue in Lagos and officially began Wednesday morning services. Hundreds began attending, coming from across the city and beyond.',
    },
    {
        year: '2022',
        title: 'Going Virtual',
        desc: 'To reach those outside Lagos, IMS launched virtual Friday and Sunday night services. Within months, participants were joining from across West Africa, Europe, and the UK.',
    },
    {
        year: '2024',
        title: 'A Growing Family',
        desc: 'Today, IMS spans continents virtually while rooted deeply in Lagos physically. Thousands have received salvation, healing, and deliverance through this ministry.',
    },
]

const coreValues = [
    { icon: <FaCross className="text-gold text-2xl" />, title: 'Christ-Centred', desc: 'Everything we do points to Jesus — His death, resurrection, and lordship.' },
    { icon: <FaFire className="text-gold text-2xl" />, title: 'Fervent Prayer', desc: 'We believe prayer is the backbone of everything God wants to do through us.' },
    { icon: <FaPray className="text-gold text-2xl" />, title: 'Uncompromising Word', desc: 'We teach the Bible without dilution. Truth sets people free.' },
    { icon: <FaHeart className="text-gold text-2xl" />, title: 'Love for People', desc: 'Every soul matters. We receive all who come, with compassion and grace.' },
]

export default function AboutPage() {
    const heroRef = useReveal()
    const storyRef = useReveal()
    const timelineRef = useReveal()
    const valuesRef = useReveal()
    const missionRef = useReveal()

    return (
        <main className="bg-navy text-cream overflow-hidden">
            {/* ─── PAGE HERO ───────────────────────────────────────────────────── */}
            <section className="relative pt-40 pb-28 px-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-b from-navy-mid to-navy" />
                <div className="absolute inset-0 bg-radial-gold opacity-40 pointer-events-none" />
                <div ref={heroRef} className="reveal relative z-10 max-w-3xl mx-auto">
                    <p className="text-xs tracking-[0.5em] uppercase text-gold/60 mb-4 font-body">Who We Are</p>
                    <h1 className="font-display text-5xl md:text-7xl font-bold text-cream mb-6">
                        About <span className="shimmer-text">IMS</span>
                    </h1>
                    <div className="gold-divider mx-auto mb-8" />
                    <p className="text-base text-cream/55 font-body font-300 leading-relaxed">
                        International Miracle Service is not a conventional church. We are a{' '}
                        <em className="text-cream/80 not-italic font-400">prayer and deliverance ministry</em> — laser-focused on
                        seeing lives transformed through the power of God.
                    </p>
                </div>
            </section>

            {/* ─── MISSION & VISION ────────────────────────────────────────────── */}
            <section className="py-20 px-6 bg-navy-mid">
                <div ref={missionRef} className="reveal max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-navy border border-gold/10 p-10 relative">
                        <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-gold/30" />
                        <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-gold/30" />
                        <p className="text-xs tracking-[0.4em] uppercase text-gold/60 mb-4 font-body">Our Mission</p>
                        <h2 className="font-display text-3xl font-bold text-cream mb-5">What We Do</h2>
                        <p className="text-sm text-cream/55 font-body font-300 leading-loose">
                            We exist to deploy the power of God through prayer, the Word, and the Holy Spirit — bringing salvation
                            to the lost, healing to the sick, and complete deliverance to the bound. We are not here to build an
                            institution. We are here to set captives free.
                        </p>
                    </div>
                    <div className="bg-navy border border-gold/10 p-10 relative">
                        <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-gold/30" />
                        <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-gold/30" />
                        <p className="text-xs tracking-[0.4em] uppercase text-gold/60 mb-4 font-body">Our Vision</p>
                        <h2 className="font-display text-3xl font-bold text-cream mb-5">Where {`We're`} Going</h2>
                        <p className="text-sm text-cream/55 font-body font-300 leading-loose">
                            To see a generation marked by genuine encounter with God — delivered from darkness, walking in holiness,
                            and carrying the fire of revival to every nation. IMS is not limited to Lagos. The miracles we carry
                            belong to the world.
                        </p>
                    </div>
                </div>
            </section>

            {/* ─── OUR STORY ───────────────────────────────────────────────────── */}
            <section className="py-24 px-6 bg-navy relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                    <span className="font-display text-[18vw] font-bold text-white/2 leading-none">Story</span>
                </div>
                <div ref={storyRef} className="reveal max-w-3xl mx-auto text-center relative z-10 mb-16">
                    <p className="text-xs tracking-[0.4em] uppercase text-gold/60 mb-3 font-body">Our Journey</p>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">How We Started</h2>
                    <div className="gold-divider mx-auto mt-5" />
                </div>

                {/* Timeline */}
                <div ref={timelineRef} className="reveal max-w-2xl mx-auto relative">
                    {/* Vertical line */}
                    <div className="absolute left-7 md:left-1/2 top-0 bottom-0 w-px bg-gold/15 -translate-x-px" />

                    {milestones.map((m, i) => (
                        <div
                            key={i}
                            className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                        >
                            {/* Dot */}
                            <div className="absolute left-7 md:left-1/2 w-3.5 h-3.5 bg-gold rounded-full -translate-x-1/2 mt-1.5 animate-pulse-glow" />

                            {/* Spacer for alternating */}
                            <div className="hidden md:block md:w-1/2" />

                            {/* Card */}
                            <div className="ml-14 md:ml-0 md:w-1/2 bg-navy-light border border-white/5 hover:border-gold/20 p-6 transition-colors duration-300">
                                <span className="text-xs font-body font-500 tracking-[0.3em] text-gold uppercase">{m.year}</span>
                                <h3 className="font-display text-xl font-bold text-cream mt-1 mb-3">{m.title}</h3>
                                <p className="text-sm text-cream/50 font-body font-300 leading-relaxed">{m.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ─── CORE VALUES ─────────────────────────────────────────────────── */}
            <section className="py-24 px-6 bg-navy-mid">
                <div ref={valuesRef} className="reveal max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <p className="text-xs tracking-[0.4em] uppercase text-gold/60 mb-3 font-body">What Drives Us</p>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Core Values</h2>
                        <div className="gold-divider mx-auto mt-5" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {coreValues.map((v, i) => (
                            <div
                                key={i}
                                className="card-lift bg-navy border border-white/5 hover:border-gold/25 p-8 text-center transition-colors duration-300"
                            >
                                <div className="flex justify-center mb-5">
                                    <div className="w-14 h-14 bg-gold/10 flex items-center justify-center">
                                        {v.icon}
                                    </div>
                                </div>
                                <h3 className="font-display text-lg font-bold text-cream mb-3">{v.title}</h3>
                                <p className="text-sm text-cream/45 font-body font-300 leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── PASTOR CTA ──────────────────────────────────────────────────── */}
            <section className="py-20 px-6 bg-navy border-t border-gold/10">
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-xs tracking-[0.4em] uppercase text-gold/60 mb-3 font-body">Leadership</p>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-5">
                        Meet Our Pastor
                    </h2>
                    <p className="text-sm text-cream/50 font-body font-300 mb-8 leading-relaxed">
                        Get to know the man God has placed at the helm of this ministry — his calling, his heart, and his message.
                    </p>
                    <Link
                        href="/our-pastor"
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-navy font-body font-500 text-sm tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
                    >
                        Our Pastor <HiArrowRight />
                    </Link>
                </div>
            </section>
        </main>
    )
}