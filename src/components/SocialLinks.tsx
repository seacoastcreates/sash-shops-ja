import type { FC, SVGProps } from 'react'

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.5 3h-3v12.2a2.8 2.8 0 1 1-2-2.68V9.4a5.8 5.8 0 1 0 5 5.75V9.1a7.6 7.6 0 0 0 4 1.15V7.25A4.6 4.6 0 0 1 16.5 3z" />
    </svg>
  )
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-7.6h2.55l.38-2.96h-2.93V8.55c0-.86.24-1.44 1.47-1.44h1.57V4.46A21 21 0 0 0 14.3 4.3c-2.24 0-3.78 1.37-3.78 3.88v2.16H8v2.96h2.52V21h2.98z" />
    </svg>
  )
}

type Social = {
  name: string
  href: string
  Icon: FC<SVGProps<SVGSVGElement>>
}

// TODO: swap these placeholder URLs for Sash Shops Ja's real profile links.
const SOCIALS: Social[] = [
  { name: 'Instagram', href: 'https://instagram.com/', Icon: InstagramIcon },
  { name: 'TikTok', href: 'https://tiktok.com/', Icon: TikTokIcon },
  { name: 'Facebook', href: 'https://facebook.com/', Icon: FacebookIcon },
]

export default function SocialLinks() {
  return (
    <div className="socials-row">
      {SOCIALS.map(({ name, href, Icon }) => (
        <a key={name} className="social-link" href={href} target="_blank" rel="noopener noreferrer">
          <span className="social-icon">
            <Icon />
          </span>
          {name}
        </a>
      ))}
    </div>
  )
}
