import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faMusic } from '@fortawesome/free-solid-svg-icons';

//TODO: Download button to download file

class PodcastBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      dateCreated: new Date(this.props.dateCreated).toLocaleString(),
      podcastID: this.props.id,
      audioDuration: this.props.durationInSec,
      audioFileSize: this.props.sizeInMB,
      autoLoadAudio: this.props.autoLoadAudio
    }
  }

  componentDidMount() {
    this.convertDurationToMinSec();
    if (this.state.autoLoadAudio) {
      this.loadPodcastAudio();
    }
  }

  convertDurationToMinSec = () => {
    let durationFloat = parseFloat(this.state.audioDuration);
    let minutes = Math.floor(durationFloat / 60);
    let seconds = Math.round(durationFloat % 60);

    let durationString = `${minutes}m ${seconds}s`;
    this.setState({ audioDuration: durationString });
  }
  
  loadPodcastAudio = () => {
    this.setState({ autoLoadAudio: true });
  }

  render() {
        return(
            <div className="podcast">
              <h4>{this.state.title}</h4>

              <div>
                <div className="iconDiv">
                  <FontAwesomeIcon icon={faCalendarAlt} color="black"/>
                  <p>{this.state.dateCreated}</p>
                </div>
                <div className="iconDiv">
                  <FontAwesomeIcon icon={faClock} color="black"/>
                  <p>{this.state.audioDuration}</p>
                </div>
                <div className="iconDiv">
                  <FontAwesomeIcon icon={faMusic} color="black"/>
                  <p>{this.state.audioFileSize} MB</p>
                </div>
              </div>

              {this.state.autoLoadAudio ?
                (<audio controls>
                  <source src={`/api/podcasts/audio?id=${this.state.podcastID}`} type="audio/mpeg"/>
                  Your browser doesn't support the audio element.
                </audio>) : 
                (
                  <button onClick={this.loadPodcastAudio}>Listen</button>
                )
              }

              <style jsx>{`
                .podcast {
                  text-align: left;
                }

                .iconDiv {
                  display: flex;
                  flex-direction: row;
                  margin: 12px 0;
                  align-items: center;
                }

                .iconDiv p {
                  margin-left: 5px;
                }
              `}</style>
            </div>
        );
    }
}

export default PodcastBlock;