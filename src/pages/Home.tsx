import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import WhatWeDo from '../components/WhatWeDo'
import HowItWorks from '../components/HowItWorks'
import WhyChooseUs from '../components/WhyChooseUs'
import Location from '../components/Location'
import ReviewsSection from '../components/ReviewsSection'
import FinalCta from '../components/FinalCta'
import Perf from '../components/Perf'
import SuccessModal from '../components/SuccessModal'

type NavState = { contactSubmitted?: boolean } | null

export default function Home() {
  const location = useLocation()
  const navigate = useNavigate()
  const [showSuccess, setShowSuccess] = useState(Boolean((location.state as NavState)?.contactSubmitted))

  useEffect(() => {
    // Runs once on mount only — clears the nav state so refreshing or
    // navigating back doesn't re-show the modal.
    if ((location.state as NavState)?.contactSubmitted) {
      navigate(location.pathname, { replace: true, state: null })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Hero />
      <main>
        <WhatWeDo />
        <Perf />
        <HowItWorks />
        <Perf />
        <WhyChooseUs />
        <Perf />
        <Location />
        <Perf />
        <ReviewsSection />
        <FinalCta />
      </main>
      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}
    </>
  )
}
