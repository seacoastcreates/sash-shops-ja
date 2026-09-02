import logo from '../assets/sash-shops-ja-logo.jpg'

export default function Hero() {
  return (
    <header>
      <div className="hero">
        <div className="hero-inner">
          <div className="label-card">
            <img
              src={logo}
              alt="Sash Shops Ja logo — a shopping bag patterned with Caribbean flags, wrapped in a red ribbon"
            />
            <div className="stamp">
              <span>
                KINGSTON
                <br />
                ORIGINAL
                <br />
                SINCE 2024
              </span>
            </div>
          </div>
          <div className="hero-copy">
            <div className="eyebrow">Kingston, JA → Your Door</div>
            <h1>Sash Shops Ja</h1>
            <div className="subhead">Your Personal Jamaica Shopper</div>
            <div className="tagline">WE SOURCE IT · WE SHOP IT · WE SHIP IT</div>
            <p className="lede">
              A Jamaica-based personal shopping service made for customers living abroad.
              Caribbean favorites, everyday essentials, gifts, beauty, clothing, or anything
              else available locally — we shop on your behalf and get it to you.
            </p>
            <p className="cta-line">You tell us what you want — we do the shopping for you.</p>
            <div className="btn-row">
              <a
                className="btn btn-solid"
                href="https://wa.me/18765191502?text=Hi%20Sash%20Shops%20Ja%2C%20I%27d%20like%20to%20get%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
              <a className="btn btn-ghost" href="mailto:sashshopsja@gmail.com">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
