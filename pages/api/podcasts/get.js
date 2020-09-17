//Get podcasts endpoint - /api/podcasts/get
const db = require('../../../components/queries');

export default (request, response) => {
    if (request.method === 'GET') {
        db.getPodcast(request);
    }
    else {
        response.status(405).end();
    }
}