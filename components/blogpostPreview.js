import React from 'react';
//TODO: render markdown using react-markdown

class BlogpostPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postTitle: this.props.postTitle,
            postAuthor: this.props.postAuthor,
            dateCreated: this.props.dateCreated,
            bodyText: this.props.bodyText
        }
    }
    
    render() {
        return(
            <div className="blogpostPreview">
                <h4>{this.state.postTitle}</h4>
                <p>{this.state.postAuthor}</p>
                <p>{this.state.dateCreated}</p>
                <p>*First few lines of blog (blurred)...*</p>

                <style jsx>{`
                    .blogpostPreview {
                        
                    }
                `}</style>
            </div>
        );
    }
}

export default BlogpostPreview;