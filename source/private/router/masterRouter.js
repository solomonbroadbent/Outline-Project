import express from 'express';
import apiRouter from './api/apiRouter';
import htmlRouter from './html/htmlRouter';

const router = express.Router();
router.use('/api', apiRouter);
router.use('/', htmlRouter);
export default router;