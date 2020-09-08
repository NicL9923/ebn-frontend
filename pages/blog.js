import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Blog() {
  return (
    <div className="container">
      <Head>
        <title>Explorers by Nature</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <main>
        <div className="topPostBar">
          <div className="postOfTheMonth">
            <h3>Post of the Month</h3>

            <h4>*Blog title*</h4>
            <p>*Author*</p>
            <p>*Date*</p>
            <p>*First few lines of blog (blurred)...*</p>
          </div>

          <div>
            <h3>Most Recent</h3>

            <h4>*Blog title*</h4>
            <p>*Author*</p>
            <p>*Date*</p>
            <p>*First few lines of blog (blurred)...*</p>
          </div>
        </div>

        <div className="latestPostsDiv">
          <h3>Latest Posts</h3>

          <div>
            <div>
              <h4>*TODO: create blog post preview component with format above to be reused here(maybe?)*</h4>
            </div>

            <div>
              *the next post in the queue and so on...*
            </div>
          </div>
        </div>
      </main>

      <Footer/>

      <style jsx>{`
        .topPostBar {
          display: grid;
          grid-template-columns: auto auto;
          margin: 30px 0;
        }

        .postOfTheMonth {
          border-right: 3px solid #212121;
        }

        .latestPostsDiv {
          text-align: center;
          margin: 30px 0;
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