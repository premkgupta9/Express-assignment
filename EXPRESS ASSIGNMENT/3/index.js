/*
Q.3_Create a Basic Server with Different Routes using Expresl
" `/`  → send response as {msg:`I am homepage`}
" `/about` → send response as {msg:`I am about page`}
" `/contact ` → send response as {email:`support@pwskills.com`}
**/

const express = require('express');
const app = express();
const port = 5020; // You can change this to any port you prefer

// Route for the homepage
app.get('/', (req, res) => {
  res.json({ msg: 'I am homepage' });
});

// Route for the about page
app.get('/about', (req, res) => {
  res.json({ msg: 'I am about page' });
});

// Route for the contact page
app.get('/contact', (req, res) => {
  res.json({ email: 'support@pwskills.com' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
