import express from 'express';

const htmlRouter = express.Router();
htmlRouter.route('/').all((request, response) => response.send('Unfortunately the webpage is currently unavailable'));
export default htmlRouter;