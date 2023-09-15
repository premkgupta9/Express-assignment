/*
Q.2 Create a Backend For Counter Web App with Api Endpoint for Managing Counter Using Expresl
" ‘/’G →G send counter data as {counter:counter^
" `/increment` → increment counter by 1 and send in response :atest data as {counter:counter^
" `/decrement` → decrement counter by 1 and send in response :atest data as {counter:counter}


No#e:  Using Express is Mandatory for this Question
**/

const express = require('express');
const app = express();
const port = 4045; // You can change this to any port you prefer

let counter = 0;

// Endpoint to get the current counter value
app.get('/', (req, res) => {
  res.json({ counter });
});

// Endpoint to increment the counter by 1
app.get('/increment', (req, res) => {
  counter++;
  res.json({ counter });
});

// Endpoint to decrement the counter by 1
app.get('/decrement', (req, res) => {
  counter--;
  res.json({ counter });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
