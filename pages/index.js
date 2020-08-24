import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPodcast } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="pageContainer">
      <Head>
        <title>Explorers by Nature</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Navbar/>

      <div className="header">
        <div className="hdrCTA">
          <h1 className="motto">Mankind was born to stay curious and wander.</h1>

          <Link href="/podcast"><a className="CTAbtn">
            <FontAwesomeIcon icon={faPodcast} size="2x" color="white"/>
            <span>Life's Next Journey</span>
          </a></Link>
        </div>

        <img className="hdrImg" src="/placeholder.png" alt="The creators in nature"/>
      </div>

      <div className="picsOfUs">
        <div>
          <img src="/placeholder.png" alt="Chandler"/>
          <h3>Chandler</h3>
        </div>

        <div>
          <img src="/placeholder.png" alt="Nicole"/>
          <h3>Nicole</h3>
        </div>

        <div>
          <img src="/placeholder.png" alt="Kimberly"/>
          <h3>Kimberly</h3>
        </div>

        <div>
          <img src="/placeholder.png" alt="Nicolas"/>
          <h3>Nicolas</h3>
        </div>
      </div>

      <Footer/>

      <style jsx>{`
        .pageContainer {
          height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .header {
          display: grid;
          grid-template-columns: 35% auto;
          background-color: #212121;
        }

        .hdrCTA {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          padding: 0 3px;
        }

        .motto {
          color: #fafafa;
        }

        .CTAbtn {
          background-color: #078f15;
          padding: 15px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          transition: 0.3s ease;
          text-decoration: none;
        }

        .CTAbtn span {
          color: white;
          font-size: 18px;
          margin-left: 8px;
        }

        .CTAbtn:hover {
          background-color: #004507;
          cursor: pointer;
        }

        .hdrImg {
          width: 100%;
          height: 50vh;
        }

        .picsOfUs {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          align-items: center;
          flex: 1;
        }

        .picsOfUs div {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
        }

        .picsOfUs div img {
          border-radius: 50%;
          height: 180px;
          margin-bottom: 25px;
          border: 4px solid #004507;
        }

        .picsOfUs div h3 {
          font-size: 24px;
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