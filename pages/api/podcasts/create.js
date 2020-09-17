//Create podcast endpoint - /api/podcasts/create
const db = require('../../../components/queries');
const fs = require('fs');
const formidable = require('formidable');

export default (request, response) => {
    if (request.method === 'POST') {
        let form = new formidable.IncomingForm({ keepExtensions: true });
        form.parse(request, (error, fields, files) => {
            if (error) response.status(400).end("API - Error creating podcast: " + error);

            let oldPath = files.audioFile.path;
            let newPath = process.env.ROOT_PATH + 'explorers/podcasts/' + fields.title + '_' + fields.dateCreated.substr(0, 10) + '.mp3';
        
            fs.rename(oldPath, newPath, error => {
                if (error) response.status(400).end("API - Error creating podcast: " + err);
            });

            db.createPodcast(fields.title, fields.dateCreated, newPath);
            response.status(200).end("API - Successfully created podcast!");
        });
    }
    else {
        response.status(405).end();
    }
}

export const config = {
    api: {
        bodyParser: false
    }
}