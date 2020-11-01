const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (req, res, next) => {
  res.sendFile(__dirname + '/views/about.html');
})

app.listen(3000, () => {
 console.log("Listening on port 3000...");
});