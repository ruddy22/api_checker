'use strict';

/**
 * @module api
 * express-based api, который будет подвергаться тестированию
 */

// dependencies
const express = require('express');


// constants
const api = express();
const port = 4000;

// api callbacks
api
  .route('/test')
  .get((req, res) => res.send('hello world'))
  .post((req, res) => res.json({
    success: true,
    data: '1111111',
  }));

// start the service
api.listen(port, () => {
  process.stdout.write(`server has been started on ${port}`);
});
