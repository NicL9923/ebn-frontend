// Blog Posts endpoint - /api/blogpost

const db = require('../../components/queries');
const fs = require('fs');

export default (request, response) => {
    switch (request.method) {
        case 'POST':
            let bodyTextPath = process.env.ROOT_PATH + 'explorers/blogposts/' + request.body.title + '_' + request.body.datecreated.substr(0, 10) + '.txt';
            fs.writeFile(bodyTextPath, request.body.bodyText, err => {
                console.log(err);
                response.status(400).end("API - Error creating blog post: " + err);
                break;
            });

            //TODO: handle an image file stream (store, and pass its path to DB call)

            db.createBlogPost(request, bodyTextPath);
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