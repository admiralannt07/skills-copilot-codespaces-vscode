// Create web server
// Create a new route to handle post requests to /comments
// Create an empty array to hold the comments
// When a post request is made to /comments, add the comment to the comments array
// Send back a 201 status code and a success message

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());

const comments = [];

app.post('/comments', (req, res) => {
  comments.push(req.body.comment);
  res.status(201).send('Comment added');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
