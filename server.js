const express = require('express');
const delayRequests = require('delay-requests-middleware');

const app = express();

app.use(delayRequests);
app.use(express.static('static'));

app.listen(3000);
