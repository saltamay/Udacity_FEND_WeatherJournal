// Empty object to store current data
const data = {};

// Selecting page elements
const inputField = document.getElementById('zip');
const submit = document.getElementById('generate');
const tempHolder = document.getElementById('temp');
const feelingsHolder = document.getElementById('feelings');
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const content = document.getElementById('content');

// Get date and convert it to UTC standard
const getDate = () => {
  const date = new Date();
  return date.toUTCString();
}

// Information to reach API
const url = 'http://api.openweathermap.org/data/2.5/weather?zip=';
apiKey = '8b8b3165e19ce597ea29c3c6409b48dc';
queryParams = '&units=metric&APPID=';

/**
 * Canadian postal codes would work, only if the "Forward sortation area" portion of the code 
 * (i.e. the first 3 characters) is given.
 * Below is the fuction to get first 3 characters of the zip code
 */

 const getLocation = (zipCode) => {
  let location = "";

  if(isNaN(parseInt(zipCode))) {
    zipCode = zipCode.split(" ");
    zipCode = zipCode.join("");
    zipCode = zipCode.slice(0, 3);

    location = zipCode + ',ca';
  } else {
    location = zipCode + ',us';
  }
  
  return location;
 }

// AJAX call for retrieveing temperature from Open Weather Map API
const getTemp = async () => {

  const query = inputField.value;
  // Get the first 3 characters of the zipcode entered
  const location = getLocation(query);
  const endpoint = url + location + queryParams + apiKey;
  // console.log(endpoint);
  try {
    const response = await fetch(endpoint);
    if(response.ok) {
      const jsonResponse = await response.json();
      // console.log(jsonResponse);
      return jsonResponse.main.temp;
    } else {
      throw new Error('Request denied!');
    }
  } catch(error) {
    console.log(error.message);
  }
}

const getData = async (url = '/') => {
  const response = await fetch(url, {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  try {
    if (response.ok) {
      const newData = await response.json();
      return newData[newData.length - 1];
    }
  } catch(error) {
    console.log("error", 'Bad request!');
  }
}

const postData = async (url = '/addData', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },        
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Request denied!');
  }
}

// Push entries to server
const saveData = async (event) => {
  data.date = getDate();
  data.feelings = feelingsHolder.value;
  data.temp = await getTemp();
  await postData('http://localhost:8000/addData/', data);
}

// Clear entries
const clearDisplay = () => {
  inputField.value = "";
  feelingsHolder.value = "";
}

// Display response to webpage
const displayData = async (event) => {
  if (event) {
    event.preventDefault();
    await saveData();
    const newData = await getData('http://localhost:8000/');
    date.innerHTML = newData.date;
    temp.innerHTML = newData.temp + "&deg;C";
    content.innerHTML = newData.feelings;
    clearDisplay();
  } else {
    const newData = await getData('http://localhost:8000/');
    date.innerHTML = newData.date;
    temp.innerHTML = newData.temp + "&deg;C";
    content.innerHTML = newData.feelings;
  }
  
}

displayData();
submit.addEventListener('click', displayData);