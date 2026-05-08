import { useState } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'
import c from '../../content.js'
import AnimatedSection from '../components/AnimatedSection'
import PageMeta from '../components/PageMeta'

const ENQUIRY_TYPES = [
  'General Enquiry',
  'Membership',
  'Venue Hire',
  'Culture & Classes',
  'Archive & Museum',
]

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    enquiryType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="bg-cream-warm font-body">
      <PageMeta
        title="Contact — Dalmatian Cultural Society Inc."
        description="Get in touch with the Dalmatian Cultural Society. We'd love to hear from you — whether you're interested in membership, venue hire, culture classes, or our archive."
      />

      {/* ── Hero ── */}
      <section className="bg-white pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 data-cms="Contact - Hero - Heading" className="font-heading text-blue text-4xl md:text-5xl mb-3">
              {c.contact_hero_heading}
            </h1>
            <div className="w-12 h-1 bg-blue mb-4" />
            <p data-cms="Contact - Hero - Sub" className="text-secondary text-lg">
              {c.contact_hero_sub}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="bg-white pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left column */}
            <AnimatedSection>
              <div className="space-y-8">
                {/* Contact details */}
                <div>
                  <h3 className="font-heading text-blue text-xl mb-4">Our Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-blue mt-0.5 flex-shrink-0" />
                      <div>
                        <p data-cms="Contact - Details - Address" className="text-secondary text-sm">{c.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone size={18} className="text-blue mt-0.5 flex-shrink-0" />
                      <div>
                        <p data-cms="Contact - Details - Phone" className="text-secondary text-sm">{c.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail size={18} className="text-blue mt-0.5 flex-shrink-0" />
                      <div>
                        <p data-cms="Contact - Details - Email" className="text-secondary text-sm">{c.email}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Archive details */}
                <div className="border-t border-border pt-6">
                  <h3 className="font-heading text-blue text-xl mb-4">Archive & Museum</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Phone size={18} className="text-blue mt-0.5 flex-shrink-0" />
                      <p data-cms="Contact - Details - Archive Phone" className="text-secondary text-sm">{c.phone_archive}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail size={18} className="text-blue mt-0.5 flex-shrink-0" />
                      <p data-cms="Contact - Details - Archive Email" className="text-secondary text-sm">{c.email_archive}</p>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="rounded-xl overflow-hidden border border-border bg-blue-tint h-52 flex items-center justify-center">
                  {/* <iframe src="https://maps.google.com/maps?q=10+New+North+Road+Eden+Terrace+Auckland&output=embed" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" /> */}
                  <div className="text-center text-blue opacity-60">
                    <MapPin size={32} className="mx-auto mb-2" />
                    <p className="text-sm font-semibold">10 New North Road</p>
                    <p className="text-xs">Eden Terrace, Auckland</p>
                  </div>
                </div>

                {/* Membership card */}
                <div className="bg-cream-DEFAULT rounded-xl p-6 border border-border">
                  <h3 data-cms="Contact - Join - Heading" className="font-heading text-blue text-xl mb-3">
                    {c.contact_join_heading}
                  </h3>
                  <p data-cms="Contact - Join - Body" className="text-secondary text-sm leading-relaxed">
                    {c.contact_join_body}
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Right column — Form */}
            <AnimatedSection delay={150}>
              <div className="bg-white rounded-2xl border border-border shadow-sm p-8">
                <h2 data-cms="Contact - Form - Heading" className="font-heading text-blue text-2xl mb-2">
                  {c.contact_form_heading}
                </h2>
                <div className="w-12 h-1 bg-blue mb-6" />

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-blue-tint rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue text-2xl">✓</span>
                    </div>
                    <h3 className="font-heading text-blue text-xl mb-2">Message Sent!</h3>
                    <p className="text-secondary text-sm">Thank you for getting in touch. We'll be in contact with you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-[#1A1A1A] mb-1.5" htmlFor="firstName">First Name</label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          value={form.firstName}
                          onChange={handleChange}
                          className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-[#1A1A1A] bg-white focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-colors"
                          placeholder="First name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#1A1A1A] mb-1.5" htmlFor="lastName">Last Name</label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          value={form.lastName}
                          onChange={handleChange}
                          className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-[#1A1A1A] bg-white focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-colors"
                          placeholder="Last name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1A1A1A] mb-1.5" htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-[#1A1A1A] bg-white focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1A1A1A] mb-1.5" htmlFor="phone">Phone</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-[#1A1A1A] bg-white focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-colors"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1A1A1A] mb-1.5" htmlFor="enquiryType">Enquiry Type</label>
                      <select
                        id="enquiryType"
                        name="enquiryType"
                        required
                        value={form.enquiryType}
                        onChange={handleChange}
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-[#1A1A1A] bg-white focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-colors"
                      >
                        <option value="">Select enquiry type</option>
                        {ENQUIRY_TYPES.map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1A1A1A] mb-1.5" htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-[#1A1A1A] bg-white focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-colors resize-none"
                        placeholder="Your message..."
                      />
                    </div>
                    <button
                      type="submit"
                      data-cms="Contact - Form - Submit"
                      className="w-full bg-blue hover:bg-blue-hover text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-200 text-base"
                    >
                      {c.contact_form_submit}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
