//Get contact messages endpoint - /api/contactmessages/get
const db = require('../../../components/queries');

export default (request, response) => {
    if (request.method === 'GET') {
        db.getContactMsg(request.query).then(results => {
            response.status(200).json(results);
        });
        
    }
    else {
        response.status(405).end();
    }
}