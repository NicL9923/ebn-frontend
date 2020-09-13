// Blog Posts endpoint - /api/blogpost

const db = require('../../components/queries');

export default (request, response) => {
    switch (request.method) {
        case 'POST':
            //TODO: Store image in proper place if passed, and pass path on to DB query for storage
            db.createBlogPost(request);
            response.status(200).end("API - Successfully created blog post!");
            break;

        case 'GET':
            db.getBlogPost(request);
            response.status(200).end(results);
            break;

        case 'PUT':
            db.updateBlogPost(request);
            response.status(200).end("API - Successfully updated blog post (ID: " + request.body.id + ")!");
            break;

        case 'DELETE':
            db.deleteBlogPost(request);
            response.status(200).end("API - Successfully deleted blog post (ID: " + request.body.id + ")!");
            break;

        default:
            response.status(405).end();
            break;
    }
}