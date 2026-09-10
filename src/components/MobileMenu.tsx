import { useEffect } from 'react'

export type DrawerItem = {
  label: string
  onClick: () => void
}

type Props = {
  open: boolean
  onClose: () => void
  items: DrawerItem[]
}

export default function MobileMenu({ open, onClose, items }: Props) {
  useEffect(() => {
    if (!open) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open, onClose])

  return (
    <>
      <div className={`drawer-overlay${open ? ' open' : ''}`} onClick={onClose} aria-hidden="true" />
      <div className={`drawer${open ? ' open' : ''}`} role="dialog" aria-modal="true" aria-label="Site sections" aria-hidden={!open}>
        <button type="button" className="drawer-close" onClick={onClose} aria-label="Close menu" tabIndex={open ? 0 : -1}>
          ×
        </button>
        <nav className="drawer-nav">
          {items.map((item) => (
            <button
              key={item.label}
              type="button"
              className="drawer-link"
              onClick={item.onClick}
              tabIndex={open ? 0 : -1}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  )
}
