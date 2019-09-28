// Information to reach API
const url = 'http://api.openweathermap.org/data/2.5/weather?zip=';
apiKey = '8b8b3165e19ce597ea29c3c6409b48dc';
queryParams = '&units=metric&APPID=';

// Selecting page elements
const inputField = document.getElementById('zip');
const submit = document.getElementById('generate');
const tempHolder = document.getElementById('temp');

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
  console.log(endpoint);
  try {
    const response = await fetch(endpoint);
    if(response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse.main.temp);
    } else {
      throw new Error('Request denied!');
    }
  } catch(error) {
    console.log(error.message);
  }
}

// Display results to webpage
const displayTemp = (event) => {
  event.preventDefault();
  getTemp();
}

submit.addEventListener('click', displayTemp);