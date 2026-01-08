const express = require('express');

cconst express = require('express'
const app = express();

app.get('/', (req, res) => {
  res.send('Oops!');
});

app.listen(3000);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


