// Blog Posts endpoint - /api/blogpost

const db = require('../../components/queries');

export default (request, response) => {
    switch (request.method) {
        case 'POST':
            db.createBlogPost(request, response);
            break;

        case 'GET':
            db.getBlogPost(request, response);
            break;

        case 'PUT':
            db.updateBlogPost(request, response);
            break;

        case 'DELETE':
            db.deleteBlogPost(request, response);
            break;

        default:
            response.status(405).end();
            break;
    }
}