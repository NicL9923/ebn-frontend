//Get contact messages endpoint - /api/contactmessages/get
const db = require('../../../components/queries');

export default (request, response) => {
    if (request.method === 'GET') {
        let results = db.getContactMsg(request);
        response.status(200).end(results);
    }
    else {
        response.status(405).end();
    }
}