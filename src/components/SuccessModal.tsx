import { useEffect } from 'react'

type Props = {
  onClose: () => void
}

export default function SuccessModal({ onClose }: Props) {
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="success-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 id="success-modal-title">Message Sent</h2>
        <p>Thanks for reaching out — we'll get back to you soon.</p>
        <button type="button" className="btn btn-primary" onClick={onClose} autoFocus>
          OK
        </button>
      </div>
    </div>
  )
}
