import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import BlogpostPreview from '../components/blogpostPreview';

class Blog extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      mostRecentPost: null,
      postOfTheMonth: null
    }
  }
  
  componentDidMount() {
    this.getBlogPosts();
  }

  getBlogPosts = () => {
    fetch('/api/blogposts/get', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(body => { 
      this.setState({ posts: body });
      this.setMostRecentPost();
    });
  }

  setMostRecentPost = () => {
    this.setState({ mostRecentPost: this.state.posts[0], posts: this.state.posts.slice(1) });
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
  
              {this.state.postOfTheMonth && 
              <BlogpostPreview
                postTitle={this.state.postOfTheMonth.title} 
                postAuthor={this.state.postOfTheMonth.author} 
                dateCreated={this.state.postOfTheMonth.datecreated} 
                bodyText={this.state.postOfTheMonth.bodyText}
              />}
            </div>
  
            <div>
              <h3>Most Recent</h3>
              {this.state.mostRecentPost && 
              <BlogpostPreview 
                postTitle={this.state.mostRecentPost.title} 
                postAuthor={this.state.mostRecentPost.author} 
                dateCreated={this.state.mostRecentPost.datecreated} 
                bodyText={this.state.mostRecentPost.bodyText}
              />}
            </div>
          </div>
  
          <hr/>
  
          <div className="latestPostsDiv">
            <h3>Latest Posts</h3>
  
            <div>
              {this.state.posts.map(post => 
                <BlogpostPreview key={post.id} postTitle={post.title} postAuthor={post.author} dateCreated={post.datecreated} bodyText={post.bodyText}/>
              )}
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