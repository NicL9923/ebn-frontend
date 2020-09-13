import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import PodcastBlock from '../components/podcastBlock';

class Podcast extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount() {
    //TODO: Fetch and store podcasts
    let body = {
      title: this.state.title
    };
    
    fetch('/api/podcast', {
      method: 'get',
      body:    JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.text())
    .then(body => console.log(body));
  }
  
  render() {
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
  
              <PodcastBlock/>
            </div>
          </div>
  
          <hr/>
  
          <div className="prevPodcastsContainer">
            <h3>Previous Podcasts</h3>
  
            <div>
              <PodcastBlock/>
              <PodcastBlock/>
              <PodcastBlock/>
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
    );
  }
}

export default Podcast;