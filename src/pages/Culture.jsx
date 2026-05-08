import { Link } from 'react-router-dom'
import c from '../../content.js'
import AnimatedSection from '../components/AnimatedSection'
import PageMeta from '../components/PageMeta'

export default function Culture() {
  return (
    <div className="bg-cream-warm font-body">
      <PageMeta
        title="Culture & Classes — Dalmatian Cultural Society Inc."
        description="Traditional dance, music, language, and song — for all ages, all levels, all backgrounds. Join our Kolo, Tamburica, Choir, and Croatian Language classes."
      />

      {/* ── Hero ── */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '60vh' }}>
        <div style={{ backgroundImage: `url(${c.culture_hero_image})` }} className="absolute inset-0 bg-cover bg-center" />
        <img src={c.culture_hero_image} data-cms="Culture - Hero - Image" alt="" style={{ display: 'none' }} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-20">
          <h1 data-cms="Culture - Hero - Heading" className="font-heading text-white text-4xl md:text-5xl mb-4 leading-tight">
            {c.culture_hero_heading}
          </h1>
          <p data-cms="Culture - Hero - Sub" className="text-white/85 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            {c.culture_hero_sub}
          </p>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 data-cms="Culture - Intro - Heading" className="font-heading text-blue text-2xl md:text-4xl mb-2">
                {c.culture_intro_heading}
              </h2>
              <div className="w-12 h-1 bg-blue mb-6" />
              <p data-cms="Culture - Intro - Body" className="text-secondary leading-relaxed mb-8 text-base">
                {c.culture_intro_body}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <div className="bg-blue-tint rounded-2xl p-8 flex flex-col items-start gap-4">
                <p className="text-blue font-semibold text-base">Ready to get started?</p>
                <p className="text-secondary text-sm leading-relaxed">Download the enrolment form and bring it to your first class, or get in touch and we'll guide you through the process.</p>
                <a
                  href={c.culture_intro_cta_url}
                  data-cms="Culture - Intro - CTA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue hover:bg-blue-hover text-white font-semibold px-7 py-3 rounded-full transition-colors duration-200 text-sm"
                >
                  {c.culture_intro_cta}
                </a>
                <Link
                  to="/contact"
                  className="inline-block border-2 border-blue text-blue hover:bg-blue hover:text-white font-semibold px-7 py-3 rounded-full transition-colors duration-200 text-sm"
                >
                  Get in Touch
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Class Cards ── */}
      <section className="bg-cream-DEFAULT py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="font-heading text-blue text-2xl md:text-4xl mb-3">Our Classes</h2>
              <div className="w-12 h-1 bg-blue mx-auto" />
            </div>
          </AnimatedSection>
          <div className="space-y-16">
            {c.culture_classes.map((cls, i) => (
              <AnimatedSection key={cls.title}>
                <div className={`flex flex-col md:flex-row ${i % 2 === 1 ? 'md:flex-row-reverse' : ''} gap-10 items-center bg-white rounded-2xl shadow-sm border border-border overflow-hidden`} style={{ borderRadius: '12px' }}>
                  <img
                    src={cls.image}
                    data-cms={`Culture - Classes - Image ${i + 1}`}
                    alt={cls.title}
                    className="w-full md:w-1/2 object-cover h-72 flex-shrink-0"
                  />
                  <div className="md:w-1/2 p-8">
                    <h3 data-cms={`Culture - Classes - Title ${i + 1}`} className="font-heading text-blue text-3xl mb-1">
                      {cls.title}
                    </h3>
                    <p data-cms={`Culture - Classes - Sub ${i + 1}`} className="text-blue font-semibold text-sm mb-4 uppercase tracking-wide">
                      {cls.sub}
                    </p>
                    <p data-cms={`Culture - Classes - Desc ${i + 1}`} className="text-secondary leading-relaxed text-base">
                      {cls.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Enrol CTA ── */}
      <section className="bg-blue py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 data-cms="Culture - Enrol - Heading" className="font-heading text-white text-2xl md:text-4xl mb-4">
              {c.culture_enrol_heading}
            </h2>
            <p data-cms="Culture - Enrol - Body" className="text-white/85 leading-relaxed mb-8 text-base max-w-2xl mx-auto">
              {c.culture_enrol_body}
            </p>
            <Link
              to="/contact"
              data-cms="Culture - Enrol - CTA"
              className="inline-block bg-white text-blue hover:bg-blue-tint font-semibold px-8 py-3.5 rounded-full transition-colors duration-200 text-base"
            >
              {c.culture_enrol_cta}
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
