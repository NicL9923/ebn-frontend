import React from 'react';
const fetch = require('node-fetch');
import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";

class CreatePostModal extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "",
            author: "",
            bodyText: "",
            bodyTextEditorTab: "write"
        }
        this.fileInput = React.createRef();
    }

    submitBlogPost = e => {
        e.preventDefault();

        let body = {
            title: this.state.title,
            author: this.state.author,
            bodyText: this.state.bodyText,
            dateCreated: new Date()
        };
        
        fetch('/api/blogposts/create', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.text())
        .then(body => console.log(body));
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return(
            <div className="createPostModal">
                <form onSubmit={this.submitBlogPost} method="POST">
                    <h3>Create Blog Post</h3>

                    <p>Title</p>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} required/>

                    <p>Author</p>
                    <input type="text" name="author" value={this.state.author} onChange={this.handleInputChange} required/>

                    {/*<p>Optional: Header Image</p>*/}
                    {/*<input type="file" name="image" ref={this.fileInput} accept=".jpg, .jpeg, .png"/>*/}


                    <ReactMde
                        value={this.state.bodyText}
                        onChange={value => this.setState({ bodyText: value })}
                        selectedTab={this.state.bodyTextEditorTab}
                        onTabChange={tab => this.setState({ bodyTextEditorTab: tab })}
                        generateMarkdownPreview={(markdown) =>
                            Promise.resolve(<ReactMarkdown source={markdown} />)
                        }
                    />

                    <input type="submit" value="Create Post"/>
                </form>

                <style jsx>{`
                    .createPostModal {
                        
                    }
                `}</style>
            </div>
        );
    }
}

export default CreatePostModal;