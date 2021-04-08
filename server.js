//Weather API
//d7d5f6e358b6ae754ddaec7f01f9da0c
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const port = 8080;
const server = app.listen(port, () => console.log(`Running on port: ${port}`));

app.use(express.static('public'));

const entry = {};

app.get('/entry', (req, res) => {
    console.log(req.body);
});

app.post('/entry', (req, res) => {
    console.log(req.body);
});