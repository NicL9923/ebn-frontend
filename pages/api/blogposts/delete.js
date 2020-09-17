//Delete blog post endpoint - /api/blogposts/delete
const db = require('../../../components/queries');

export default (request, response) => {
    if (request.method === 'DELETE') {
        db.deleteBlogPost(request);
        response.status(200).end("API - Successfully deleted blog post (ID: " + request.body.id + ")!");
    }
    else {
        response.status(405).end();
    }
}