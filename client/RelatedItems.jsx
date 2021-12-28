import React, {useState} from 'react';


var Related = () => {
  const [x, setX] = useState(50);
  const [x2, setX2] = useState(50);
  const stylesRelated = {
    transform: `translate(${x}px, 0px)`
  };
  const stylesOutfit = {
    transform: `translate(${x2}px, 0px)`
  };
  return (
    <div>
      <div className="reel"style={stylesRelated}onClick={()=>setX(x + 50)}>
        <Cards/>
        <Cards/>
        <Cards/>
      </div>
      <div className="reel"style={stylesOutfit}onClick={()=>setX2(x2 + 50)}>
        <Cards/>
      </div>
    </div>
  );
};

var Cards = () => {
<<<<<<< HEAD


  return (
    <div className="Card" >
      <div className="relatedPicHolder">
        <img className="relatedPic" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"></img>
      </div>
      <div className="relatedTextHolder">
        <h3>Jacket</h3>
        <h4>Sportswear</h4>
        <h4>$29.99</h4>
      </div>
=======
  const [x, setX] = useState(50);
  const styles = {
    transform: `translate(${x}px, 0px)`
  };

  return (
    <div className="Card" style={styles}onClick={()=>setX(x + 50)}>
      Hello
>>>>>>> 77b114f (Implemented basic moving for cards when clicked, added basic borders)
    </div>
  );
};

export default Related;