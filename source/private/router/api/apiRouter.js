import express from 'express';
import billsRouter from './billsRouter';

const apiRouter = express.Router();
const rootRoute = apiRouter.route('/');
rootRoute.get((request, response) => {
	response.send('This is the API');
});
rootRoute.all(sendResponseForUnsupportedOperation);
apiRouter.use('/bills', billsRouter);


function sendResponseForUnsupportedOperation(request, response) {
	response.send('Unfortunately that operation is unsupported');
}

export default apiRouter;
