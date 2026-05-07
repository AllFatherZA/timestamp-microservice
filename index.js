// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// Route: /date/:dateString ---->takes in a date as a parameter and responds with a json
app.get('/api/:date?', (req, res) => {
  let dateParam = req.params.date;
  let date;

  if (!dateParam) {
    // No parameter → current date
    date = new Date();
  } else if (/^\d+$/.test(dateParam)) {
    // If the parameter is all digits → treat as Unix timestamp (seconds)
    date = new Date(parseInt(dateParam) * 1000);
  } else {
    // Otherwise → treat as date string
    date = new Date(dateParam);
  }

  // Handle invalid date
  if (isNaN(date.getTime())) {
    return res.json({ error: "Invalid Date" });
  }

  const unix = Math.floor(date.getTime() / 1000);
  const utc = date.toUTCString();

  res.json({
    unix: unix,
    utc: utc
  });
});



// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
