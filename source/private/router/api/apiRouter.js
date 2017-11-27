import express from 'express';

const apiRouter = express.Router();
apiRouter.route('/').get((request, response) => {
	response.send('This is the API');
})
.all(sendResponseForUnsupportedOperation);
function sendResponseForUnsupportedOperation(request, response) {
	response.send('Unfortunately that operation is unsupported');
}
export default apiRouter;