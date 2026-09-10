import { useEffect, useRef, useState } from 'react'
import type { Review } from '../services/reviewsService'
import { flagFor, starString } from '../utils'

type Props = {
  reviews: Review[]
  loaded: boolean
}

export default function ReviewCarousel({ reviews, loaded }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [canScroll, setCanScroll] = useState(false)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(true)

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    function update() {
      if (!el) return
      // Small tolerances absorb subpixel rounding so a row that just
      // barely fits doesn't flicker arrows in and out.
      setCanScroll(el.scrollWidth > el.clientWidth + 4)
      setAtStart(el.scrollLeft <= 4)
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4)
    }

    update()
    const resizeObserver = new ResizeObserver(update)
    resizeObserver.observe(el)
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      resizeObserver.disconnect()
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [reviews])

  function scrollByCards(direction: 1 | -1) {
    const el = scrollerRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('.review-card')
    const step = card ? card.getBoundingClientRect().width + 18 : el.clientWidth * 0.8
    el.scrollBy({ left: step * direction, behavior: 'smooth' })
  }

  return (
    <div className="review-carousel">
      {canScroll && (
        <button
          type="button"
          className="carousel-arrow prev"
          onClick={() => scrollByCards(-1)}
          disabled={atStart}
          aria-label="Show previous reviews"
        >
          ‹
        </button>
      )}

      <div className="review-grid" ref={scrollerRef}>
        {!loaded && <div className="review-empty">Loading reviews…</div>}
        {loaded && reviews.length === 0 && (
          <div className="review-empty">No reviews yet — be the first to share your experience!</div>
        )}
        {reviews.map((r) => (
          <div className="review-card" key={r.id}>
            <div className="rc-top">
              <div>
                <div className="rc-name">{r.name}</div>
                <div className="rc-country">
                  {flagFor(r.country)} {r.country}
                </div>
              </div>
              <div className="rc-stars">{starString(r.rating)}</div>
            </div>
            <p>{r.text}</p>
            {r.recommend === 'yes' && <div className="rc-rec">Recommends Sash Shops Ja</div>}
          </div>
        ))}
      </div>

      {canScroll && (
        <button
          type="button"
          className="carousel-arrow next"
          onClick={() => scrollByCards(1)}
          disabled={atEnd}
          aria-label="Show more reviews"
        >
          ›
        </button>
      )}
    </div>
  )
}
