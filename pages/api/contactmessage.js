// Contact Messages endpoint - /api/contactmessage
const db = require('../../components/queries');

export default (request, response) => {
    switch (request.method) {
        case 'POST':
            db.createContactMsg(request);
            response.status(200).end("API - Successfully created contact message!");
            break;

        case 'GET':
            let results = db.getContactMsg(request);
            response.status(200).end(results);
            break;

        case 'DELETE':
            db.deleteContactMsg(request);
            response.status(200).end("API - Successfully deleted contact message (ID: " + request.body.id + ")!");
            break;

        default:
            response.status(405).end();
            break;
    }
}