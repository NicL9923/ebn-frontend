import React from 'react';
const fetch = require('node-fetch');
import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";

class CreatePostModal extends React.Component {
    constructor() {
        super();
        this.state = {
            bodyText: "",
            bodyTextEditorTab: "write"
        }
    }
    
    submitBlogPost = e => {
        e.preventDefault();

        //Insert API 'POST' call here (include state data, and add 'new Date()' for 'datecreated')
    }

    render() {
        return(
            <div className="createPostModal">
                <form onSubmit={this.submitBlogPost} method="POST">
                    <h3>Create Blog Post</h3>

                    <p>Title</p>
                    <input type="text" name="title" required/>

                    <p>Author</p>
                    <input type="text" name="author" required/>

                    <p>Optional: Header Image</p>
                    <input type="file" name="image"/>


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