import JamaicaFlagCircle from './JamaicaFlagCircle'

export default function Location() {
  return (
    <section className="wrap" id="location">
      <div className="section-head">
        <h2>Where We're Located</h2>
      </div>
      <div className="route-wrap">
        <div className="route-copy">
          <p>
            Sash Shops Ja is proudly based in Jamaica. We shop locally on the island and
            provide international shipping to customers abroad.
          </p>
          <div className="route-meta">
            <span>LOCATION: JAMAICA</span>
            <span>SERVING: JAMAICA · UNITED STATES · CANADA · UNITED KINGDOM</span>
          </div>
        </div>
        <svg
          className="route-svg"
          viewBox="0 0 420 220"
          role="img"
          aria-label="Route diagram from Kingston, Jamaica to the United States, Canada, and the United Kingdom"
        >
          <g fill="none" stroke="var(--line)" strokeWidth={2} strokeDasharray="5 6">
            <path d="M90,110 L300,40" />
            <path d="M90,110 L300,110" />
            <path d="M90,110 L300,180" />
          </g>
          <JamaicaFlagCircle x={60} y={80} width={60} height={60} />
          <text x={90} y={152} textAnchor="middle" fill="var(--ink-soft)" fontFamily="Space Mono, monospace" fontSize={7}>
            KINGSTON
          </text>

          <circle cx={308} cy={40} r={20} fill="var(--paper-raised)" stroke="var(--line)" strokeWidth={1.5} />
          <text x={308} y={44} textAnchor="middle" fontSize={14}>
            🇺🇸
          </text>
          <text x={340} y={43} fill="var(--ink)" fontFamily="Space Mono, monospace" fontSize={9}>
            USA
          </text>

          <circle cx={308} cy={110} r={20} fill="var(--paper-raised)" stroke="var(--line)" strokeWidth={1.5} />
          <text x={308} y={114} textAnchor="middle" fontSize={14}>
            🇨🇦
          </text>
          <text x={340} y={113} fill="var(--ink)" fontFamily="Space Mono, monospace" fontSize={9}>
            CANADA
          </text>

          <circle cx={308} cy={180} r={20} fill="var(--paper-raised)" stroke="var(--line)" strokeWidth={1.5} />
          <text x={308} y={184} textAnchor="middle" fontSize={14}>
            🇬🇧
          </text>
          <text x={340} y={183} fill="var(--ink)" fontFamily="Space Mono, monospace" fontSize={9}>
            UK
          </text>
        </svg>
      </div>
    </section>
  )
}
