/*
Q.4 Build a Server that Generate Random Number Using Express 
. ‘/random’  → send random number in response {random:10}
**/

const express = require('express');
const app = express();
const port = 5005; // You can change this to any port you prefer

// Route to generate a random number
app.get('/random', (req, res) => {
  const randomNum = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99
  res.json({ random: randomNum });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
