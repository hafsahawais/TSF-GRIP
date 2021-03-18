const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;
const hostname = 'localhost';
app.use(express.static(path.join(__dirname, '/IAK-web')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
const contact = require('./routes/contact');
app.use('/contact', contact);
const volunteer = require('./routes/volunteer');
app.use('/',volunteer);

const forceSSL = function () {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
        ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
};
app.use(forceSSL());
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  if ('OPTIONS' === req.method) {
    res.sendStatus(200);
  } else {
    next();
  }

});

// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname + '/IAK-web'));
// });

// Start Server
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
