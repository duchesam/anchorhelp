import Link from 'next/link';
export default function Footer(){
  return (
    <footer className="footer">
      <div className="wrap footerGrid">
        <div>
          <h3>AnchorHelp</h3>
          <p className="small">Foreclosure / pre-auction homeowner support. Fast, respectful options.</p>
          <div className="badges">
            <span className="badge">Fast decisions</span>
            <span className="badge">No commissions</span>
            <span className="badge">Nationwide network</span>
            <span className="badge">Transparent terms</span>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul className="small">
            <li><Link href="/options">Options</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/about">About Us</Link></li>
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <p className="small">
            Phone: (571) 536-2957<br/>
            Email: yofijula@gmail.com<br/>
            Company: YOFIJULA
          </p>
          <p className="small">
            <Link href="/disclaimer">Disclaimer</Link> · <Link href="/terms">Terms &amp; Conditions</Link>
          </p>
        </div>
      </div>
      <div className="wrap small" style={{paddingTop:8,paddingBottom:28,opacity:.8}}>
        © {new Date().getFullYear()} AnchorHelp (YOFIJULA). All rights reserved.
      </div>
    </footer>
  )
}
