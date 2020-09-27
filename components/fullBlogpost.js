import React from 'react';
//TODO: render markdown using react-markdown

class FullBlogpost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postID: this.props.postID ? this.props.postID : null,
            post: null
        }
    }

    componentDidMount() {
        this.getPostByID();
    }

    //Fallback in case we didn't get the blogpost on mount
    //(haven't found better way...)
    componentDidUpdate() {
        if (!this.state.postID) return;
        if (this.state.post) return;

        this.getPostByID();
    }

    getPostByID = () => {
        if (!this.state.postID) return;
        
        fetch(`/api/blogposts/get?id=${this.state.postID}`, {
            method: 'GET'
            })
            .then(res => res.json())
            .then(body => this.setState({ post: body[0] })
        );
    }
    
    render() {
        return(
            <div className="fullBlogpost">
                {this.state.post ? (<>
                <h4>{this.state.post.title}</h4>
                <p>{this.state.post.author}</p>
                <p>{this.state.post.dateCreated}</p>
                <p>{this.state.post.bodyText}</p></>) :
                (<div>
                    <p>Loading post...</p>
                </div>)
                }

                <style jsx>{`
                    .fullBlogpost {
                        
                    }
                `}</style>
            </div>
        );
    }
}

export default FullBlogpost;