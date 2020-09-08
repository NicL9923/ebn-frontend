import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faMusic } from '@fortawesome/free-solid-svg-icons';

export default function Podcast() {
  return (
    <div className="container">
      <Head>
        <title>Explorers by Nature</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <main>
        <div className="latestPodcastContainer">
          <div className="podcastLogoBox"><img src="/EbnLogo.svg" alt="EBN logo"/></div>

          <div>
            <h3>Our Latest Podcast</h3>

            <div className="podcast">
              <h4>*Podcast title*</h4>
              <div>
                <FontAwesomeIcon icon={faCalendarAlt} color="black"/>
                <p>*Date created*</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faClock} color="black"/>
                <p>*audio duration*</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faMusic} color="black"/>
                <p>*audio file size* MB</p>
              </div>
              <audio controls>
                <source src="/audiofilesource" type="audio/mpeg"/>
                Your browser doesn't support the audio element.
              </audio>
            </div>
          </div>
        </div>

        <div className="prevPodcastsContainer">
          <h3>Previous Podcasts</h3>

          <div>
            <div>
              <h4>*TODO: create podcast component with format above to be reused here*</h4>
            </div>
          </div>
        </div>
      </main>

      <Footer/>

      <style jsx>{`
        .latestPodcastContainer {
          display: grid;
          grid-template-columns: auto auto;
          column-gap: 20px;
          margin: 30px 0;
        }

        .podcastLogoBox {
          border-right: 3px solid #212121;
        }

        .prevPodcastsContainer {
          text-align: center;
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