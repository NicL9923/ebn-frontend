// Contact Messages endpoint - /api/contactmessage
const db = require('../../components/queries');

export default (request, response) => {
    switch (request.method) {
        case 'POST':
            db.createContactMsg(request, response);
            break;

        case 'GET':
            db.getContactMsg(request, response);
            break;

        case 'DELETE':
            db.deleteContactMsg(request, response);
            break;

        default:
            response.status(405).end();
            break;
    }
}