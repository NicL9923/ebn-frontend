import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faMusic } from '@fortawesome/free-solid-svg-icons';

class PodcastBlock extends React.Component {
    render() {
        return(
            <div className="podcast">
              <h4>*Podcast title*</h4>
              <div>
                <FontAwesomeIcon icon={faCalendarAlt} color="black"/>
                <p>*Date created*</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faClock} color="black"/>
                <p>*audio duration*</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faMusic} color="black"/>
                <p>*audio file size* MB</p>
              </div>
              <audio controls>
                <source src="/audiofilesource" type="audio/mpeg"/>
                Your browser doesn't support the audio element.
              </audio>

              <style jsx>{`
                .podcast {
                  
                }
                `}</style>
            </div>
        );
    }
}

export default PodcastBlock;