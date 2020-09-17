import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import BlogpostPreview from '../components/blogpostPreview';

class Blog extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }
  
  //TODO: figure out how to pass in URL parameters...
  componentDidMount() {
    this.getBlogPosts();
  }

  getBlogPosts = () => {
    fetch('/api/blogposts/get', {
      method: 'GET',
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
          <div className="topPostBar">
            <div className="postOfTheMonth">
              <h3>Post of the Month</h3>
  
              <BlogpostPreview/>
            </div>
  
            <div>
              <h3>Most Recent</h3>
  
              <BlogpostPreview/>
            </div>
          </div>
  
          <hr/>
  
          <div className="latestPostsDiv">
            <h3>Latest Posts</h3>
  
            <div>
              <BlogpostPreview/>
              <BlogpostPreview/>
              <BlogpostPreview/>
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
    );
  }
}

export default Blog;