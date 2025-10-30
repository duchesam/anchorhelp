import Link from 'next/link';
export default function Header(){
  const Nav = ({href, children, cls}) => <Link href={href} className={cls||'nav'}>{children}</Link>;
  return (
    <header className="site-header">
      <div className="wrap">
        <nav>
          <Link href="/" className="logo">Anchor<span>Help</span></Link>
          <div className="links">
            <Nav href="/">Home</Nav>
            <Nav href="/options">Options</Nav>
            <Nav href="/services">Services</Nav>
            <Nav href="/faq">FAQ</Nav>
            <Nav href="/contact">Contact</Nav>
            <Nav href="/contact" cls="btn primary">Get Free Offer</Nav>
          </div>
        </nav>
      </div>
    </header>
  )
}
