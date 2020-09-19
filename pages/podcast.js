import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import PodcastBlock from '../components/podcastBlock';

class Podcast extends React.Component {
  constructor() {
    super();
    this.state = {
      podcasts: [],
      latestPodcast: null
    }
  }

  componentDidMount() {
    this.getPodcasts();
  }

  getPodcasts = () => {
    fetch('/api/podcasts/get', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(body => {
      this.setState({ podcasts: body });
      this.setLatestPodcast();
    });
  }

  setLatestPodcast = () => {
    this.setState({ latestPodcast: this.state.podcasts[0], podcasts: this.state.podcasts.slice(1) });
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
  
              {this.state.latestPodcast && 
                <PodcastBlock title={this.state.latestPodcast.title} dateCreated={this.state.latestPodcast.datecreated} id={this.state.latestPodcast.id} autoLoadAudio/>
              }
            </div>
          </div>
  
          <hr/>
  
          <div className="prevPodcastsContainer">
            <h3>Previous Podcasts</h3>
  
            <div>
              {this.state.podcasts.map(podcast => 
                <PodcastBlock key={podcast.id} title={podcast.title} dateCreated={podcast.datecreated} id={podcast.id}/>
              )}
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