// Podcasts endpoint - /api/podcast
const db = require('../../components/queries');

export default (request, response) => {
    switch (request.method) {
        case 'POST':
            db.createPodcast(request, response);
            break;

        case 'GET':
            db.getPodcast(request, response);
            break;

        case 'DELETE':
            db.deletePodcast(request, response);
            break;

        default:
            response.status(405).end();
            break;
    }
}