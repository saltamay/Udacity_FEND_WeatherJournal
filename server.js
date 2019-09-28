/* Empty JS object to act as endpoint for all routes */
projectData = [{}];

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware */
// Here we are configuring express to use body-parser as middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowence
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('weather-journal-app'));

const port = 8000;
// Spin up the server
const server = app.listen(port, listening());
// const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)})
// Callback to debug 
function listening() {
  console.log('server running');
  console.log(`running on location: ${port}`);
}

// POST method route
app.post('/addData', function (req, res) {
  projectData.push(req.body);
  res.send('Success!');
})

// Respond with JS object when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send(projectData);
})

