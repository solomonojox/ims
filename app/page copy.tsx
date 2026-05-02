'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  HiLocationMarker,
  HiGlobeAlt,
  HiVideoCamera,
  HiArrowRight,
  HiClock,
} from 'react-icons/hi'
import { FaFire, FaCross, FaPray, FaHeart } from 'react-icons/fa'
import { useReveal } from '@/hooks/useReveal'

// ─── Hero background particles (purely decorative) ───────────────────────────
function CrossLight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={`absolute opacity-10 ${className}`}
      fill="none"
    >
      <line x1="20" y1="0" x2="20" y2="40" stroke="#c9a84c" strokeWidth="1" />
      <line x1="0" y1="20" x2="40" y2="20" stroke="#c9a84c" strokeWidth="1" />
    </svg>
  )
}

// ─── Schedule card data ───────────────────────────────────────────────────────
const schedule = [
  {
    day: 'Wednesday',
    mode: 'Physical + Live Stream',
    time: '7:00 AM – 10:30 AM WAT',
    icon: <HiLocationMarker className="text-gold text-xl" />,
    modeIcon: <HiVideoCamera className="text-gold/50 text-base" />,
    tag: 'In-Person',
    tagColor: 'border-gold/40 text-gold',
    desc: 'Come worship with us in person. Service is also streamed live for those who cannot make it.',
  },
  {
    day: 'Friday',
    mode: 'Virtual',
    time: '10:00 PM – 12:00 AM WAT',
    icon: <HiGlobeAlt className="text-gold text-xl" />,
    modeIcon: null,
    tag: 'Online',
    tagColor: 'border-sky-400/40 text-sky-300',
    desc: 'Midnight prayer and word. Join us from anywhere in the world for a powerful virtual service.',
  },
  {
    day: 'Sunday',
    mode: 'Virtual',
    time: '10:00 PM – 12:00 AM WAT',
    icon: <HiGlobeAlt className="text-gold text-xl" />,
    modeIcon: null,
    tag: 'Online',
    tagColor: 'border-sky-400/40 text-sky-300',
    desc: 'Close the week in the presence of God. A night of deep intercession and deliverance.',
  },
]

// ─── Pillars data ─────────────────────────────────────────────────────────────
const pillars = [
  { icon: <FaCross className="text-3xl text-gold" />, title: 'Salvation', desc: 'We preach the undiluted gospel of Jesus Christ, calling all men to repentance and new life.' },
  { icon: <FaFire className="text-3xl text-gold" />, title: 'Holiness', desc: 'We are committed to a lifestyle of holiness, separated unto God in thought, word, and deed.' },
  { icon: <FaHeart className="text-3xl text-gold" />, title: 'Healing', desc: 'We believe in the healing power of God and stand in faith for complete restoration of body and soul.' },
  { icon: <FaPray className="text-3xl text-gold" />, title: 'Deliverance', desc: 'Through prayer and the Word, we minister freedom to all who are bound, oppressed, or afflicted.' },
]

// ─── Testimonial slider ───────────────────────────────────────────────────────
const testimonials = [
  {
    quote: 'I came to IMS bound by years of addictions and familiar spirits. After three services, God set me completely free. I am a new person today.',
    name: 'Brother Emmanuel O.',
    location: 'Lagos',
  },
  {
    quote: 'The doctors had given up on my daughter. We brought her to IMS and after a night of prayer, she recovered fully. God is real here.',
    name: 'Sister Ngozi A.',
    location: 'Port Harcourt',
  },
  {
    quote: 'I watched the Friday online service from the UK and was healed of chronic back pain in my living room. Jesus is still the same.',
    name: 'Deacon Paul T.',
    location: 'United Kingdom',
  },
]

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const scheduleRef = useReveal()
  const pillarsRef = useReveal()
  const testimonialsRef = useReveal()

  // Auto-rotate testimonials
  useEffect(() => {
    const t = setInterval(() => {
      setActiveTestimonial((p) => (p + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <main className="bg-navy text-cream overflow-hidden">
      {/* ─── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-40 pb-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-navy via-navy-mid to-navy" />
        {/* Radial gold glow */}
        <div className="absolute inset-0 bg-radial-gold opacity-60" />
        {/* Decorative cross lights */}
        <CrossLight className="w-24 h-24 top-24 left-[10%] animate-float" />
        <CrossLight className="w-16 h-16 top-40 right-[15%] animate-float delay-300" />
        <CrossLight className="w-12 h-12 bottom-32 left-[20%] animate-float delay-500" />
        <CrossLight className="w-20 h-20 bottom-48 right-[8%] animate-float delay-200" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.5em] uppercase text-gold/70 mb-6 font-body animate-fade-up opacity-0-init">
            Welcome to
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none mb-4 animate-fade-up delay-100 opacity-0-init">
            <span className="shimmer-text">International</span>
            <br />
            <span className="text-cream">Miracle</span>
            <br />
            <span className="shimmer-text">Service</span>
          </h1>
          <div className="gold-divider mx-auto my-8 animate-fade-in delay-300 opacity-0-init" />
          <p className="text-base md:text-lg text-cream/60 max-w-xl mx-auto leading-relaxed font-body font-300 animate-fade-up delay-400 opacity-0-init">
            A prayer and deliverance ministry committed to your <span className="text-cream/90">salvation</span>,{' '}
            <span className="text-cream/90">holiness</span>, <span className="text-cream/90">healing</span>, and{' '}
            <span className="text-cream/90">total deliverance</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-fade-up delay-500 opacity-0-init">
            <a
              href="#schedule"
              className="px-8 py-3.5 bg-gold text-navy font-body font-500 text-sm tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
            >
              Join a Service
            </a>
            <Link
              href="/about"
              className="px-8 py-3.5 border border-cream/20 text-cream/70 font-body font-500 text-sm tracking-widest uppercase hover:border-cream/50 hover:text-cream transition-all duration-300 flex items-center justify-center gap-2"
            >
              Learn More <HiArrowRight />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-600 opacity-0-init">
          <span className="text-xs tracking-[0.3em] uppercase text-cream/30 font-body">Scroll</span>
          <div className="w-px h-12 bg-linear-to-b from-gold/50 to-transparent" />
        </div> */}
      </section>

      {/* ─── SCHEDULE ──────────────────────────────────────────────────────── */}
      <section id="schedule" className="py-24 px-6 bg-navy-mid relative">
        <div className="absolute inset-0 texture-overlay pointer-events-none" />
        <div ref={scheduleRef} className="reveal max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-gold/60 mb-3 font-body">Come & Worship</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">
              Service Schedule
            </h2>
            <div className="gold-divider mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {schedule.map((s, i) => (
              <div
                key={i}
                className="card-lift relative bg-navy border border-gold/10 p-8 hover:border-gold/30 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>{s.icon}</div>
                  <span className={`text-[10px] tracking-widest uppercase border px-3 py-1 font-body ${s.tagColor}`}>
                    {s.tag}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-cream mb-1">{s.day}</h3>
                <div className="flex items-center gap-2 text-xs text-gold/70 mb-4 font-body tracking-wide">
                  <HiClock className="shrink-0" />
                  {s.time}
                </div>
                <p className="text-sm text-cream/50 font-body font-300 leading-relaxed">{s.desc}</p>
                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-gold/20" />
              </div>
            ))}
          </div>

          {/* Location note */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-cream/40 font-body font-300">
            <span className="flex items-center gap-2">
              <HiLocationMarker className="text-gold" />
              Physical services — Paradise Event Arena, No. 261, Murtala Mohammed Way, Alagomeji Bustop, Ebute-Metta, Lagos Nigeria
            </span>
            <span className="hidden sm:block text-cream/20">|</span>
            <span className="flex items-center gap-2">
              <HiGlobeAlt className="text-gold" />
              Virtual services — Zoom / YouTube Live @internationalMiracleService
            </span>
          </div>
        </div>
      </section>

      {/* ─── PILLARS ───────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-navy relative overflow-hidden">
        {/* BG text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-display text-[20vw] font-bold text-white/2 leading-none tracking-tight">
            IMS
          </span>
        </div>
        <div ref={pillarsRef} className="reveal max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-gold/60 mb-3 font-body">What We Stand For</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Our Four Pillars</h2>
            <div className="gold-divider mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="card-lift group bg-navy-light border border-white/5 hover:border-gold/20 p-8 flex flex-col items-center text-center gap-4 transition-colors duration-300"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-gold/10 group-hover:bg-gold/20 transition-colors duration-300">
                  {p.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-cream tracking-wide">{p.title}</h3>
                <p className="text-sm text-cream/45 font-body font-300 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL SLIDER ────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-navy-mid relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gold opacity-40 pointer-events-none" />
        <div ref={testimonialsRef} className="reveal max-w-3xl mx-auto text-center relative z-10">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/60 mb-3 font-body">His Wonders</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-12">Testimonies</h2>

          {/* Slider */}
          <div className="relative min-h-50">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
                  i === activeTestimonial
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
              >
                <svg className="w-8 h-8 text-gold/40 mb-6" viewBox="0 0 40 30" fill="currentColor">
                  <path d="M0 30V18C0 7.6 6.667 1.933 20 0l2 4C15.333 5.333 12 8.667 12 14h6v16H0zm22 0V18C22 7.6 28.667 1.933 42 0l2 4C37.333 5.333 34 8.667 34 14h6v16H22z" />
                </svg>
                <p className="font-display text-xl md:text-2xl italic text-cream/80 leading-relaxed mb-6">
                  {`"${t.quote}"`}
                </p>
                <div className="gold-divider mx-auto mb-4" />
                <p className="text-sm font-body font-500 text-gold tracking-wide">{t.name}</p>
                <p className="text-xs font-body text-cream/35 tracking-widest uppercase mt-1">{t.location}</p>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`transition-all duration-300 ${
                  i === activeTestimonial
                    ? 'w-8 h-1.5 bg-gold'
                    : 'w-3 h-1.5 bg-cream/20 hover:bg-cream/40'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-navy border-t border-gold/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">
            Ready for Your <span className="shimmer-text">Miracle</span>?
          </h2>
          <p className="text-sm text-cream/50 font-body font-300 mb-8 leading-relaxed">
            Whether you need healing, deliverance, or simply want to grow closer to God — there is a seat for you.
            Come as you are, leave transformed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#schedule"
              className="px-8 py-3.5 bg-gold text-navy font-body font-500 text-sm tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
            >
              View Schedule
            </a>
            <Link
              href="/about"
              className="px-8 py-3.5 border border-cream/20 text-cream/70 font-body font-500 text-sm tracking-widest uppercase hover:border-cream/50 hover:text-cream transition-all duration-300 flex items-center justify-center gap-2"
            >
              About IMS <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}