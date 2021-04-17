const path = require('path');
const express = require('express');
const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('index', {
    });
})

app.listen(3030, () => {
    console.log('Server is running on port 3030');
})