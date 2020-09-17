import React from 'react';
const fetch = require('node-fetch');

class CreatePodcastModal extends React.Component {
    constructor() {
        super();
        this.state = {
            title: ""
        }
        this.fileInput = React.createRef();
    }
    
    submitPodcast = e => {
        e.preventDefault();

        let formData = new FormData();
            
        formData.append('title', this.state.title);
        formData.append('datecreated', new Date());
        formData.append('audioFile', this.fileInput.current.files[0]);

        fetch('/api/podcast', {
            method: 'post',
            body: formData
        })
        .then(res => res.text())
        .then(body => console.log(body));
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    render() {
        return(
            <div className="createPodcastModal">
                <form onSubmit={this.submitPodcast} method="POST">
                    <h3>Create Podcast</h3>

                    <p>Title</p>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} required/>

                    <p>Audio File (.mp3)</p>
                    <input type="file" name="audio" ref={this.fileInput} accept=".mp3" required/>

                    <input type="submit" value="Create Podcast"/>
                </form>

                <style jsx>{`
                    .createPodcastModal {
                        
                    }
                `}</style>
            </div>
        );
    }
}

export default CreatePodcastModal;