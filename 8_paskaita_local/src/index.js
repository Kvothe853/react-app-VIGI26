const express = require('express');
const cors = require('cors');
const logger = require('./logger');

const { port } = require('./config');

const { pets, medications, prescriptions, logs } = require('./routes/');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/pets/', pets);
app.use('/medications/', medications);
app.use('/prescriptions/', prescriptions);
app.use('/logs', logs);

app.get('/', (req, res) => {
  res.send({ msg: 'Server is running' });
});

app.all('*', (req, res) => {
  logger.warn(`Page not found: ${req.url}`);
  res.status(404).send({ error: 'Page not found' });
});

app.listen(port, () => logger.info(`Listening on port ${port}`));
