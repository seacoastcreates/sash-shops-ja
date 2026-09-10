import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

type Status = { kind: 'idle' | 'submitting' | 'error'; message?: string }

function encodeFormData(data: Record<string, string>): string {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

export default function ContactForm() {
  const navigate = useNavigate()
  const [status, setStatus] = useState<Status>({ kind: 'idle' })

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const data = new FormData(form)

    // Honeypot: real visitors never see or fill this field. Netlify also
    // rejects these server-side, but bailing out here skips the network
    // round-trip and never shows the bot an error state either way.
    if (String(data.get('bot-field') || '').trim()) {
      navigate('/', { state: { contactSubmitted: true } })
      return
    }

    setStatus({ kind: 'submitting' })

    const payload: Record<string, string> = {}
    data.forEach((value, key) => {
      payload[key] = String(value)
    })

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData(payload),
      })

      if (!response.ok) throw new Error(`Submission failed with status ${response.status}`)

      navigate('/', { state: { contactSubmitted: true } })
    } catch (err) {
      console.error(err)
      setStatus({
        kind: 'error',
        message: "Something went wrong sending your message. Please try WhatsApp or email us directly instead.",
      })
    }
  }

  return (
    <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />

      <p className="hp-field" aria-hidden="true">
        <label>
          Leave this field blank
          <input type="text" name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="field">
        <label htmlFor="cf-name">Name</label>
        <input type="text" id="cf-name" name="name" maxLength={80} required />
      </div>

      <div className="field">
        <label htmlFor="cf-email">Email</label>
        <input type="email" id="cf-email" name="email" maxLength={120} required />
      </div>

      <div className="field">
        <label htmlFor="cf-phone">Phone number (optional)</label>
        <input type="tel" id="cf-phone" name="phone" maxLength={30} />
      </div>

      <div className="field">
        <label htmlFor="cf-message">Message</label>
        <textarea id="cf-message" name="message" maxLength={1000} required />
      </div>

      <div className="submit-row">
        <button type="submit" className="btn btn-primary" disabled={status.kind === 'submitting'}>
          {status.kind === 'submitting' ? 'Sending…' : 'Send Message'}
        </button>
        {status.kind === 'error' && <span className="form-msg error">{status.message}</span>}
      </div>
    </form>
  )
}
