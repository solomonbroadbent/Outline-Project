import express from 'express';

const router = express.Router();
router.route('/').get((request, response) => {
	response.send('Router received request on index');
});
export default router;