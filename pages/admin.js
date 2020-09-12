import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

//TODO: Authentication/Authorization
//TODO: Display blog posts only to current user (if user === admin (general admin account), can see all)
import CreatePostModal from '../components/createPostModal';
import CreatePodcastModal from '../components/createPodcastModal';

class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      isCreatingNewPost: false,
      isCreatingNewPodcast: false
    }
  }
  
  render() {
    return (
      <div className="container">
        <Head>
          <title>Explorers by Nature</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <Navbar/>
  
        <main className="bodyDiv">
          <div>
            <h1>Admin Portal</h1>
            <h2>Welcome *name*!</h2>
          </div>
  
          <div className="adminBlog">
            <h3>Your Blog Posts</h3>
            <button onClick={() => this.setState({ isCreatingNewPost: true })}>Create New Post</button>
            {this.state.isCreatingNewPost && <CreatePostModal/>}
            
            <h4>Existing Posts</h4>
            <p>Preview of existing posts, with Edit/Delete buttons</p>
          </div>
  
          <div className="adminPodcasts">
            <h3>Podcasts</h3>
            <button onClick={() => this.setState({ isCreatingNewPodcast: true })}>Create New Podcast</button>
            {this.state.isCreatingNewPodcast && <CreatePodcastModal/>}
  
            <h4>Existing Podcasts</h4>
            <p>Preview of existing podcasts, with Delete button</p>
          </div>
  
          <div className="adminContactMsgs">
            <h3>Messages</h3>
            <p>Preview of existing contact messages, with Delete button</p>
          </div>
        </main>
  
        <Footer/>
  
        <style jsx>{`
          .bodyDiv {
            text-align: center;
          }
          
          .adminBlog {
            margin: 20px 0;
          }

          .adminPodcasts {
            margin: 20px 0;
          }

          .adminContactMsgs {
            margin: 20px 0;
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

export default Admin;