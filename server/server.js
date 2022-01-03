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

app.get('/products', (req, res) => {
  let endpoint = url + 'products';
  axios.get(endpoint, {
    headers: {
      'Authorization': TOKEN.TOKEN,
    }
  })
    .then((response) => {
      console.log('Data from get to Products endpoint: ', response);
      let jsonData = JSON.stringify(response.data);
      res.send(response.data);
    })
    .catch((err) => {
      console.log('Error! ', err);
    });
});

app.get('/products/:product_id', (req, res) => {
  let id = req.params.product_id;
  let endpoint = url + 'products/' + id;
  axios.get(endpoint, {
    headers: {
      'Authorization': TOKEN.TOKEN,
    }
  })
    .then((response) => {
      console.log(response);
      res.send(response.data);
    })
    .catch((err) => {
      console.log('Error! ', err);
    });
});

app.get('/products/:product_id/styles', (req, res) => {
  let id = req.params.product_id;
  let endpoint = url + 'products/' + id + '/styles';

  axios.get(endpoint, {
    headers: {
      'Authorization': TOKEN.TOKEN,
    }
  })
    .then((response) => {
      console.log(response);
      res.send(response.data);
    })
    .catch((err) => {
      console.log('Error! ', err);
    });
});

app.get('/products/:product_id/related', (req, res) => {
  let id = req.params.product_id;
  let endpoint = url + 'products/' + id + '/related';

  axios.get(endpoint, {
    headers: {
      'Authorization': TOKEN.TOKEN,
    }
  })
    .then((response) => {
      console.log(response);
      res.send(response.data);
    })
    .catch((err) => {
      console.log('Error! ', err);
    });
});

// Reviews Routes
app.get('/reviews/:product_id', (req, res) => {
  let id = req.params.product_id;
  let endpoint = url + 'reviews/';

  axios.get(endpoint, {
    headers: {
      'Authorization': TOKEN.TOKEN,
    },
    params: {
      'product_id': id,
    }
  })
    .then((response) => {
      console.log(response);
      res.send(response.data);
    })
    .catch((err) => {
      console.log('Error! ', err);
    });
});

app.get('/reviews/:product_id/meta', (req, res) => {
  let id = req.params.product_id;
  let endpoint = url + 'reviews/meta';

  axios.get(endpoint, {
    headers: {
      'Authorization': TOKEN.TOKEN,
    },
    params: {
      'product_id': id,
    }
  })
    .then((response) => {
      console.log(response);
      res.send(response.data);
    })
    .catch((err) => {
      console.log('Error! ', err);
    });
});

app.put('/reviews/:review_id/helpful', (req, res) => {
  let id = req.params.review_id;
  let endpoint = url + `reviews/${id}/helpful`;

  axios.put(endpoint, null, {
    headers: {
      'Authorization': TOKEN.TOKEN,
    }
  })
    .then((response) => {
      console.log(response);
      res.end(response.data);
    })
    .catch((err) => {
      console.log('Error! ', err);
    });
});

app.put('/reviews/:review_id/report', (req, res) => {
  let id = req.params.review_id;
  let endpoint = url + `reviews/${id}/report`;

  axios.put(endpoint, null, {
    headers: {
      'Authorization': TOKEN.TOKEN,
    }
  })
    .then(response => {
      res.end(response.data);
    })
    .catch((err) => {
      console.log('Error! ', err);
    });
});

app.post('/reviews', (req, res) => {
  let endpoint = url + 'reviews';
  let newReview = req.body;
  console.log(newReview);
  axios.post(endpoint, newReview, {
    headers: {
      'Authorization': TOKEN.TOKEN,
      'Content-Type': 'application/JSON'
    }
  })
    .then(response => {
      res.end(response.body);
    })
    .catch((err) => {
      console.log('ERRRRRRRRRR: ', err);
    });
});

// Q&A Routes
app.get('/qa/questions', (req, res) => {
  let id = req.query.id;
  console.log('req in server: ', req);
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
      'Authorization': TOKEN.TOKEN,
    },
    // params: {
    //   "product_id": id,
    // }
  })
    .then((response) => {
      console.log(response);
      res.send(response);
    })
    .catch((err) => {
      console.log('Error! ', err);
    });
});

app.listen(port, function() {
  console.log('Listening on port ', port);
});















