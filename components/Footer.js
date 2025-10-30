import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container footer">
      <div className="footer-cols">
        <div>
          <div className="logo">Anchor <em>Help</em></div>
          <p className="small">Foreclosure / Pre-auction homeowner support. Fast, respectful options.</p>
          <p className="small">
            <strong>YOFIJULA</strong><br />
            Phone: (571) 536-2957<br />
            Email: <a href="mailto:yofijula@gmail.com">yofijula@gmail.com</a>
          </p>
        </div>
        <div>
          <p><strong>Quick Links</strong></p>
          <p className="small">
            <Link href="/options">Options</Link><br />
            <Link href="/services">Services</Link><br />
            <Link href="/faq">FAQ</Link><br />
            <Link href="/contact">Contact</Link><br />
            <Link href="/about">About Us</Link><br />
          </p>
        </div>
        <div>
          <p><strong>Legal</strong></p>
          <p className="small">
            <Link href="/terms">Terms & Conditions</Link><br />
            <Link href="/disclaimer">Disclaimer</Link>
          </p>
        </div>
      </div>
      <p className="small">© {new Date().getFullYear()} AnchorHelp. All rights reserved.</p>
    </footer>
  );
}
