//Delete contact message endpoint - /api/contactmessages/delete
const db = require('../../../components/queries');

export default (request, response) => {
    if (request.method === 'DELETE') {
        db.deleteContactMsg(request);
        response.status(200).end();
    }
    else {
        response.status(405).end();
    }
}