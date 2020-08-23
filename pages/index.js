import Head from 'next/head';
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Explorers by Nature</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <footer>
        <span>Copyright © 2020 Nicolas Layne</span>
      </footer>

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