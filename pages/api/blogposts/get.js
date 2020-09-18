//Get blog posts endpoint - /api/blogposts/get
const db = require('../../../components/queries');
const fs = require('fs');

export default (request, response) => {
    if (request.method === 'GET') {
        db.getBlogPost(request.query).then(results => {
            //Use pathtobodyfile to actually read text and add property bodyText to send with response

            results.forEach(row => {
                //To future me: 'twas a great struggle here, because synchronous functions typically don't have callback functions....
                row.bodyText = fs.readFileSync(row.pathtobodyfile, 'utf-8');
            });

            response.status(200).json(results);
        });
    }
    else {
        response.status(405).end();
    }
}