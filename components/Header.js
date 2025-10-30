import Link from "next/link";

export default function Header() {
  return (
    <header className="container">
      <nav className="nav">
        <div className="logo">
          Anchor <em>Help</em>
        </div>
        <div className="links">
          <Link href="/">Home</Link>
          <Link href="/options">Options</Link>
          <Link href="/services">Services</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
