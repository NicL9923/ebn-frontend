//Get podcast audio endpoint - /api/podcasts/audio
const db = require('../../../components/queries');
const fs = require('fs');

export default (request, response) => {
    if (request.method === 'GET') {
        db.getPodcastAudio(request.query).then(results => {
            let pathToAudioFile = results[0].pathtoaudiofile;
            let readStream = fs.createReadStream(pathToAudioFile);
            readStream.pipe(response);
            response.status(200);
        });
    }
    else {
        response.status(405).end();
    }
}