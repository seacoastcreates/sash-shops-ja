import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore'
import { db } from './firebase'
import type { Review, ReviewsService } from './reviewsService'

const REVIEWS_COLLECTION = 'reviews'

function toReview(id: string, data: Record<string, unknown>): Review {
  return {
    id,
    name: String(data.name ?? ''),
    country: String(data.country ?? ''),
    rating: Number(data.rating ?? 0),
    text: String(data.text ?? ''),
    recommend: data.recommend === 'no' ? 'no' : 'yes',
    createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toDate().toISOString() : new Date().toISOString(),
  }
}

export const firebaseReviewsService: ReviewsService = {
  async list() {
    const snap = await getDocs(query(collection(db, REVIEWS_COLLECTION), orderBy('createdAt', 'desc')))
    return snap.docs.map((d) => toReview(d.id, d.data()))
  },

  subscribe(callback) {
    const q = query(collection(db, REVIEWS_COLLECTION), orderBy('createdAt', 'desc'))
    return onSnapshot(q, (snap) => {
      callback(snap.docs.map((d) => toReview(d.id, d.data())))
    })
  },

  async add(review) {
    await addDoc(collection(db, REVIEWS_COLLECTION), {
      ...review,
      createdAt: serverTimestamp(),
    })
  },
}
