const express = require('express');
const port = 3000;
const app = express();
const path = require('path');


app.use(express.static('public'));
console.log(path.join(__dirname, '../public/index.html'));

app.get('/', function(req, res) {
  console.log('Hi');
  res.send()
});


app.listen(port, function(){
  console.log("Listening on port ", port);
})