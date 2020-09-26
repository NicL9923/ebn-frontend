import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { withRouter } from 'next/router'


class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postID: this.props.router.query.id,
            post: null
        }
    }

    componentDidMount() {
        this.getPostByID();
        console.log(this.state.postID + " " + this.state.post);
    }

    getPostByID = () => {
        while (!this.state.postID) {
            //Nada
        }
        
        fetch(`/api/blogposts/get?id=${this.state.postID}`, {
            method: 'GET'
            })
            .then(res => res.json())
            .then(body => { 
                this.setState({ post: body[0] });
            }
        );
    }

    render() {
        return(
            <div>
                <Head>
                    <title>EBN | Blog Post</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Navbar/>
        
                <main>
                    {this.state.post}
                </main>

                <Footer/>

                <style jsx>{`
                    .container {
                        height: 100vh;
                        max-height: 100vh;
                    }
                    
                    .latestPodcastContainer {
                        display: grid;
                        grid-template-columns: auto auto;
                        column-gap: 20px;
                        margin: 30px 0;
                        height: 25vh;
                    }
            
                    .podcastLogoBox {
                        border-right: 3px solid #212121;
                        text-align: center;
                    }

                    .podcastLogoBox img {
                        height: 100%;
                    }
            
                    .prevPodcastsContainer {
                        text-align: center;
                        overflow: auto;
                        width: 60%;
                        margin: 10px auto;
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

export default withRouter(Post);