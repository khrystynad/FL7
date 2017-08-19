const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

require('./handlers/post')(app);
require('./handlers/get')(app);
require('./handlers/getById')(app);
require('./handlers/put')(app);
require('./handlers/delete')(app);

app.listen(3000, function () {
  console.log('Listening on port 3000!')
});