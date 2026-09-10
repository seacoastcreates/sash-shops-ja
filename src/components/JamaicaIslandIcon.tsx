import type { SVGProps } from 'react'

const ISLAND_PATH =
  'M 70.9,0.0 L 62.64,0.86 L 56.45,3.61 L 54.38,9.79 L 51.97,8.24 L 46.12,9.27 L 36.83,9.62 L 28.91,8.59 L 22.2,9.62 L 18.41,12.71 L 8.95,18.55 L 5.16,21.3 L 4.3,30.93 L 1.72,30.93 L 0.0,37.46 L 6.54,43.65 L 14.8,44.86 L 17.21,48.81 L 23.06,46.75 L 33.39,46.4 L 41.3,47.26 L 43.02,55.7 L 50.08,59.31 L 52.49,66.89 L 59.03,69.64 L 66.77,70.5 L 65.91,77.56 L 70.22,81.7 L 79.85,93.42 L 100.5,91.18 L 110.49,94.28 L 123.56,91.7 L 139.74,106.87 L 150.07,111.87 L 159.36,110.32 L 160.74,105.66 L 158.33,99.11 L 159.7,94.45 L 156.61,91.35 L 161.43,88.08 L 166.07,93.07 L 174.68,94.28 L 182.59,93.94 L 187.58,89.97 L 193.61,82.39 L 199.98,84.11 L 208.41,80.67 L 215.46,84.63 L 223.04,90.49 L 230.61,92.56 L 241.62,90.32 L 251.6,92.39 L 261.41,90.32 L 272.94,87.73 L 280.0,84.97 L 278.11,79.29 L 273.63,78.77 L 273.29,76.36 L 262.79,53.98 L 256.77,48.3 L 246.61,45.03 L 238.52,42.28 L 230.26,42.45 L 227.17,37.98 L 219.59,39.01 L 217.36,36.08 L 211.68,33.68 L 203.07,32.82 L 201.35,27.66 L 192.4,22.16 L 190.68,16.49 L 185.35,14.43 L 180.7,15.63 L 173.3,13.91 L 162.8,14.77 L 156.95,13.4 L 135.1,7.73 L 126.49,7.38 L 107.56,4.98 L 88.8,3.61 Z'

/** Silhouette of Jamaica filled with the flag pattern (gold saltire, green top/bottom, black hoist/fly). */
export default function JamaicaIslandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 300 150" role="img" aria-label="Silhouette of the island of Jamaica filled with the Jamaican flag" {...props}>
      <defs>
        <clipPath id="jamaica-island-clip">
          <path d={ISLAND_PATH} />
        </clipPath>
        <filter id="jamaica-island-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.25" />
        </filter>
      </defs>
      <g transform="translate(10,19)" filter="url(#jamaica-island-shadow)">
        <g clipPath="url(#jamaica-island-clip)">
          <rect x="-4" y="-4" width="288" height="119.87" fill="#FED100" />
          <polygon points="0,0 280,0 140,35.8" fill="#009B3A" />
          <polygon points="0,111.87 280,111.87 140,76.07" fill="#009B3A" />
          <polygon points="0,0 0,111.87 89.6,55.94" fill="#000000" />
          <polygon points="280,0 280,111.87 190.4,55.94" fill="#000000" />
        </g>
        <path d={ISLAND_PATH} fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth={1} />
      </g>
    </svg>
  )
}
