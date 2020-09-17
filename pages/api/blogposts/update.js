//Update blog post endpoint - /api/blogposts/update
const db = require('../../../components/queries');

export default (request, response) => {
    if (request.method === 'PUT') {
        db.updateBlogPost(request);
        response.status(200).end("API - Successfully updated blog post (ID: " + request.body.id + ")!");
    }
    else {
        response.status(405).end();
    }
}