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
 * implementation below for a real backend without touching
 * ReviewsSection.tsx.
 */
export interface ReviewsService {
  /** One-time fetch, newest first. */
  list(): Promise<Review[]>
  /** Live updates, newest first. Returns an unsubscribe function. */
  subscribe(callback: (reviews: Review[]) => void): () => void
  add(review: NewReview): Promise<void>
}

/**
 * TEMPORARY reviews backend, backed by localStorage.
 *
 * This keeps the Reviews section fully working out of the box — but
 * localStorage is per-browser, per-device. Reviews will NOT be shared
 * between visitors the way they were on the original published
 * Artifact (which used a real shared database via the `db` runtime
 * capability, only available inside Claude's Artifact viewer).
 *
 * Before this ships publicly, replace this file's export with a real
 * backend, for example:
 *   - Firebase / Firestore (`onSnapshot` maps directly to `subscribe`)
 *   - Supabase (Postgres + realtime subscriptions)
 *   - A small custom API route backed by Postgres/SQLite, polled or
 *     pushed over websockets
 *
 * Keep the `ReviewsService` interface above as the contract — nothing
 * in ReviewsSection.tsx needs to change, only which service it imports.
 */
const STORAGE_KEY = 'sash-shops-ja:reviews'
const listeners = new Set<(reviews: Review[]) => void>()

function sortNewestFirst(reviews: Review[]): Review[] {
  return [...reviews].sort((a, b) => b.createdAt.localeCompare(a.createdAt))
}

function readAll(): Review[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Review[]) : []
  } catch {
    return []
  }
}

function writeAll(reviews: Review[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews))
  const sorted = sortNewestFirst(reviews)
  listeners.forEach((callback) => callback(sorted))
}

export const localReviewsService: ReviewsService = {
  async list() {
    return sortNewestFirst(readAll())
  },

  subscribe(callback) {
    listeners.add(callback)
    callback(sortNewestFirst(readAll()))
    return () => {
      listeners.delete(callback)
    }
  },

  async add(review) {
    const all = readAll()
    all.push({
      ...review,
      id:
        typeof crypto !== 'undefined' && 'randomUUID' in crypto
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      createdAt: new Date().toISOString(),
    })
    writeAll(all)
  },
}
