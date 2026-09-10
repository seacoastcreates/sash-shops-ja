import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-wrap">
        <div className="foot-brand">
          <span className="dot" /> Sash Shops Ja
        </div>
        <div className="foot-links">
          <a href="https://wa.me/18765191502">WhatsApp</a>
          <a href="tel:+18765191502">1-876-519-1502</a>
          <a href="mailto:sashshopsja@gmail.com">sashshopsja@gmail.com</a>
        </div>
        <SocialLinks iconOnly />
        <div>Kingston, Jamaica</div>
      </div>
    </footer>
  )
}
