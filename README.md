# Udacity Front End Developer NanoDegree Project#1: Weather Journal App

## Requirements

### Project Environment Setup

- [x]  Node and Express Environment:
    - [x]  Node and Express should be installed on the local machine. The project file `server.js` should require `express()`, and should create an instance of their app using express.
    - [x]  The Express app instance should be pointed to the project folder with .html, .css, and .js files.
- [x]  Project Dependencies:
    - [x]  The ‘cors’ package should be installed in the project from the command line, required in the project file server.js, and the instance of the app should be setup to use cors().
    - [x]  The body-parser package should be installed and included in the project.
- [x]  Local Server:
    - [x]  Local server should be running and producing feedback to the Command Line through a working callback function.
- [x]  API Credentials:
    - [x]  Create API credentials on [OpenWeatherMap.com](http://openweathermap.com/)

### APIs and Routes

- [x]  APP API Endpoint:
    - [x]  There should be a JavaScript Object named projectData initiated in the file server.jsto act as the app API endpoint.
- [x]  Integrating OpenWeatherMap API:
    - [x]  The personal API Key for OpenWeatherMap API is saved in a named const variable.
    - [x]  The API Key variable is passed as a parameter to fetch()
    - [x]  Data is successfully returned from the external API.
- [x]  Return Endpoint Data:
    - [x]  There should be a GET route setup on the server side with the first argument as a string naming the route, and the second argument a callback function to return the JS object created at the top of server code.
- [x]  Return Endpoint Data:
    - [x]  There should be an asynchronous function to fetch the data from the app endpoint
- [x]  POST Route:
    - [x]  You should be able to add an entry to the project endpoint using a POST route setup on the server side and executed on the client side as an asynchronous function.
    - [x]  The client side function should take two arguments, the URL to make a POST to, and an object holding the data to POST.
    - [x]  The server side function should create a new entry in the apps endpoint (the named JS object) consisting of the data received from the client side POST

### Dynamic UI

- [x]  Naming HTML Inputs and Buttons For Interaction:
    - [x]  The input element with the placeholder property set to “enter zip code here” should have an id of zip.
    - [x]  The textarea included in project HTML should have an id of feelings.
    - [x]  The button included in project HTML should have an id of generate.
- [x]  Assigning Element Properties Dynamically:
    - [x]  The div with the id, entryHolder should have three child divs with the ids:
        - `date`
        - `temp`
        - `content`
- [x]  Event Listeners:
    - [x]  Adds an event listener to an existing HTML button from DOM using Vanilla JS.
    - [x]  In the file app.js, the element with the id of generate should have an addEventListener() method called on it, with click as the first parameter, and a named callback function as the second parameter.
- [x]  Dynamically Update UI:
    - [x]  Sets the properties of existing HTML elements from the DOM using Vanilla JavaScript.
    - [x]  Included in the async function to retrieve that app’s data on the client side, existing DOM elements should have their innerHTML properties dynamically set according to data returned by the app route.
