import Head from 'next/head';
import Navbar from '../components/navbar';
import ContactForm from '../components/contactForm';
import Footer from '../components/footer';

class ContactUs extends React.Component {
  render() {
    return (
      <div className="container">
        <Head>
          <title>EBN | Contact Us</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <Navbar/>
  
        <main className="cFormDiv">
          <ContactForm/>
        </main>
  
        <Footer/>
  
        <style jsx>{`
          .container {
            height: 100vh;
            display: flex;
            flex-direction: column;
          }
  
          .cFormDiv {
            text-align: center;
            flex: 1;
          }
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
    );
  }
}

export default ContactUs;