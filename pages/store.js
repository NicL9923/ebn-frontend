import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Store() {
  return (
    <div className="container">
      <Head>
        <title>Explorers by Nature</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <main className="alertBanner">
        <h1>*Store Page Under Construction*</h1>
        <p>Stand by for Explorers by Nature Merchandise!</p>
      </main>

      <Footer/>

      <style jsx>{`
        .alertBanner {
          text-align: center;
          margin: 50px auto;
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
  )
}