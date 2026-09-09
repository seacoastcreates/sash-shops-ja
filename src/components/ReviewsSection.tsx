import { useEffect, useRef, useState, type FormEvent } from 'react'
import { firebaseReviewsService as reviewsService } from '../services/firebaseReviewsService'
import type { Review } from '../services/reviewsService'
import { flagFor, starString } from '../utils'

type FormStatus = { text: string; kind: 'ok' | 'error' | '' }

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loaded, setLoaded] = useState(false)
  const [status, setStatus] = useState<FormStatus>({ text: '', kind: '' })
  const [submitting, setSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const unsubscribe = reviewsService.subscribe((all) => {
      setReviews(all)
      setLoaded(true)
    })
    return unsubscribe
  }, [])

  const average = reviews.length ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length : 0

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus({ text: '', kind: '' })

    const form = formRef.current
    if (!form) return

    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const country = String(data.get('country') || '').trim()
    const text = String(data.get('text') || '').trim()
    const ratingRaw = data.get('rating')
    const recommend = (String(data.get('recommend') || 'yes') === 'no' ? 'no' : 'yes') as 'yes' | 'no'

    if (!name || !country || !text || !ratingRaw) {
      setStatus({ text: 'Please fill in your name, country, a rating, and your experience.', kind: 'error' })
      return
    }

    setSubmitting(true)
    try {
      await reviewsService.add({
        name: name.slice(0, 60),
        country: country.slice(0, 40),
        rating: Number(ratingRaw),
        text: text.slice(0, 500),
        recommend,
      })
      form.reset()
      setStatus({ text: 'Thank you for sharing your experience!', kind: 'ok' })
    } catch (err) {
      console.error(err)
      setStatus({ text: 'Something went wrong submitting your review. Please try again.', kind: 'error' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="wrap" id="reviews">
      <div className="section-head">
        <h2>What Our Customers Say</h2>
        <p>
          Your experience matters to us. After receiving your order, share how it went — it
          helps us improve, and helps future customers shop with confidence.
        </p>
      </div>

      {reviews.length > 0 && (
        <div className="reviews-summary">
          <div className="rs-score">{average.toFixed(1)}</div>
          <div>
            <div className="rs-stars">{starString(average)}</div>
            <div className="rs-count">
              based on {reviews.length} {reviews.length === 1 ? 'review' : 'reviews'}
            </div>
          </div>
        </div>
      )}

      <div className="review-grid">
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

      <div className="review-form">
        <h3>Leave a Review</h3>
        <p className="rf-sub">Have you shopped with us before? Tell us about your experience.</p>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="rf-grid">
            <div className="field">
              <label htmlFor="rf-name">Name</label>
              <input type="text" id="rf-name" name="name" maxLength={60} required />
            </div>
            <div className="field">
              <label htmlFor="rf-country">Country</label>
              <input type="text" id="rf-country" name="country" maxLength={40} placeholder="e.g. United States" required />
            </div>
          </div>

          <div className="field">
            <label>Rating</label>
            <div className="star-input">
              <input type="radio" id="star5" name="rating" value={5} />
              <label htmlFor="star5" title="5 stars">★</label>
              <input type="radio" id="star4" name="rating" value={4} />
              <label htmlFor="star4" title="4 stars">★</label>
              <input type="radio" id="star3" name="rating" value={3} />
              <label htmlFor="star3" title="3 stars">★</label>
              <input type="radio" id="star2" name="rating" value={2} />
              <label htmlFor="star2" title="2 stars">★</label>
              <input type="radio" id="star1" name="rating" value={1} />
              <label htmlFor="star1" title="1 star">★</label>
            </div>
          </div>

          <div className="field">
            <label htmlFor="rf-text">Tell us about your experience</label>
            <textarea id="rf-text" name="text" maxLength={500} required />
          </div>

          <div className="field">
            <label>Would you recommend Sash Shops Ja?</label>
            <div className="rec-toggle">
              <label>
                <input type="radio" name="recommend" value="yes" defaultChecked /> Yes
              </label>
              <label>
                <input type="radio" name="recommend" value="no" /> No
              </label>
            </div>
          </div>

          <div className="submit-row">
            <button type="submit" className="btn btn-primary" disabled={submitting}>
              {submitting ? 'Submitting…' : 'Submit Review'}
            </button>
            {status.text && <span className={`form-msg ${status.kind}`}>{status.text}</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
