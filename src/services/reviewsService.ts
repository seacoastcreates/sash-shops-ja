export type Review = {
  id: string
  name: string
  country: string
  rating: number
  text: string
  recommend: 'yes' | 'no'
  createdAt: string
}

export type NewReview = Omit<Review, 'id' | 'createdAt'>

/**
 * The contract the Reviews section is built against. Swap the
 * implementation without touching ReviewsSection.tsx.
 */
export interface ReviewsService {
  /** One-time fetch, newest first. */
  list(): Promise<Review[]>
  /** Live updates, newest first. Returns an unsubscribe function. */
  subscribe(callback: (reviews: Review[]) => void): () => void
  add(review: NewReview): Promise<void>
}
