//Create blog post endpoint - /api/blogposts/create
const db = require('../queries');
const fs = require('fs');

export default (request, response) => {
    if (request.method === 'POST') {
        let bodyTextPath = process.env.ROOT_PATH + 'explorers/blogposts/' + request.body.title + '_' + request.body.dateCreated.substr(0, 10) + '.txt';
        
        fs.writeFile(bodyTextPath, request.body.bodyText, err => {
            response.status(400).end("API - Error creating blog post: " + err);
        });

        db.createBlogPost(request, bodyTextPath);
        response.status(200).end("API - Successfully created blog post!");
    }
    else {
        response.status(405).end();
    }
}