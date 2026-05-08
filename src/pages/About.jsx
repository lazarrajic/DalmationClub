import { Link } from 'react-router-dom'
import c from '../../content.js'
import AnimatedSection from '../components/AnimatedSection'
import PageMeta from '../components/PageMeta'

export default function About() {
  return (
    <div className="bg-cream-warm font-body">
      <PageMeta
        title="About — Dalmatian Cultural Society Inc."
        description="Over 90 years of community, culture, and belonging in Aotearoa. Learn about the history, mission, archive, and committee of the Dalmatian Cultural Society."
      />

      {/* ── Hero ── */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '60vh' }}>
        <div style={{ backgroundImage: `url(${c.about_hero_image})` }} className="absolute inset-0 bg-cover bg-center" />
        <img src={c.about_hero_image} data-cms="About - Hero - Image" alt="" style={{ display: 'none' }} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-20">
          <h1 data-cms="About - Hero - Heading" className="font-heading text-white text-4xl md:text-5xl mb-4 leading-tight">
            {c.about_hero_heading}
          </h1>
          <p data-cms="About - Hero - Sub" className="text-white/85 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            {c.about_hero_sub}
          </p>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <h2 data-cms="About - Story - Heading" className="font-heading text-blue text-2xl md:text-4xl mb-2">
                {c.about_story_heading}
              </h2>
              <div className="w-12 h-1 bg-blue mb-6" />
              <p data-cms="About - Story - Body" className="text-secondary leading-relaxed mb-5 text-base">
                {c.about_story_body}
              </p>
              <p data-cms="About - Story - Body 2" className="text-secondary leading-relaxed mb-5 text-base">
                {c.about_story_body2}
              </p>
              <p data-cms="About - Story - Body 3" className="text-secondary leading-relaxed text-base">
                {c.about_story_body3}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <img
                src={c.about_story_image}
                data-cms="About - Story - Image"
                alt="Our clubrooms"
                className="rounded-2xl shadow-lg w-full h-96 object-cover sticky top-24"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="bg-cream-DEFAULT py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 data-cms="About - Mission - Heading" className="font-heading text-blue text-2xl md:text-4xl mb-4">
              {c.about_mission_heading}
            </h2>
            <div className="w-12 h-1 bg-blue mx-auto mb-8" />
            <div className="bg-white border-l-4 border-blue rounded-r-xl p-8 shadow-sm text-left">
              <p data-cms="About - Mission - Body" className="text-secondary text-lg leading-relaxed italic">
                {c.about_mission_body}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Archive & Museum ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <img
                src={c.about_archive_image}
                data-cms="About - Archive - Image"
                alt="Archive and Museum"
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <h2 data-cms="About - Archive - Heading" className="font-heading text-blue text-2xl md:text-4xl mb-2">
                {c.about_archive_heading}
              </h2>
              <div className="w-12 h-1 bg-blue mb-6" />
              <p data-cms="About - Archive - Body" className="text-secondary leading-relaxed mb-5 text-base">
                {c.about_archive_body}
              </p>
              <p data-cms="About - Archive - Body 2" className="text-secondary leading-relaxed mb-8 text-base">
                {c.about_archive_body2}
              </p>
              <Link
                to="/contact"
                data-cms="About - Archive - CTA"
                className="inline-block bg-blue hover:bg-blue-hover text-white font-semibold px-7 py-3 rounded-full transition-colors duration-200"
              >
                {c.about_archive_cta}
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Committee ── */}
      <section className="bg-cream-DEFAULT py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 data-cms="About - Committee - Heading" className="font-heading text-blue text-2xl md:text-4xl mb-4">
              {c.about_committee_heading}
            </h2>
            <div className="w-12 h-1 bg-blue mx-auto mb-6" />
            <p data-cms="About - Committee - Body" className="text-secondary leading-relaxed mb-8 text-base">
              {c.about_committee_body}
            </p>
            <Link
              to="/contact"
              data-cms="About - Committee - CTA"
              className="inline-block bg-blue hover:bg-blue-hover text-white font-semibold px-7 py-3 rounded-full transition-colors duration-200"
            >
              {c.about_committee_cta}
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
