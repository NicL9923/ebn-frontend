// Podcasts endpoint - /api/podcast
const db = require('../../components/queries');
const fs = require('fs');
const formidable = require('formidable');

export default (request, response) => {
    switch (request.method) {
        case 'POST':
            let form = new formidable.IncomingForm({ keepExtensions: true });
            form.parse(request, (error, fields, files) => {
                if (error) response.status(400).end("API - Error creating podcast: " + error);

                let oldPath = files.audioFile.path;
                let newPath = process.env.ROOT_PATH + 'explorers/podcasts/' + fields.title + '_' + fields.datecreated.substr(0, 10) + '.mp3';
            
                fs.rename(oldPath, newPath, error => {
                    if (error) response.status(400).end("API - Error creating podcast: " + err);
                });

                db.createPodcast(fields.title, fields.datecreated, newPath);
                response.status(200).end("API - Successfully created podcast!");
            });
            
            break;

        case 'GET':
            db.getPodcast(request);
            break;

        case 'DELETE':
            db.deletePodcast(request);
            break;

        default:
            response.status(405).end();
            break;
    }
}

/*Did this for receiving audio file in form-data, will need to manually parse JSON in other requests*/
export const config = {
    api: {
        bodyParser: false
    }
}