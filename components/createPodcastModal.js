import React from 'react';
const fetch = require('node-fetch');

class CreatePodcastModal extends React.Component {
    constructor() {
        super();
        this.state = {
            //TODO
        }
    }
    
    submitPodcast = e => {
        e.preventDefault();

        //Insert API 'POST' call here (include state data, and add 'new Date()' for 'datecreated')
    }
    
    render() {
        return(
            <div className="createPodcastModal">
                <form onSubmit={this.submitPodcast} method="POST">
                    <h3>Create Podcast</h3>

                    <p>Title</p>
                    <input type="text" name="title"/>

                    <p>Audio File (.mp3)</p>
                    <input type="file" name="audio"/>

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