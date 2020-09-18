import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faMusic } from '@fortawesome/free-solid-svg-icons';

class PodcastBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      dateCreated: this.props.dateCreated,
      audioDuration: "",
      audioFileSize: "",
      autoLoadAudio: this.props.autoLoadAudio
    }
  }

  componentDidMount() {
    if (this.state.autoLoadAudio) {
      this.loadPodcastAudio();
    }
  }
  
  loadPodcastAudio = () => {
    //TODO: Load podcast audio
    this.setState({ autoLoadAudio: true });
  }

  render() {
        return(
            <div className="podcast">
              <h4>{this.state.title}</h4>
              <div>
                <FontAwesomeIcon icon={faCalendarAlt} color="black"/>
                <p>{this.state.dateCreated}</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faClock} color="black"/>
                <p>{this.state.audioDuration}</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faMusic} color="black"/>
                <p>{this.state.audioFileSize} MB</p>
              </div>
              
              {this.state.autoLoadAudio ?
                (<audio controls>
                  <source src="/audiofilesource" type="audio/mpeg"/>
                  Your browser doesn't support the audio element.
                </audio>) : 
                (
                  <button onClick={this.loadPodcastAudio}>Listen</button>
                )
              }

              <style jsx>{`
                .podcast {
                  
                }
                `}</style>
            </div>
        );
    }
}

export default PodcastBlock;