// Podcasts endpoint - /api/podcast
const db = require('../../components/queries');

export default (request, response) => {
    switch (request.method) {
        case 'POST':
            //TODO: Store audio file in specified place, and pass path to DB query for storage
            db.createPodcast(request);
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