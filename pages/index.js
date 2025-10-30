import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default function Home(){
  return (<>
    <Header/>
    <section className="hero">
      <div className="wrap">
        <h1>Nationwide Foreclosure Help</h1>
        <p className="small">Real options when you need them most. We help homeowners across the U.S. avoid foreclosure, stop auctions, and move forward.</p>
        <div style={{display:'flex',gap:'12px',marginTop:'14px'}}>
          <a href="/contact" className="btn primary">Get a Cash Offer</a>
          <a href="/options" className="btn">Explore Options</a>
        </div>
        <div className="kpis">
          <div className="pill">Fast decisions</div>
          <div className="pill">No commissions</div>
          <div className="pill">Nationwide network</div>
          <div className="pill">Transparent process</div>
        </div>
        <div className="grid">
          <div className="card"><strong>2-Year Buyback.</strong><br/>Stay in your home while working toward future ownership. Requires consistent proof of income.</div>
          <div className="card"><strong>70% Cash Offer.</strong><br/>Close quickly; we handle liens and avoid last-minute stalls.</div>
          <div className="card"><strong>Auction Rescue.</strong><br/>We can still help even if a sale date is scheduled—time matters.</div>
        </div>
      </div>
    </section>
    <Footer/>
  </>);
}
