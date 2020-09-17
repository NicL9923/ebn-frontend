//Get blog posts endpoint - /api/blogposts/get
const db = require('../../../components/queries');

export default (request, response) => {
    if (request.method === 'GET') {
        let results = db.getBlogPost(request);
        response.status(200).end(results);
    }
    else {
        response.status(405).end();
    }
}