import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

//TODO: Authentication/Authorization
//TODO: Display blog posts only to current user (if user === admin (general admin account), can see all)

export default function Admin() {
  return (
    <div className="container">
      <Head>
        <title>Explorers by Nature</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <main>
        <div>
          <h1>Admin Portal</h1>
          <h2>Welcome *name*!</h2>
        </div>

        <div className="adminBlog">
          <h3>Your Blog Posts</h3>
          <p>Create new, edit existing, or delete</p>
        </div>

        <div className="adminPodcasts">
          <h3>Podcasts</h3>
          <p>Upload new, or delete</p>
        </div>

        <div className="adminContactMsgs">
          <h3>Messages</h3>
          <p>View, or delete, contact messages</p>
        </div>
      </main>

      <Footer/>

      <style jsx>{`
        asd
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