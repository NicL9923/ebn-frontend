//Delete podcast endpoint - /api/podcasts/delete
const db = require('../../../components/queries');

export default (request, response) => {
    if (request.method === 'DELETE') {
        db.deletePodcast(request);
    }
    else {
        response.status(405).end();
    }
}