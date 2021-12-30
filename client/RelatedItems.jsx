import React, {useState, useEffect} from 'react';
import axios from 'axios';


var Related = () => {
  const [x, setX] = useState(0);
  const [x2, setX2] = useState(0);
  let [relPictures, setRelPictures] = useState([]);
  let [relCategories, setRelCategories] = useState([]);
  let [relNames, setRelNames] = useState([]);
  let [relPrices, setRelPrices] = useState([]);
  let [relReviews, setRelReviews] = useState([]);
  let [relProdId, setRelProdId] = useState([]);
  let [initialId, setInitialId] = useState(40344);
  let [cardNumber, setCardNumber] = useState([]);


  const stylesRelated = {
    transform: `translate(${x}px, 0px)`
  };
  const stylesOutfit = {
    transform: `translate(${x2}px, 0px)`
  };

  //averages reviews from metadata
  let reviewAverage = (revs) => {
    let totalNum = 0;
    let revProduct = 0;
    let keys = Object.keys(revs);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      totalNum += parseInt(revs[key]);
      revProduct += parseInt(key) * revs[key];
    }
    //console.log("totalNum: ", totalNum, " Product: ", revProduct);
    let average = ((revProduct / totalNum) / 5);
    return average.toFixed(2);
  };

  //grabs product name, category, and price
  let getInfo = (id) => {
    axios.get(`products/${id}`)
      .then((res) => {
        let temp = relNames;
        temp.push(res.data.name);
        setRelNames(temp);
        temp = relCategories;
        temp.push(res.data.category);
        setRelCategories(temp);
        temp = relPrices;
        temp.push(res.data.default_price);
        setRelPrices(temp);

        //console.log('relNames ', relNames);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //takes product's metadata, and averages out review
  let getMeta = (id) => {
    axios.get(`/reviews/${id}/meta`)
      .then((res) => {
        let obj = res.data.ratings;
        let temp = relReviews;
        temp.push(reviewAverage(obj));
        setRelReviews(temp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //grabs product thumbnail
  let getPicture = (id) => {
    axios.get(`products/${id}/styles`)
      .then((res) => {
        //console.log(res.data.results);
        let tempPics = relPictures;
        tempPics.push(res.data.results[0].photos[0].thumbnail_url);
        setRelPictures(tempPics);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let getData = (id) => {
    axios.get(`products/${id}/related`)
      .then((res) => {
        let temp = [];
        res.data.map(item => {
          getPicture(item);
          getInfo(item);
          getMeta(item);
          temp.push(item);
        });
        setRelProdId(temp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let showState = () => {
    console.log(relProdId);
    console.log(relPictures);
    console.log(relReviews);
    console.log(relPrices);
    console.log(relNames);
    console.log(relCategories);
  };

  useEffect(() => {
    getData(initialId);
    let makestuff = () => {
      console.log("HELLO?");
    };


    return () => {
      console.log("ALL DONE");
    };

  }, [initialId]);

  //left for the carousels needs a function so they don't go further to the left than possible
  var moveLeft = function() {
    if (x > 0) {
      setX(x - 340);
      showState();
    }
  };

  var moveLeftOutfit = function() {
    if (x2 > 0) {
      setX2(x2 - 340);
    }
  };

  return (
    <div>
      <i class="fas fa-arrow-right rArrow" onClick={()=>setX(x + 340)}></i>
      <i class="fas fa-arrow-left lArrow" onClick={()=>moveLeft()}></i>
      <div className="reel"style={stylesRelated}>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
      </div>
      <i className="lArrow" class="fas fa-arrow-left lArrow2" onClick={()=> moveLeftOutfit()}></i>
      <i className="rArrow" class="fas fa-arrow-right rArrow2" onClick={()=>setX2(x2 + 340)}></i>
      <div className="reel"style={stylesOutfit}>
        <Cards/>
      </div>
    </div>
  );
};

var Cards = () => {


  return (
    <div className="Card" >
      <div className="relatedPicHolder">
        <img className="relatedPic" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"></img>
      </div>
      <div className="relatedTextHolder">
        <p id="relatedCategory">Sportswear</p>
        <h3>Forest Green Jacket With Detachable Hood</h3>
        <p>$29.99</p>
        <p>5 Stars</p>
      </div>
    </div>
  );
};

export default Related;
