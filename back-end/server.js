const express = require('express')
const app = express()

app.get('/data', function (req, res) {
  data = {"data":[20048875,1129,64,597,36,4.308,55399,160,969]};
  res.header("Content-Type", "Application/json");
  res.header("Access-Control-Allow-Origin", "*");
  res.send(JSON.stringify(data))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})