import type { SVGProps } from 'react'
import ContactForm from '../components/ContactForm'
import SocialLinks from '../components/SocialLinks'
import Perf from '../components/Perf'
import socialsImage from '../assets/sash-shops-ja-socials.jpeg'

function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2zm5.8 14.06c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.11.11-1.79-.11a15.2 15.2 0 0 1-1.63-.6c-2.87-1.24-4.74-4.13-4.88-4.32-.14-.19-1.17-1.55-1.17-2.96 0-1.4.73-2.1 1-2.38.26-.28.57-.35.76-.35h.55c.18 0 .41-.07.64.49.24.57.81 1.98.88 2.12.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.14-.28.29-.12.56.16.28.71 1.18 1.53 1.91 1.05.94 1.94 1.24 2.21 1.38.28.14.44.12.6-.07.16-.19.68-.8.87-1.08.19-.28.37-.23.62-.14.26.09 1.62.77 1.9.91.28.14.46.21.53.33.07.12.07.68-.17 1.36z" />
    </svg>
  )
}

function EmailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

export default function Contact() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Get In Touch</div>
          <h1>Contact Sash Shops Ja</h1>
          <p className="page-hero-lede">
            Questions about an order, a quote, or how it all works? Send us a message and
            we'll get back to you as soon as we can.
          </p>
        </div>
      </header>
      <main>
        <section className="wrap">
          <div className="contact-grid">
            <div className="review-form">
              <h2>Send a Message</h2>
              <p className="rf-sub">We typically reply within a day.</p>
              <ContactForm />
            </div>
            <div className="contact-side">
              <div className="contact-direct">
                <h3>Prefer to reach us directly?</h3>
                <div className="contact-direct-links">
                  <div className="contact-direct-row">
                    <a href="https://wa.me/18765191502" className="contact-icon-link" aria-label="WhatsApp">
                      <WhatsAppIcon />
                    </a>
                    <a href="tel:+18765191502">1-876-519-1502</a>
                  </div>
                  <a href="mailto:sashshopsja@gmail.com" className="contact-icon-link">
                    <EmailIcon />
                    sashshopsja@gmail.com
                  </a>
                </div>
              </div>
              <img
                src={socialsImage}
                alt="Sash Shops Ja — find us on Facebook, Instagram, Google Reviews, and TikTok"
                className="contact-socials-image"
              />
            </div>
          </div>
        </section>
        <Perf />
        <section className="wrap">
          <div className="section-head">
            <h2>Follow Along</h2>
            <p>Catch our latest finds and customer shoutouts on social.</p>
          </div>
          <SocialLinks />
        </section>
      </main>
    </>
  )
}
