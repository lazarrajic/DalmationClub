import { Link } from 'react-router-dom'
import c from '../../content.js'
import AnimatedSection from '../components/AnimatedSection'
import PageMeta from '../components/PageMeta'

export default function Home() {
  return (
    <div className="bg-cream-warm font-body">
      <PageMeta
        title="Dalmatian Cultural Society Inc. — Auckland's Home for Dalmatian Heritage Since 1930"
        description="The Dalmatian Cultural Society Inc. has been a home away from home for the Dalmatian community in New Zealand since 1930. Culture, community, venue hire, and more."
      />

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div style={{ backgroundImage: `url(${c.home_hero_image})` }} className="absolute inset-0 bg-cover bg-center" />
        <img src={c.home_hero_image} data-cms="Home - Hero - Image" alt="" style={{ display: 'none' }} />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 data-cms="Home - Hero - Heading" className="font-heading text-white text-4xl md:text-6xl leading-tight mb-6">
            {c.home_hero_heading}
          </h1>
          <p data-cms="Home - Hero - Sub" className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {c.home_hero_sub}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/culture"
              data-cms="Home - Hero - CTA1"
              className="bg-blue hover:bg-blue-hover text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-200 text-base"
            >
              {c.home_hero_cta1}
            </Link>
            <a
              href="#events"
              data-cms="Home - Hero - CTA2"
              className="border-2 border-white text-white hover:bg-white hover:text-blue font-semibold px-8 py-3.5 rounded-full transition-colors duration-200 text-base"
            >
              {c.home_hero_cta2}
            </a>
          </div>
        </div>
      </section>

      {/* ── Welcome ── */}
      <section className="bg-cream-DEFAULT py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p data-cms="Home - Welcome - Label" className="text-blue font-semibold text-sm uppercase tracking-widest mb-3">
                {c.home_welcome_label}
              </p>
              <h2 data-cms="Home - Welcome - Heading" className="font-heading text-blue text-2xl md:text-4xl mb-1">
                {c.home_welcome_heading}
              </h2>
              <div className="w-12 h-1 bg-blue mb-3" />
              <p data-cms="Home - Welcome - Sub Heading" className="italic text-blue font-body text-lg mb-6">
                {c.home_welcome_sub_heading}
              </p>
              <p data-cms="Home - Welcome - Body" className="text-secondary leading-relaxed mb-8 text-base">
                {c.home_welcome_body}
              </p>
              <Link
                to="/about"
                data-cms="Home - Welcome - CTA"
                className="inline-block bg-blue hover:bg-blue-hover text-white font-semibold px-7 py-3 rounded-full transition-colors duration-200"
              >
                {c.home_welcome_cta}
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={150} className="hidden lg:block">
              <img
                src={c.home_welcome_image}
                data-cms="Home - Welcome - Image"
                alt="Dalmatian Cultural Society clubrooms"
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-blue py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div data-cms-repeater="Home - Stats" data-cms-shape="stat"
              data-cms-min="2" data-cms-recommend="4" data-cms-max="8" data-cms-overflow="wrap"
              className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {c.home_stats.map((stat, i) => (
                <div key={stat.label} className="text-center">
                  <p data-cms-field="value" className="font-heading text-white text-2xl md:text-3xl font-bold mb-2">
                    {stat.value}
                  </p>
                  <p data-cms-field="label" className="text-white/70 text-sm leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Upcoming Events ── */}
      <section id="events" className="bg-cream-DEFAULT py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 data-cms="Home - Events - Heading" className="font-heading text-blue text-2xl md:text-4xl mb-3">
                {c.home_events_heading}
              </h2>
              <div className="w-12 h-1 bg-blue mx-auto mb-4" />
              <p data-cms="Home - Events - Sub" className="text-secondary text-lg">
                {c.home_events_sub}
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {c.home_events.map((event, i) => (
              <AnimatedSection key={event.title} delay={i * 100}>
                <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden h-full flex flex-col" style={{ borderRadius: '12px' }}>
                  <img
                    src={event.image}
                    data-cms={`Home - Events - Image ${i + 1}`}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <p data-cms={`Home - Events - Date ${i + 1}`} className="text-blue font-semibold text-sm mb-1">
                      {event.date}
                    </p>
                    <h3 data-cms={`Home - Events - Title ${i + 1}`} className="font-heading text-xl text-[#1A1A1A] mb-2">
                      {event.title}
                    </h3>
                    <p data-cms={`Home - Events - Desc ${i + 1}`} className="text-secondary text-sm leading-relaxed flex-1">
                      {event.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Culture Snapshot ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <img
                src={c.home_culture_image}
                data-cms="Home - Culture - Image"
                alt="Folklore Ensemble"
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <h2 data-cms="Home - Culture - Heading" className="font-heading text-blue text-2xl md:text-4xl mb-2">
                {c.home_culture_heading}
              </h2>
              <div className="w-12 h-1 bg-blue mb-6" />
              <p data-cms="Home - Culture - Body" className="text-secondary leading-relaxed mb-8 text-base">
                {c.home_culture_body}
              </p>
              <Link
                to="/culture"
                data-cms="Home - Culture - CTA"
                className="inline-block bg-blue hover:bg-blue-hover text-white font-semibold px-7 py-3 rounded-full transition-colors duration-200"
              >
                {c.home_culture_cta}
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Community Groups ── */}
      <section className="bg-cream-DEFAULT py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 data-cms="Home - Groups - Heading" className="font-heading text-blue text-2xl md:text-4xl mb-3">
                {c.home_groups_heading}
              </h2>
              <div className="w-12 h-1 bg-blue mx-auto" />
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {c.home_groups.map((group, i) => (
              <AnimatedSection key={group.title} delay={i * 100}>
                <div className="bg-white rounded-xl border border-border overflow-hidden shadow-sm h-full flex flex-col" style={{ borderRadius: '12px' }}>
                  <img
                    src={group.image}
                    data-cms={`Home - Groups - Image ${i + 1}`}
                    alt={group.title}
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <h3 data-cms={`Home - Groups - Title ${i + 1}`} className="font-heading text-xl text-[#1A1A1A] mb-2">
                      {group.title}
                    </h3>
                    <p data-cms={`Home - Groups - Desc ${i + 1}`} className="text-secondary text-sm leading-relaxed">
                      {group.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Friday Night Dinners ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 data-cms="Home - Dinners - Heading" className="font-heading text-blue text-2xl md:text-4xl mb-2">
                {c.home_dinners_heading}
              </h2>
              <div className="w-12 h-1 bg-blue mb-6" />
              <p data-cms="Home - Dinners - Body" className="text-secondary leading-relaxed mb-8 text-base">
                {c.home_dinners_body}
              </p>
              <Link
                to="/contact"
                data-cms="Home - Dinners - CTA"
                className="inline-block bg-blue hover:bg-blue-hover text-white font-semibold px-7 py-3 rounded-full transition-colors duration-200"
              >
                {c.home_dinners_cta}
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <img
                src={c.home_dinners_image}
                data-cms="Home - Dinners - Image"
                alt="Friday night dinners"
                className="rounded-2xl shadow-lg w-full h-96 object-cover order-first lg:order-last"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Venue Hire Snapshot ── */}
      <section className="bg-cream-DEFAULT py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={150}>
              <img
                src={c.home_venue_image}
                data-cms="Home - Venue - Image"
                alt="Venue hire"
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
            </AnimatedSection>
            <AnimatedSection>
              <h2 data-cms="Home - Venue - Heading" className="font-heading text-blue text-2xl md:text-4xl mb-2">
                {c.home_venue_heading}
              </h2>
              <div className="w-12 h-1 bg-blue mb-6" />
              <p data-cms="Home - Venue - Body" className="text-secondary leading-relaxed mb-8 text-base">
                {c.home_venue_body}
              </p>
              <Link
                to="/venue"
                data-cms="Home - Venue - CTA"
                className="inline-block bg-blue hover:bg-blue-hover text-white font-semibold px-7 py-3 rounded-full transition-colors duration-200"
              >
                {c.home_venue_cta}
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Join CTA Banner ── */}
      <section className="bg-blue py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <img src={c.logo_shield} data-cms="Home - Join - Logo" alt="DCS" className="h-16 mx-auto mb-6" />
            <h2 data-cms="Home - Join - Heading" className="font-heading text-white text-2xl md:text-4xl mb-4">
              {c.home_join_heading}
            </h2>
            <p data-cms="Home - Join - Body" className="text-white/85 leading-relaxed mb-8 text-base max-w-2xl mx-auto">
              {c.home_join_body}
            </p>
            <Link
              to="/contact"
              data-cms="Home - Join - CTA"
              className="inline-block bg-white text-blue hover:bg-blue-tint font-semibold px-8 py-3.5 rounded-full transition-colors duration-200 text-base"
            >
              {c.home_join_cta}
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
