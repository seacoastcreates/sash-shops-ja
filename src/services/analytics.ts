declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

export function isAnalyticsConfigured(): boolean {
  return Boolean(MEASUREMENT_ID)
}

let started = false

/**
 * Sets up gtag with Google Consent Mode defaulted to "denied" and loads
 * the GA script. Safe to call unconditionally on app start — with
 * consent denied, GA doesn't set cookies or send identifiable data
 * until updateConsent(true) runs. This is Google's required pattern for
 * GA4 to work correctly for EEA/UK visitors.
 */
export function startAnalytics() {
  if (started || !MEASUREMENT_ID) return
  started = true

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args)
  }

  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
  })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
  document.head.appendChild(script)

  window.gtag('js', new Date())
  window.gtag('config', MEASUREMENT_ID, { send_page_view: false })
}

export function updateConsent(granted: boolean) {
  if (!MEASUREMENT_ID || typeof window.gtag !== 'function') return
  window.gtag('consent', 'update', {
    analytics_storage: granted ? 'granted' : 'denied',
  })
}

export function trackPageview(path: string) {
  if (!MEASUREMENT_ID || typeof window.gtag !== 'function') return
  window.gtag('event', 'page_view', { page_path: path })
}
