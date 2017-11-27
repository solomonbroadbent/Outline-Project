import express from 'express';
import billsRouter from './billsRouter';

const apiRouter = express.Router();
const rootRoute = apiRouter.route('/');
rootRoute.get((request, response) => {
	response.send(200, 'This is the API');
});
rootRoute.all(sendResponseForUnsupportedOperation);
apiRouter.use('/bills', billsRouter);


function sendResponseForUnsupportedOperation(request, response) {
	response.send(501, 'Unfortunately that operation is unsupported');
}

export default apiRouter;
