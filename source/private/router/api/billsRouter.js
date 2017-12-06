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
specificBillRoute.all(sendResponseForUnsupportedOperation);
//Logic for specific bill name related requests
const specificBillNameRouteURL = specificBillsRouteURL.concat('name');
const specificBillNameRoute = billsRouter.route(specificBillNameRouteURL);
specificBillNameRoute.get((request, response) => response.send(200, 'name sent'));
specificBillNameRoute.put((request, response) => response.send(200, 'name updated'));
specificBillNameRoute.all(sendResponseForUnsupportedOperation);
//Logic for specific bill amount related requests
const specificBillAmountRouteURL = specificBillsRouteURL.concat('amount');
const specificBillAmountRoute = billsRouter.route(specificBillAmountRouteURL);
specificBillAmountRoute.get((request, response) => response.send(200, 'amount sent'));
specificBillAmountRoute.put((request, response) => response.send(200, 'amount updated'));
specificBillAmountRoute.all(sendResponseForUnsupportedOperation);
//Logic for specific bill recurrence related requests
const specificBillRecurrenceRouteURL = specificBillsRouteURL.concat('recurrence');
const specificBillRecurrenceRoute = billsRouter.route(specificBillRecurrenceRouteURL);
specificBillRecurrenceRoute.get((request, response) => response.send(200, 'recurrence object sent'));
specificBillRecurrenceRoute.put((request, response) => response.send(200, 'recurrence object updated'));
specificBillRecurrenceRoute.all(sendResponseForUnsupportedOperation);

function sendResponseForUnsupportedOperation(request, response) {
	response.send(501, 'Unfortunately that operation is unsupported');
}

export default billsRouter;
