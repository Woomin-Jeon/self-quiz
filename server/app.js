const express = require('express');

const cors = require('cors');

const compression = require('compression');

const app = express();

const path = require('path');

require('./models');

require('dotenv').config();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: "*", credentials: true }));
app.use(express.static('public'));
app.use(compression());

app.use('/', require('./routes'));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Error handler catches server error');
});

app.listen(port, () => {
  console.log(`server is running on port ${port}...`);
});
