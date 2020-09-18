//Get blog posts endpoint - /api/blogposts/get
const db = require('../queries');

export default (request, response) => {
    if (request.method === 'GET') {
        db.getBlogPost(request.query, response);
    }
    else {
        response.status(405).end();
    }
}