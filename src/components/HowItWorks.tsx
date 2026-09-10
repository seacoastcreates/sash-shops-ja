const STEPS = [
  {
    title: 'Tell Us What You Need',
    text: "Send us the details of the products you'd like us to find and purchase.",
  },
  {
    title: 'Receive Your Quote',
    text: 'We check availability and give you the cost of your items plus applicable service fees.',
  },
  {
    title: 'Make Your Payment',
    text: 'Once your order is confirmed, payment is required upfront before we purchase your items.',
  },
  {
    title: 'We Shop',
    text: 'We purchase your items and keep you updated throughout the process.',
  },
  {
    title: 'We Package & Weigh',
    text: 'Your items are carefully packaged and weighed so your final shipping cost can be determined.',
  },
  {
    title: 'We Ship',
    text: 'Your package goes to our courier partner and you receive tracking information to follow it home.',
  },
]

export default function HowItWorks() {
  return (
    <section className="wrap" id="how-it-works">
      <div className="section-head">
        <h2>How It Works</h2>
      </div>
      <div className="steps">
        {STEPS.map((step, i) => (
          <div className="ticket" key={step.title}>
            <span className="step-tag">
              STEP {String(i + 1).padStart(2, '0')} / {String(STEPS.length).padStart(2, '0')}
            </span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
