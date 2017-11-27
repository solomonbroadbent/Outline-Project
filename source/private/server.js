import express from 'express';

const app = express();
app.get('/', (request, response) => {
	console.log('We got a response');
	response.send('It worked yay');
});
const server = app.listen(8000, console.log('listening on port 8000'));
