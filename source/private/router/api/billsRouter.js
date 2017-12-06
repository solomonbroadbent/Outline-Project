import express from 'express';

const billsRouter = express.Router();
//Logic for requests operating on all bills
const allBillsRouteURL = "/";
const allBillsRoute = billsRouter.route(allBillsRouteURL);
allBillsRoute.get((request, response) => response.send(200, 'array of bills sent'));
allBillsRoute.all((request, response) => response.send(sendResponseForUnsupportedOperation));
//Logic for specific bill related requests
const specificBillsRouteURL = allBillsRouteURL.concat(':id/');
const specificBillRoute = billsRouter.route(specificBillsRouteURL);
specificBillRoute.get((request, response) => response.send(200, request.params.id));
specificBillRoute.put((request, response) => response.send(200, 'updated specific bill'));
specificBillRoute.all(sendResponseForUnsupportedOperation);

function sendResponseForUnsupportedOperation(request, response) {
	response.send(501, 'Unfortunately that operation is unsupported');
}

export default billsRouter;
