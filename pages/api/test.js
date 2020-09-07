// Test endpoint - /api/test
const db = require('../../components/queries');

export default (request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({ name: 'John Doe' }));
}