import Head from 'next/head';
import Navbar from '../../components/navbar';
import FullBlogpost from '../../components/fullBlogpost';
import Footer from '../../components/footer';
import { useRouter } from 'next/router'

//This page is a function (as opposed to class) because it's just easier to use 'useRouter'
let Post = () => {
    const router = useRouter();
    
    return(
        <div className="container">
            <Head>
                <title>EBN | Blog Post</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar/>
    
            <FullBlogpost postID={router.query.id}/>

            <Footer/>

            <style jsx>{`
                .container {
                    height: 100vh;
                    max-height: 100vh;
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

export default Post;