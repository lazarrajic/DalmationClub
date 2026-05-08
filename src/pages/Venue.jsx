import { Link } from 'react-router-dom'
import c from '../../content.js'
import AnimatedSection from '../components/AnimatedSection'
import PageMeta from '../components/PageMeta'

export default function Venue() {
  return (
    <div className="bg-cream-warm font-body">
      <PageMeta
        title="Venue Hire — Dalmatian Cultural Society Inc."
        description="Host your event at our beautiful Auckland venue. The Ballroom seats up to 250 guests. Perfect for weddings, corporate events, birthday celebrations, and more."
      />

      {/* ── Hero ── */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '60vh' }}>
        <div style={{ backgroundImage: `url(${c.venue_hero_image})` }} className="absolute inset-0 bg-cover bg-center" />
        <img src={c.venue_hero_image} data-cms="Venue - Hero - Image" alt="" style={{ display: 'none' }} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-20">
          <h1 data-cms="Venue - Hero - Heading" className="font-heading text-white text-4xl md:text-5xl mb-4 leading-tight">
            {c.venue_hero_heading}
          </h1>
          <p data-cms="Venue - Hero - Sub" className="text-white/85 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            {c.venue_hero_sub}
          </p>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 data-cms="Venue - Intro - Heading" className="font-heading text-blue text-2xl md:text-4xl mb-2">
              {c.venue_intro_heading}
            </h2>
            <div className="w-12 h-1 bg-blue mx-auto mb-6" />
            <p data-cms="Venue - Intro - Body" className="text-secondary leading-relaxed mb-8 text-base">
              {c.venue_intro_body}
            </p>
            <a
              href={c.venue_intro_cta_url}
              data-cms="Venue - Intro - CTA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue hover:bg-blue-hover text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-200 text-base"
            >
              {c.venue_intro_cta}
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Room Cards ── */}
      <section className="bg-cream-DEFAULT py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-heading text-blue text-2xl md:text-4xl mb-3">Our Spaces</h2>
              <div className="w-12 h-1 bg-blue mx-auto" />
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {c.venue_rooms.map((room, i) => (
              <AnimatedSection key={room.title} delay={i * 120}>
                <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden h-full flex flex-col" style={{ borderRadius: '12px' }}>
                  <img
                    src={room.image}
                    data-cms={`Venue - Rooms - Image ${i + 1}`}
                    alt={room.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <h3 data-cms={`Venue - Rooms - Title ${i + 1}`} className="font-heading text-blue text-2xl mb-1">
                      {room.title}
                    </h3>
                    <p data-cms={`Venue - Rooms - Sub ${i + 1}`} className="text-blue font-semibold text-sm mb-3 uppercase tracking-wide">
                      {room.sub}
                    </p>
                    <p data-cms={`Venue - Rooms - Desc ${i + 1}`} className="text-secondary leading-relaxed text-sm mb-5">
                      {room.desc}
                    </p>
                    <ul className="mt-auto space-y-2">
                      {room.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-secondary">
                          <span className="text-blue font-bold">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Perfect For ── */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 data-cms="Venue - Occasions - Heading" className="font-heading text-blue text-2xl md:text-4xl mb-4">
              {c.venue_occasions_heading}
            </h2>
            <div className="w-12 h-1 bg-blue mx-auto mb-8" />
            <div className="flex flex-wrap justify-center gap-3">
              {c.venue_occasions.map((occ, i) => (
                <span
                  key={occ.title}
                  data-cms={`Venue - Occasions - Title ${i + 1}`}
                  className="px-5 py-2.5 bg-blue-tint text-blue rounded-full text-sm font-semibold border border-blue/20"
                >
                  {occ.title}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="bg-cream-DEFAULT py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-white rounded-2xl shadow-sm border border-border p-10">
              <blockquote data-cms="Venue - Testimonial - Body" className="text-lg italic text-secondary border-l-4 border-blue pl-6 leading-relaxed">
                {c.venue_testimonial}
              </blockquote>
              <div className="mt-6 pl-6">
                <p data-cms="Venue - Testimonial - Name" className="font-semibold text-[#1A1A1A]">
                  {c.venue_testimonial_name}
                </p>
                <p data-cms="Venue - Testimonial - Event" className="text-muted text-sm mt-1">
                  {c.venue_testimonial_event}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Venue CTA ── */}
      <section className="bg-blue py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 data-cms="Venue - CTA - Heading" className="font-heading text-white text-2xl md:text-4xl mb-4">
              {c.venue_cta_heading}
            </h2>
            <p data-cms="Venue - CTA - Body" className="text-white/85 leading-relaxed mb-8 text-base max-w-2xl mx-auto">
              {c.venue_cta_body}
            </p>
            <Link
              to="/contact"
              data-cms="Venue - CTA - Button"
              className="inline-block bg-white text-blue hover:bg-blue-tint font-semibold px-8 py-3.5 rounded-full transition-colors duration-200 text-base"
            >
              {c.venue_cta_button}
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
