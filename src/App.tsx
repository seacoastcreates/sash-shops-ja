import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import CookieConsent from './components/CookieConsent'
import BackToTop from './components/BackToTop'
import { getStoredConsent, setStoredConsent } from './services/consent'
import { isAnalyticsConfigured, startAnalytics, trackPageview, updateConsent } from './services/analytics'

export default function App() {
  const location = useLocation()
  const [consentVisible, setConsentVisible] = useState(false)

  useEffect(() => {
    if (!isAnalyticsConfigured()) return
    startAnalytics()
    const stored = getStoredConsent()
    if (stored === 'accepted') {
      updateConsent(true)
    } else if (stored === null) {
      setConsentVisible(true)
    }
    // stored === 'declined' needs no action — consent already defaults to denied.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    trackPageview(location.pathname + location.hash)
  }, [location.pathname, location.hash])

  function handleAccept() {
    setStoredConsent('accepted')
    updateConsent(true)
    setConsentVisible(false)
  }

  function handleDecline() {
    setStoredConsent('declined')
    updateConsent(false)
    setConsentVisible(false)
  }

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer onOpenCookiePreferences={() => setConsentVisible(true)} />
      <CookieConsent visible={consentVisible} onAccept={handleAccept} onDecline={handleDecline} />
      <BackToTop />
    </>
  )
}
