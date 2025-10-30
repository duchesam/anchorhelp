import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container">
        <section className="hero">
          <h1>Nationwide Foreclosure Help</h1>
          <p>
            Real options when you need them most. We help homeowners across the U.S. avoid
            foreclosure, stop auctions, and move forward—fast and respectfully.
          </p>
          <div className="btns">
            <Link className="btn primary" href="/contact">Get Free Offer</Link>
            <Link className="btn" href="/options">Explore Options</Link>
          </div>
          <div className="grid">
            <div className="card"><strong>Fast decisions</strong><br/>Urgent timelines respected.</div>
            <div className="card"><strong>No commissions</strong><br/>Transparent numbers.</div>
            <div className="card"><strong>Nationwide network</strong><br/>We can help wherever you are.</div>
            <div className="card"><strong>Respectful process</strong><br/>You stay in control.</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
