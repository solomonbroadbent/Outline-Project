import express from 'express';

const billsRouter = express.Router();
const allBillsRoute = billsRouter.route('/');
allBillsRoute.all((request, response) => response.send(501));
const specificBillsRoute = billsRouter.route('/:id');
specificBillsRoute.get((request, response) => response.send(200, request.params.id));

export default billsRouter;
