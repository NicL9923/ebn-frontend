//Create contact message endpoint - /api/contactmessages/create
const db = require('../../../components/queries');

export default (request, response) => {
    if (request.method === 'POST') {
        db.createContactMsg(request);
        response.status(200).end("API - Successfully created contact message!");
    }
    else {
        response.status(405).end();
    }
}