import express from 'express';

const billsRouter = express.Router();
const allBillsRoute = billsRouter.route('/');
allBillsRoute.all((request, response) => response.send(501));

export default billsRouter;
