import React, {useState} from 'react';


var Related = () => {
  const [x, setX] = useState(0);
  const [x2, setX2] = useState(0);
  const stylesRelated = {
    transform: `translate(${x}px, 0px)`
  };
  const stylesOutfit = {
    transform: `translate(${x2}px, 0px)`
  };

  var moveLeft = function() {
    if (x > 0) {
      setX(x - 340);
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

