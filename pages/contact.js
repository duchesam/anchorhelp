import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default function Contact(){return(<>
  <Header/><main className="wrap">
    <h1>Contact</h1>
    <p className="small">
      Phone: (571) 536-2957<br/>
      Email: <a href="mailto:yofijula@gmail.com">yofijula@gmail.com</a>
    </p>
    <a className="btn primary" href="mailto:yofijula@gmail.com?subject=AnchorHelp%20Offer%20Request">Request Offer</a>
  </main><Footer/></>);}
