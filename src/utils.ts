const COUNTRY_FLAGS: Record<string, string> = {
  jamaica: '🇯🇲',
  'united states': '🇺🇸',
  usa: '🇺🇸',
  us: '🇺🇸',
  canada: '🇨🇦',
  'united kingdom': '🇬🇧',
  uk: '🇬🇧',
  'great britain': '🇬🇧',
}

export function flagFor(country: string): string {
  if (!country) return '🌍'
  return COUNTRY_FLAGS[country.trim().toLowerCase()] ?? '🌍'
}

export function starString(rating: number): string {
  const rounded = Math.max(0, Math.min(5, Math.round(rating)))
  return '★★★★★'.slice(0, rounded) + '☆☆☆☆☆'.slice(0, 5 - rounded)
}
