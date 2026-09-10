import SocialLinks from './SocialLinks'
import { WhatsAppIcon, EmailIcon } from './ContactIcons'
import { isAnalyticsConfigured } from '../services/analytics'

type Props = {
  onOpenCookiePreferences?: () => void
}

export default function Footer({ onOpenCookiePreferences }: Props) {
  return (
    <footer>
      <div className="wrap foot-wrap">
        <div className="foot-brand">
          <span className="dot" /> Sash Shops Ja
        </div>
        <div className="foot-links">
          <a href="https://wa.me/18765191502" className="contact-icon-link" aria-label="WhatsApp">
            <WhatsAppIcon />
          </a>
          <a href="tel:+18765191502">1-876-519-1502</a>
          <a href="mailto:sashshopsja@gmail.com" className="contact-icon-link">
            <EmailIcon />
            sashshopsja@gmail.com
          </a>
          {isAnalyticsConfigured() && onOpenCookiePreferences && (
            <button type="button" className="foot-cookie-btn" onClick={onOpenCookiePreferences}>
              Cookie Preferences
            </button>
          )}
        </div>
        <SocialLinks iconOnly />
        <div>Kingston, Jamaica</div>
      </div>
    </footer>
  )
}
