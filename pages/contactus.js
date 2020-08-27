import Head from 'next/head';
import Navbar from '../components/navbar';
import ContactForm from '../components/contactForm';
import Footer from '../components/footer';

export default function ContactUs() {
  return (
    <div className="container">
      <Head>
        <title>Explorers by Nature</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <main>
        <ContactForm/>
      </main>

      <Footer/>

      <style jsx>{`
        asd
      `}</style>

      <style jsx global>{`
        * {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
      `}</style>
    </div>
  )
}