const CONSENT_KEY = 'sash-shops-ja:cookie-consent'

export type Consent = 'accepted' | 'declined'

export function getStoredConsent(): Consent | null {
  try {
    const value = localStorage.getItem(CONSENT_KEY)
    return value === 'accepted' || value === 'declined' ? value : null
  } catch {
    return null
  }
}

export function setStoredConsent(value: Consent) {
  try {
    localStorage.setItem(CONSENT_KEY, value)
  } catch {
    // Ignore write failures (private browsing, storage disabled, etc.) —
    // worst case the banner just reappears next visit.
  }
}
