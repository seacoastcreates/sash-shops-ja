import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import Location from './components/Location'
import ReviewsSection from './components/ReviewsSection'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import Perf from './components/Perf'

export default function App() {
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
      <Footer />
    </>
  )
}
