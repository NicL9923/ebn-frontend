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

      <div className="header">
        <div>
          <h1>Mankind was born to stay curious and wander.</h1>
          <button>
            <i class="fa fa-podcast" aria-hidden="true"></i>
            <span>Life's Next Journey</span>
          </button>
        </div>

        <img src="nowhere" alt="The creators in nature"/>
      </div>

      <div className="picsOfUs">
        <div>
          <img src="ourPics" alt="Chandler"/>
          <h3>Chandler</h3>
        </div>

        <div>
          <img src="ourPics" alt="Nicole"/>
          <h3>Nicole</h3>
        </div>

        <div>
          <img src="ourPics" alt="Kimberly"/>
          <h3>Kimberly</h3>
        </div>

        <div>
          <img src="ourPics" alt="Nicolas"/>
          <h3>Nicolas</h3>
        </div>
      </div>

      <footer>
        <span>Copyright © 2020 Nicolas Layne</span>
      </footer>

      <style jsx>{`
        .header {
          display: grid;
          grid-template-columns: 25% auto;
        }

        .picsOfUs {
          display: grid;
          grid-template-columns: auto auto auto auto;
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