const express = require('express');
const request = require ('request');
const app = express();

app.listen(3000, () => console.log("Server started on port 3000"));

app.get("/", (req, res) => {
    let city = req.query.city;
    request(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=56f272dd8bbe1d5d168b496cc64bb1a9`, function (error, response, body) {
        console.log(body);
        let data = JSON.parse(body);
        if(response.statusCode === 200){
            res.send(`The weather in your city "${city}" is ${data.weather[0].description}`)
        }
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
})