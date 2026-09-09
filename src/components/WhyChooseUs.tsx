const REASONS = [
  { icon: 'JA', title: 'Convenience', text: "Can't shop in Jamaica yourself? Let us do it for you." },
  { icon: '★', title: 'Personal Service', text: 'Your order is handled with care from shopping to shipping.' },
  {
    icon: '📍',
    title: 'Jamaican-Based',
    text: "We're locally based, giving us direct access to products and stores island-wide.",
  },
  { icon: '→', title: 'Simple Process', text: 'Tell us what you need, make your payment, and let us handle the rest.' },
]

export default function WhyChooseUs() {
  return (
    <section className="wrap">
      <div className="section-head">
        <h2>Why Choose Sash Shops Ja?</h2>
      </div>
      <div className="why-grid">
        {REASONS.map((r) => (
          <div className="badge-card" key={r.title}>
            <div className="badge-ring">{r.icon}</div>
            <h3>{r.title}</h3>
            <p>{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
