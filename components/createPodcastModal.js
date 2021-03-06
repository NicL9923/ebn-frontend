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

        let fileReader = new FileReader();
        let audioContext = new (window.AudioContext || window.webkitAudioContext)();
        fileReader.readAsArrayBuffer(this.fileInput.current.files[0]);

        fileReader.onload = event => {
            audioContext.decodeAudioData(event.target.result, buffer => {
                let duration = (buffer.duration).toFixed(2);
                let fileSize = (this.fileInput.current.files[0].size / (1024 * 1024)).toFixed(2);

                let formData = new FormData();
            
                formData.append('title', this.state.title);
                formData.append('dateCreated', new Date());
                formData.append('audioSize', fileSize);
                formData.append('audioDuration', duration)
                formData.append('audioFile', this.fileInput.current.files[0]);

                fetch('/api/podcasts/create', {
                    method: 'POST',
                    body: formData
                })
                .then(res => res.text())
                .then(body => console.log(body));
            });
        }
        
        
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