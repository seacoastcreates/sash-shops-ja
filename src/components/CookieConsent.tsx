type Props = {
  visible: boolean
  onAccept: () => void
  onDecline: () => void
}

export default function CookieConsent({ visible, onAccept, onDecline }: Props) {
  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie preferences">
      <p>
        We use analytics cookies to understand how visitors use this site. No personal data
        is sold or shared. You can change this choice anytime via "Cookie Preferences" in the
        footer.
      </p>
      <div className="cookie-banner-actions">
        <button type="button" className="btn btn-outline" onClick={onDecline}>
          Decline
        </button>
        <button type="button" className="btn btn-primary" onClick={onAccept}>
          Accept
        </button>
      </div>
    </div>
  )
}
