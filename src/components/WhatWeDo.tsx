const SERVICES = [
  'Personal shopping and product sourcing in Jamaica',
  'Purchasing items on behalf of customers living abroad',
  'Consolidating and carefully packaging orders',
  'Weighing and preparing packages for shipment',
  'Arranging international shipping through our courier partners',
  'Providing tracking information once your package has shipped',
]

const SERVED_COUNTRIES = [
  { flag: '🇯🇲', name: 'Jamaica' },
  { flag: '🇺🇸', name: 'United States' },
  { flag: '🇨🇦', name: 'Canada' },
  { flag: '🇬🇧', name: 'United Kingdom' },
]

export default function WhatWeDo() {
  return (
    <section className="wrap">
      <div className="whatwedo">
        <div>
          <h2>What We Do</h2>
          <p style={{ color: 'var(--ink-soft)', marginTop: 14, maxWidth: '52ch' }}>
            At Sash Shops Ja, we provide a convenient personal shopping and international
            shipping service. Our services include:
          </p>
          <div className="serve-line">
            <span>We currently serve:</span>
            {SERVED_COUNTRIES.map((c) => (
              <span className="flag-chip" key={c.name}>
                {c.flag} {c.name}
              </span>
            ))}
          </div>
        </div>
        <ul className="checklist">
          {SERVICES.map((service) => (
            <li key={service}>
              <span className="mark">✓</span> {service}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
