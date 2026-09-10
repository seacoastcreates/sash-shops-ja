import type { SVGProps } from 'react'

/** The Jamaican flag's diagonal saltire pattern, clipped into a circle. */
export default function JamaicaFlagCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" role="img" aria-label="Circular Jamaican flag" {...props}>
      <defs>
        <clipPath id="jamaica-flag-circle-clip">
          <circle cx="50" cy="50" r="50" />
        </clipPath>
      </defs>
      <g clipPath="url(#jamaica-flag-circle-clip)">
        <rect x="0" y="0" width="100" height="100" fill="#FED100" />
        <polygon points="22,0 78,0 50,50" fill="#009B3A" />
        <polygon points="78,100 22,100 50,50" fill="#009B3A" />
        <polygon points="0,22 0,78 50,50" fill="#000000" />
        <polygon points="100,22 100,78 50,50" fill="#000000" />
      </g>
      <circle cx="50" cy="50" r="49" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth={1} />
    </svg>
  )
}
