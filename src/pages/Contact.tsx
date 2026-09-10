import ContactForm from '../components/ContactForm'
import SocialLinks from '../components/SocialLinks'
import Perf from '../components/Perf'
import socialsImage from '../assets/sash-shops-ja-socials.jpeg'

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
                  <a href="https://wa.me/18765191502">WhatsApp</a>
                  <a href="tel:+18765191502">1-876-519-1502</a>
                  <a href="mailto:sashshopsja@gmail.com">sashshopsja@gmail.com</a>
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
