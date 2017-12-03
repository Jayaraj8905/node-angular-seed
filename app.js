// const hostname = '192.168.1.80';
const port = 3000;

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/', express.static(path.join(__dirname + '/angularApp/dist')));


// User Api's
const user = require('./api/user');
app.get('/api/ping', (req, res) => {
	user.get(req, res);
})


app.listen(port, () => {
	console.log('Server started on port '+ port);
})