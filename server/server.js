const express = require('express');
const port = 3000;
const app = express();
const path = require('path');
const axios = require('axios');
const TOKEN = require('../config.js');

let url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/';


app.use(express.static('public'));
app.use(express.json());
console.log(path.join(__dirname, '../public/index.html'));


// Products Routes
app.get('/', function(req, res) {
  console.log('Hi');
  res.send();
});

// Reviews Routes
app.get('/reviews/:product_id', (req, res) => {
  let id = req.params.product_id;
  let endpoint = url + 'reviews/';

  axios.get(endpoint, {
    headers: {
      "Authorization": TOKEN.TOKEN,
    },
    params: {
      "product_id": id,
    }
  })
  .then((response) => {
    console.log(response);
    res.send(response.data);
  })
  .catch((err) => {
    console.log('Error! ', err);
  })
});

app.get('/reviews/:product_id/meta', (req, res) => {
  let id = req.params.product_id;
  let endpoint = url + 'reviews/meta';

  axios.get(endpoint, {
    headers: {
      "Authorization": TOKEN.TOKEN,
    },
    params: {
      "product_id": id,
    }
  })
  .then((response) => {
    console.log(response);
    res.send(response.data);
  })
  .catch((err) => {
    console.log('Error! ', err);
  })
});

// Q&A Routes
app.get('/qa/questions', (req, res) => {
  let id = req.query.id;
  console.log('req in server: ', req);
  // console.log('Id in server: ', id);
  let endpoint = url + 'qa/questions';

  axios.get(endpoint, {
    headers: {
      "Authorization": TOKEN.TOKEN,
    },
    params: {
      product_id: id,
    }
  })
  .then((response) => {
    console.log(response);
    res.send(response.data);
  })
  .catch((err) => {
    console.log('Error! ', err);
  })
});

app.get('/qa/questions/:product_id/answers', (req, res) => {
  let id = req.params.product_id;
  let endpoint = url + 'qa/questions/' + id + '/answers';

  axios.get(endpoint, {
    headers: {
      "Authorization": TOKEN.TOKEN,
    },
    params: {
      "product_id": id,
    }
  })
  .then((response) => {
    console.log(response);
    res.send(response.data);
  })
  .catch((err) => {
    console.log('Error! ', err);
  })
});

app.listen(port, function() {
  console.log('Listening on port ', port);
});