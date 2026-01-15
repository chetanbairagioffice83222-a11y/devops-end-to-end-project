/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Basic route
app.get('/', (req, res) => {
  res.send('Oops!');
});

// Optional 404 route
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
