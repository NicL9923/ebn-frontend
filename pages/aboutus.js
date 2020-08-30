import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function AboutUs() {
  return (
    <div className="container">
      <Head>
        <title>Explorers by Nature</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <main className="aboutUsGrid">
        <div className="chanDiv">
          <h1>Chandler</h1>
          <p>
            Chandler is a highly motivated, truly dedicated Bravo midshipman, sir.
          </p>
        </div>

        <div className="nicoleDiv">
          <h1>Nicole</h1>
          <p>
            Nicole is also a highly motivated, truly dedicatd Bravo midshipman, sir.
          </p>
        </div>

        <div className="kimDiv">
          <h1>Kimberly</h1>
          <p>
            Kimberly loves to craft and, uh, sleep?
          </p>
        </div>

        <div className="nicDiv">
          <h1>Nicolas</h1>
          <p>
            Nicolas, or Nic (yup, no 'k'!) for short, loves computers and motorcycles!
          </p>
        </div>
      </main>

      <Footer/>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          height: 100vh;
        }
        
        .aboutUsGrid {
          display: grid;
          grid-template-columns: auto auto;
          flex: 1;
        }

        .chanDiv, .nicoleDiv, .kimDiv, .nicDiv {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .chanDiv {

        }

        .nicoleDiv {

        }

        .kimDiv {

        }

        .nicDiv {

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